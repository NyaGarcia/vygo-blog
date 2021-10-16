import { Component, Input, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';

import { ModalService } from 'src/app/common/services/modal.service';
import { Post } from 'src/app/shared/models/post.model';
import { PostService } from 'src/app/shared/services/post.service';

@Component({
  selector: 'vygo-post-detail',
  templateUrl: './post-detail-modal.component.html',
  styleUrls: ['./post-detail-modal.component.scss'],
})
export class PostDetailModalComponent implements OnInit {
  post$: Observable<Post>;

  @Input() post: Post;
  @Input() isHistory: boolean = false;

  constructor(
    private modalService: ModalService,
    private postService: PostService
  ) {}

  ngOnInit() {
    this.getPost();
  }

  private getPost() {
    this.post$ = !this.isHistory
      ? this.postService.findById(this.post.id)
      : of(this.post);
  }

  openModal(post: Post) {
    this.modalService.default({
      component: PostDetailModalComponent,
      componentProps: {
        isHistory: true,
        post,
      },
      swipeToClose: true,
    });
  }

  close() {
    this.modalService.dismiss();
  }
}
