import { Routes } from '@angular/router';

export enum RoutesPath {
  initial = '',
}

export const routes: Routes = [
  {
    path: RoutesPath.initial,
    loadComponent: () =>
      import('./components/employee/employee.component').then((c) => c.EmployeeComponent),
  },
  {
    path: '**',
    redirectTo: RoutesPath.initial,
  },
];
