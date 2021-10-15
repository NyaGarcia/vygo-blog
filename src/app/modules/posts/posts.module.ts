import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { PostLayoutPage } from './post-layout.page';
import { PostsRoutingModule } from './posts-routing.module';

@NgModule({
  declarations: [PostLayoutPage],
  imports: [CommonModule, IonicModule, PostsRoutingModule],
})
export class PostsModule {}
