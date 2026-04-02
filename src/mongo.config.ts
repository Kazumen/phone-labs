// ─────────────────────────────────────────────────────────────────────────────
// MongoDB Atlas Data API — конфігурація
// ─────────────────────────────────────────────────────────────────────────────
//
// Як отримати дані:
//  1. Зайдіть на https://cloud.mongodb.com і створіть безкоштовний кластер (M0 Free).
//  2. Перейдіть: Atlas > App Services > Data API > Create API key.
//  3. Скопіюйте APP_ID (Data API App ID) і згенерований API Key.
//  4. Замініть значення нижче на свої і збережіть файл.
//
// ВАЖЛИВО: цей файл НЕ комітьте в публічний репозиторій зі справжнім ключем!
// ─────────────────────────────────────────────────────────────────────────────

export const mongoConfig = {
  /** Data API App ID — знайдіть у Atlas → App Services → Data API */
  appId: 'YOUR_APP_ID_HERE',

  /** API Key — згенерований у Atlas → App Services → Data API → Access List */
  apiKey: 'YOUR_API_KEY_HERE',

  /** Назва кластера (за замовчуванням 'Cluster0') */
  dataSource: 'Cluster0',

  /** База даних */
  database: 'phone_labs',
};

// Базовий URL Atlas Data API (не змінюйте)
export const MONGO_BASE_URL =
  `https://data.mongodb-api.com/app/${mongoConfig.appId}/endpoint/data/v1/action`;
