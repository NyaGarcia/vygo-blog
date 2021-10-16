import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { Post } from 'src/app/shared/models/post.model';

@Component({
  selector: 'vygo-post-card',
  templateUrl: './post-card.component.html',
})
export class PostCardComponent implements OnInit {
  @Input() post: Post;

  @Output()
  public clickOutput = new EventEmitter<MouseEvent>();

  constructor() {}

  ngOnInit() {}

  public handleClick(event: MouseEvent) {
    this.clickOutput.emit(event);
  }
}
