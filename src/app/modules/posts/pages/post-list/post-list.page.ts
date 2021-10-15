import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs';
import { Post } from 'src/app/shared/models/post.model';
import { PostService } from 'src/app/shared/services/post.service';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.page.html',
  styleUrls: ['./post-list.page.scss'],
})
export class PostListPage implements OnInit {
  post$: Observable<Post[]> = this.postService.find();

  constructor(private postService: PostService) {}

  ngOnInit() {}

  trackByFn(_: number, post: Post) {
    return post.id;
  }
}
