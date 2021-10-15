import { RouterModule, Routes } from '@angular/router';

import { NgModule } from '@angular/core';
import { PostLayoutPage } from './layout/post-layout.page';

const routes: Routes = [
  {
    path: '',
    component: PostLayoutPage,
    children: [
      {
        path: '',
        loadChildren: () =>
          import('./pages/post-list/post-list.module').then(
            (m) => m.PostListPageModule
          ),
      },
      {
        path: 'create',
        loadChildren: () =>
          import('./pages/create-post/create-post.module').then(
            (m) => m.CreatePostPageModule
          ),
      },
    ],
  },
  {
    path: 'post-list',
    loadChildren: () =>
      import('./pages/post-list/post-list.module').then(
        (m) => m.PostListPageModule
      ),
  },
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PostsRoutingModule {}
