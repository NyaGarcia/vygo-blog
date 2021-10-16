import { Component, OnInit } from '@angular/core';

import { IonRouterOutlet } from '@ionic/angular';
import { ModalService } from 'src/app/common/services/modal.service';
import { Observable } from 'rxjs';
import { Post } from 'src/app/shared/models/post.model';
import { PostDetailModalComponent } from '../../components/post-detail-modal/post-detail-modal.component';
import { PostService } from 'src/app/shared/services/post.service';
import { ToastService } from 'src/app/common/services/toast.service';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'vygo-post-list',
  templateUrl: './post-list.page.html',
  styleUrls: ['./post-list.page.scss'],
})
export class PostListPage implements OnInit {
  post$: Observable<Post[]> = this.postService.find();

  constructor(
    private postService: PostService,
    private modalService: ModalService,
    private routerOutLet: IonRouterOutlet,
    private toastService: ToastService
  ) {}

  ngOnInit() {}

  remove(post: Post) {
    this.postService
      .delete(post.id)
      .pipe(tap(() => this.toastService.success()))
      .subscribe();
  }

  openModal(post: Post) {
    this.modalService.default({
      component: PostDetailModalComponent,
      componentProps: {
        post,
      },
      swipeToClose: true,
      presentingElement: this.routerOutLet.nativeEl,
    });
  }

  trackByFn(_: number, post: Post) {
    return post.id;
  }
}
