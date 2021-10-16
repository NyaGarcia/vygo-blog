import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { CommonModule } from '@angular/common';
import { EditorComponent } from '../../components/editor/editor.component';
import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { PostFormComponent } from '../../components/post-form/post-form.component';
import { QuillModule } from 'ngx-quill';
import { UpdatePostPage } from './update-post.page';
import { UpdatePostPageRoutingModule } from './update-post-routing.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UpdatePostPageRoutingModule,
    ReactiveFormsModule,
    QuillModule,
  ],
  declarations: [UpdatePostPage, PostFormComponent, EditorComponent],
})
export class UpdatePostPageModule {}
