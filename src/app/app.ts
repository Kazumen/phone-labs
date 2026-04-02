import { Component } from '@angular/core';
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';

interface Lab {
  id: number;
  title: string;
  subtitle: string;
}

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink, RouterLinkActive],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  labs: Lab[] = [
    { id: 1, title: 'Лаб. 1', subtitle: 'Простий рівень' },
    { id: 2, title: 'Лаб. 2', subtitle: 'BLE Датчик струму' },
    { id: 3, title: 'Лаб. 3', subtitle: 'Хмарний монітор' },
    { id: 4, title: 'Лаб. 4', subtitle: 'Графік пульсу' },
    { id: 5, title: 'Лаб. 5', subtitle: 'Стиль ходьби ML' },
    { id: 6, title: 'Лаб. 6', subtitle: 'Cloud Auth + MongoDB' },
  ];
}
