require('dotenv').config({ path: require('path').join(__dirname, '.env') });
const express  = require('express');
const cors     = require('cors');
const path     = require('path');
const mongoose = require('mongoose');
const bcrypt   = require('bcryptjs');
const jwt      = require('jsonwebtoken');

const app = express();
app.use(cors());
app.use(express.json());

// ── Serve Angular static files ────────────────────────────────────────────────
const FRONTEND_DIST = path.join(__dirname, '..', 'frontend', 'dist', 'lab-app', 'browser');
app.use(express.static(FRONTEND_DIST));

// ── Mongoose models ───────────────────────────────────────────────────────────

const userSchema = new mongoose.Schema({
  email:    { type: String, required: true, unique: true, lowercase: true, trim: true },
  name:     { type: String, required: true, trim: true },
  passHash: { type: String, required: true },
});
const User = mongoose.model('User', userSchema);

const pulseSchema = new mongoose.Schema({ ts: Number, bpm: Number, zone: String });
const PulseRecord = mongoose.model('PulseRecord', pulseSchema, 'pulse_records');

const hrSchema = new mongoose.Schema({
  ts: Number, bpm: Number, deviceId: String, deviceName: String, userEmail: String,
});
const HRRecord = mongoose.model('HRRecord', hrSchema, 'hr_records');

const lightReadingSchema = new mongoose.Schema({ ts: Number, lux: Number, motion: Number, visibility: Number });
const LightReading = mongoose.model('LightReading', lightReadingSchema, 'light_readings');

const lightDeviceSchema = new mongoose.Schema({
  deviceId:      { type: String, unique: true },
  ledBrightness: Number,
  fogLamps:      Boolean,
  updatedAt:     Number,
});
const LightDevice = mongoose.model('LightDevice', lightDeviceSchema, 'light_devices');

// ── Auth middleware ───────────────────────────────────────────────────────────

function authMiddleware(req, res, next) {
  const auth = req.headers.authorization;
  if (!auth || !auth.startsWith('Bearer ')) {
    return res.status(401).json({ error: 'Unauthorized' });
  }
  try {
    req.user = jwt.verify(auth.slice(7), process.env.JWT_SECRET);
    next();
  } catch {
    res.status(401).json({ error: 'Invalid or expired token' });
  }
}

// ── Health check ──────────────────────────────────────────────────────────────

app.get('/api/health', (_req, res) => res.json({ ok: true }));

// ── Lab 4 — Pulse records (no auth) ──────────────────────────────────────────

app.get('/api/pulse', async (req, res) => {
  try {
    const since = Number(req.query.since) || Date.now() - 7 * 86400000;
    const docs = await PulseRecord.find({ ts: { $gte: since } })
      .sort({ ts: 1 }).limit(2000).lean();
    res.json(docs);
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
});

app.post('/api/pulse/bulk', async (req, res) => {
  try {
    const docs = req.body;
    if (!Array.isArray(docs) || docs.length === 0)
      return res.status(400).json({ error: 'Expected non-empty array' });
    await PulseRecord.insertMany(docs);
    res.json({ inserted: docs.length });
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
});

app.delete('/api/pulse', async (_req, res) => {
  try {
    await PulseRecord.deleteMany({});
    res.json({ ok: true });
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
});

// ── Lab 6 — Auth ──────────────────────────────────────────────────────────────

app.post('/api/auth/register', async (req, res) => {
  try {
    const { email, name, password } = req.body;
    if (!email || !name || !password)
      return res.status(400).json({ error: 'Заповніть всі поля' });
    if (password.length < 6)
      return res.status(400).json({ error: 'Пароль мінімум 6 символів' });

    const existing = await User.findOne({ email: email.toLowerCase() });
    if (existing)
      return res.status(409).json({ error: 'Користувач вже існує' });

    const passHash = await bcrypt.hash(password, 10);
    const user = await User.create({ email: email.toLowerCase(), name, passHash });
    const token = jwt.sign(
      { email: user.email, name: user.name },
      process.env.JWT_SECRET,
      { expiresIn: '7d' }
    );
    res.json({ token, user: { email: user.email, name: user.name } });
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
});

app.post('/api/auth/login', async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password)
      return res.status(400).json({ error: 'Введіть email та пароль' });

    const user = await User.findOne({ email: email.toLowerCase() });
    if (!user)
      return res.status(401).json({ error: 'Невірний email або пароль' });

    const ok = await bcrypt.compare(password, user.passHash);
    if (!ok)
      return res.status(401).json({ error: 'Невірний email або пароль' });

    const token = jwt.sign(
      { email: user.email, name: user.name },
      process.env.JWT_SECRET,
      { expiresIn: '7d' }
    );
    res.json({ token, user: { email: user.email, name: user.name } });
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
});

// ── Lab 6 — HR Records (JWT protected) ───────────────────────────────────────

app.get('/api/records', authMiddleware, async (req, res) => {
  try {
    const docs = await HRRecord.find({ userEmail: req.user.email })
      .sort({ ts: 1 }).limit(500).lean();
    res.json(docs);
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
});

app.post('/api/records/bulk', authMiddleware, async (req, res) => {
  try {
    const docs = req.body;
    if (!Array.isArray(docs) || docs.length === 0)
      return res.status(400).json({ error: 'Expected non-empty array' });
    const withEmail = docs.map(d => ({ ...d, userEmail: req.user.email }));
    await HRRecord.insertMany(withEmail);
    res.json({ inserted: withEmail.length });
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
});

app.delete('/api/records', authMiddleware, async (req, res) => {
  try {
    await HRRecord.deleteMany({ userEmail: req.user.email });
    res.json({ ok: true });
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
});

// ── Lab 7 — Street Lighting (no auth) ───────────────────────────────────────

app.get('/api/lights/records', async (req, res) => {
  try {
    const since = Number(req.query.since) || Date.now() - 3_600_000;
    const docs = await LightReading.find({ ts: { $gte: since } }).sort({ ts: 1 }).limit(1000).lean();
    res.json(docs);
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
});

app.post('/api/lights/records/bulk', async (req, res) => {
  try {
    const docs = req.body;
    if (!Array.isArray(docs) || !docs.length) return res.status(400).json({ error: 'Expected array' });
    await LightReading.insertMany(docs);
    res.json({ inserted: docs.length });
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
});

app.delete('/api/lights/records', async (_req, res) => {
  try {
    await LightReading.deleteMany({});
    res.json({ ok: true });
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
});

app.get('/api/lights/devices', async (_req, res) => {
  try {
    let dev = await LightDevice.findOne({ deviceId: 'street-lights' }).lean();
    if (!dev) dev = { deviceId: 'street-lights', ledBrightness: 0, fogLamps: false, updatedAt: Date.now() };
    res.json(dev);
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
});

app.put('/api/lights/devices', async (req, res) => {
  try {
    const { ledBrightness, fogLamps } = req.body;
    const dev = await LightDevice.findOneAndUpdate(
      { deviceId: 'street-lights' },
      { ledBrightness, fogLamps, updatedAt: Date.now() },
      { upsert: true, new: true }
    ).lean();
    res.json(dev);
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
});

// ── SPA fallback — всі не-API запити повертають index.html ───────────────────
app.get(/^(?!\/api).*/, (_req, res) => {
  res.sendFile(path.join(FRONTEND_DIST, 'index.html'));
});

// ── Connect & start ───────────────────────────────────────────────────────────

mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    const port = process.env.PORT || 3000;
    app.listen(port, () =>
      console.log(`✅ Backend running on http://localhost:${port}`)
    );
  })
  .catch(err => {
    console.error('❌ MongoDB connection failed:', err.message);
    process.exit(1);
  });
