import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

import { AlertService } from 'src/app/common/services/alert.service';
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
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PostListPage implements OnInit {
  post$: Observable<Post[]> = this.postService.find();
  listView = true;

  constructor(
    private postService: PostService,
    private modalService: ModalService,
    private routerOutLet: IonRouterOutlet,
    private toastService: ToastService,
    private alertService: AlertService
  ) {}

  ngOnInit() {}

  remove(post: Post) {
    const handlerRemove = () =>
      this.postService
        .delete(post.id)
        .pipe(tap(() => this.toastService.success()));

    const opts = {
      cssClass: 'my-custom-class',
      header: 'Delete Post!',
      message: `Are you sure that you want to remove the post: <strong>${post.title}</strong>!!!`,
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
        },
        {
          text: 'Yes',
          handler: handlerRemove,
        },
      ],
    };
    this.alertService.default(opts);
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

  setListView() {
    this.listView = true;
  }

  setGridView() {
    this.listView = false;
  }

  trackByFn(_: number, post: Post) {
    return post.id;
  }
}
