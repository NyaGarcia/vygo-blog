import { RouterModule, Routes } from '@angular/router';

import { NgModule } from '@angular/core';
import { PostLayoutPage } from './post-layout.page';

const routes: Routes = [{ path: '', component: PostLayoutPage }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PostsRoutingModule {}
