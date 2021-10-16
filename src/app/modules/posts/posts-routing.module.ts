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
      {
        path: 'update/:id',
        loadChildren: () =>
          import('./pages/update-post/update-post.module').then(
            (m) => m.UpdatePostPageModule
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
  {
    path: 'update-post',
    loadChildren: () =>
      import('./pages/update-post/update-post.module').then(
        (m) => m.UpdatePostPageModule
      ),
  },
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PostsRoutingModule {}
