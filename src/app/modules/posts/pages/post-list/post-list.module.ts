import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { PostCardComponent } from '../../components/post-card/post-card.component';
import { PostDetailModalComponent } from '../../components/post-detail-modal/post-detail-modal.component';
import { PostListPage } from './post-list.page';
import { PostListPageRoutingModule } from './post-list-routing.module';
import { QuillModule } from 'ngx-quill';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PostListPageRoutingModule,
    QuillModule,
  ],
  declarations: [PostListPage, PostDetailModalComponent, PostCardComponent],
})
export class PostListPageModule {}
