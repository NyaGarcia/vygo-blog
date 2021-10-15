import { RouterModule, Routes } from '@angular/router';

import { NgModule } from '@angular/core';
import { PostLayoutPage } from './layout/post-layout.page';

const routes: Routes = [
  {
    path: '',
    component: PostLayoutPage,
    children: [
      {
        path: 'create',
        loadChildren: () =>
          import('./pages/create-post/create-post.module').then(
            (m) => m.CreatePostPageModule
          ),
      },
    ],
  },
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PostsRoutingModule {}
