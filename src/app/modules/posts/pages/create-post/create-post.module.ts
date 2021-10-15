import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { CommonModule } from '@angular/common';
import { CreatePostPage } from './create-post.page';
import { CreatePostPageRoutingModule } from './create-post-routing.module';
import { EditorComponent } from '../../components/editor/editor.component';
import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { Post } from 'src/app/shared/models/post.model';
import { PostFormComponent } from '../../components/post-form/post-form.component';
import { QuillModule } from 'ngx-quill';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CreatePostPageRoutingModule,
    ReactiveFormsModule,
    QuillModule,
  ],
  declarations: [CreatePostPage, PostFormComponent, EditorComponent],
})
export class CreatePostPageModule {
  create(post: Post) {}
}
