import { Component, OnInit } from '@angular/core';

import { Post } from 'src/app/shared/models/post.model';
import { PostService } from 'src/app/shared/services/post.service';
import { Router } from '@angular/router';
import { ToastService } from 'src/app/common/services/toast.service';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'vygo-create-post',
  templateUrl: './create-post.page.html',
  styleUrls: ['./create-post.page.scss'],
})
export class CreatePostPage implements OnInit {
  constructor(
    private postService: PostService,
    private router: Router,
    private toastService: ToastService
  ) {}

  ngOnInit() {}

  create(post: Post) {
    this.postService
      .create({ ...post, photoUrl: this.getRandomPostImage() })
      .pipe(
        tap(() => this.toastService.success()),
        tap(() => this.router.navigate(['posts']))
      )
      .subscribe();
  }

  private getRandomPostImage() {
    return `assets/images/${Math.floor(Math.random() * 10) + 1}.jpeg`;
  }
}
