import { Component, OnInit } from '@angular/core';

import { Post } from 'src/app/shared/models/post.model';
import { PostService } from 'src/app/shared/services/post.service';

@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.page.html',
  styleUrls: ['./create-post.page.scss'],
})
export class CreatePostPage implements OnInit {
  constructor(private postService: PostService) {}

  ngOnInit() {}

  create(post: Post) {
    this.postService.create(post);
  }
}
