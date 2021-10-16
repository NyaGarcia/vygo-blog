import { Component, OnInit } from '@angular/core';

import { Post } from 'src/app/shared/models/post.model';
import { PostService } from 'src/app/shared/services/post.service';
import { Router } from '@angular/router';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.page.html',
  styleUrls: ['./create-post.page.scss'],
})
export class CreatePostPage implements OnInit {
  constructor(private postService: PostService, private router: Router) {}

  ngOnInit() {}

  create(post: Post) {
    this.postService
      .create({ ...post, photoUrl: this.getRandomPostImage() })
      .pipe(
        tap(() => window.alert('Success')),
        tap(() => this.router.navigate(['posts']))
      )
      .subscribe();
  }

  private getRandomPostImage() {
    return `assets/images/${Math.floor(Math.random() * 10) + 1}.jpeg`;
  }
}
