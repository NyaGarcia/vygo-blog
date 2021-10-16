import { Component, Input, OnInit } from '@angular/core';

import { ModalService } from 'src/app/common/services/modal.service';
import { Observable } from 'rxjs';
import { Post } from 'src/app/shared/models/post.model';
import { PostService } from 'src/app/shared/services/post.service';

@Component({
  selector: 'vygo-post-detail',
  templateUrl: './post-detail-modal.component.html',
  styleUrls: ['./post-detail-modal.component.scss'],
})
export class PostDetailModalComponent implements OnInit {
  @Input() post: Post;
  @Input() isHistory: boolean = false;

  constructor(private modalService: ModalService) {}

  ngOnInit() {}

  close() {
    this.modalService.dismiss();
  }
}
