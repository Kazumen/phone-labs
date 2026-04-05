import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: 'lab1', pathMatch: 'full' },
  {
    path: 'lab1',
    loadComponent: () => import('./labs/lab1/lab1.component').then(m => m.Lab1Component),
  },
  {
    path: 'lab2',
    loadComponent: () => import('./labs/lab2/lab2.component').then(m => m.Lab2Component),
  },
  {
    path: 'lab3',
    loadComponent: () => import('./labs/lab3/lab3.component').then(m => m.Lab3Component),
  },
  {
    path: 'lab4',
    loadComponent: () => import('./labs/lab4/lab4.component').then(m => m.Lab4Component),
  },
  {
    path: 'lab5',
    loadComponent: () => import('./labs/lab5/lab5.component').then(m => m.Lab5Component),
  },
  {
    path: 'lab6',
    loadComponent: () => import('./labs/lab6/lab6.component').then(m => m.Lab6Component),
  },
  {
    path: 'lab7',
    loadComponent: () => import('./labs/lab7/lab7.component').then(m => m.Lab7Component),
  },
];
