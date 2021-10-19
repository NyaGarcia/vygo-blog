import { Component, OnInit, ViewChild } from '@angular/core';
import { map, switchMap, tap } from 'rxjs/operators';

import { AuthService } from 'src/app/common/services/auth.service';
import { Post } from 'src/app/shared/models/post.model';
import { PostFormComponent } from '../../components/post-form/post-form.component';
import { PostService } from 'src/app/shared/services/post.service';
import { Router } from '@angular/router';
import { ToastService } from 'src/app/common/services/toast.service';

@Component({
  selector: 'vygo-create-post',
  templateUrl: './create-post.page.html',
  styleUrls: ['./create-post.page.scss'],
})
export class CreatePostPage implements OnInit {
  @ViewChild('postForm') formComponent: PostFormComponent;

  constructor(
    private postService: PostService,
    private router: Router,
    private toastService: ToastService,
    private authService: AuthService
  ) {}

  ngOnInit() {}

  create(post: Post) {
    this.authService.user
      .pipe(
        map(({ uid, displayName, photoURL }) => ({
          author: {
            uid,
            displayName,
            photoURL,
          },
          photoUrl: this.getRandomPostImage(),
          ...post,
        })),
        switchMap((post) =>
          this.postService.create(post).pipe(
            tap(() => this.router.navigate(['posts'])),
            tap(() => this.toastService.success())
          )
        )
      )
      .subscribe();
  }

  private getRandomPostImage() {
    return `assets/images/${Math.floor(Math.random() * 10) + 1}.jpeg`;
  }

  ionViewDidLeave() {
    this.formComponent.setForm();
  }
}
