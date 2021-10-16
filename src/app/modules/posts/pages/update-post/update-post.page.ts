import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { map, switchMap, tap } from 'rxjs/operators';

import { Post } from 'src/app/shared/models/post.model';
import { PostService } from 'src/app/shared/services/post.service';
import { ToastService } from 'src/app/common/services/toast.service';

@Component({
  selector: 'vygo-update-post',
  templateUrl: './update-post.page.html',
})
export class UpdatePostPage implements OnInit {
  post$ = this.activatedRoute.paramMap.pipe(
    map((params) => params.get('id')),
    switchMap((id) => this.postService.findById(id))
  );

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private postService: PostService,
    private toastService: ToastService
  ) {}

  ngOnInit() {}

  save(post: Post) {
    this.postService
      .update({
        ...post,
      })
      .pipe(
        tap(() => this.toastService.success()),
        tap(() => this.router.navigate(['/posts']))
      )
      .subscribe();
  }
}
