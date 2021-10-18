import {
  AngularFireAuthGuard,
  redirectLoggedInTo,
  redirectUnauthorizedTo,
} from '@angular/fire/compat/auth-guard';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

import { NgModule } from '@angular/core';

const redirectUnauthorizedToLogin = () => redirectUnauthorizedTo(['auth']);
const redirectLoggedToHome = () => redirectLoggedInTo(['posts']);

const routes: Routes = [
  {
    path: '',
    redirectTo: 'auth',
    pathMatch: 'full',
  },
  {
    path: 'auth',
    canActivate: [AngularFireAuthGuard],
    loadChildren: () =>
      import('./modules/auth/auth.module').then((m) => m.AuthModule),
    data: { authGuardPipe: redirectLoggedToHome },
  },
  {
    path: 'posts',
    canActivate: [AngularFireAuthGuard],
    loadChildren: () =>
      import('./modules/posts/posts.module').then((m) => m.PostsModule),
    data: { authGuardPipe: redirectUnauthorizedToLogin },
  },
  { path: '**', redirectTo: 'auth', pathMatch: 'full' },
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
