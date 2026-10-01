import { NxWelcome } from './nx-welcome';
import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  {
    path: 'user',
    loadChildren: () => import('user/Routes').then((m) => m!.remoteRoutes),
  },
  {
    path: 'public',
    loadChildren: () => import('public/Routes').then((m) => m!.remoteRoutes),
  },
  {
    path: 'admin',
    loadChildren: () => import('admin/Routes').then((m) => m!.remoteRoutes),
  },
  {
    path: '',
    component: NxWelcome,
  },
];
