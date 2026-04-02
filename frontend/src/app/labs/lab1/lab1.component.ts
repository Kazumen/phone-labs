import { Component, OnDestroy, signal, computed } from '@angular/core';
import { CommonModule } from '@angular/common';

type TiltState = 'рівно' | 'нахил вліво' | 'нахил вправо' | 'нахил вперед' | 'нахил назад';
type TiltClass = 'level' | 'left' | 'right' | 'fwd' | 'back';

@Component({
  selector: 'app-lab1',
  imports: [CommonModule],
  templateUrl: './lab1.component.html',
  styleUrl: './lab1.component.scss',
})
export class Lab1Component implements OnDestroy {
  readonly THRESHOLD = 15;
  readonly BUBBLE_MAX = 70;

  started = signal(false);
  error = signal('');
  gamma = signal(0);
  beta = signal(0);
  status = signal<TiltState>('рівно');
  statusClass = signal<TiltClass>('level');

  private handler = (e: DeviceOrientationEvent) => this.handleOrientation(e);

  get bubbleX() {
    return Math.max(-this.BUBBLE_MAX, Math.min(this.BUBBLE_MAX, (this.gamma() / 90) * this.BUBBLE_MAX));
  }
  get bubbleY() {
    return Math.max(-this.BUBBLE_MAX, Math.min(this.BUBBLE_MAX, (this.beta() / 90) * this.BUBBLE_MAX));
  }

  start() {
    const DOE = DeviceOrientationEvent as any;
    if (typeof DOE.requestPermission === 'function') {
      // Must call requestPermission() synchronously in user gesture handler (iOS 13+)
      DOE.requestPermission()
        .then((state: string) => {
          if (state === 'granted') {
            this.attachListener();
          } else {
            this.error.set('Доступ заборонено. Увімкніть у Налаштуваннях → Safari → Сенсори руху і орієнтації.');
          }
        })
        .catch((e: any) => {
          this.error.set('Помилка дозволу: ' + (e?.message ?? e));
        });
    } else {
      // Android / desktop — no permission needed
      this.attachListener();
    }
  }

  private attachListener() {
    window.addEventListener('deviceorientation', this.handler, true);
    this.started.set(true);
  }

  private handleOrientation(e: DeviceOrientationEvent) {
    const g = e.gamma ?? 0;
    const b = e.beta ?? 0;
    this.gamma.set(g);
    this.beta.set(b);

    const ag = Math.abs(g), ab = Math.abs(b);
    if (ag < this.THRESHOLD && ab < this.THRESHOLD) {
      this.status.set('рівно'); this.statusClass.set('level');
    } else if (ag >= ab) {
      if (g < 0) { this.status.set('нахил вліво'); this.statusClass.set('left'); }
      else        { this.status.set('нахил вправо'); this.statusClass.set('right'); }
    } else {
      if (b > 0) { this.status.set('нахил вперед'); this.statusClass.set('fwd'); }
      else        { this.status.set('нахил назад'); this.statusClass.set('back'); }
    }
  }

  ngOnDestroy() {
    window.removeEventListener('deviceorientation', this.handler, true);
  }
}
