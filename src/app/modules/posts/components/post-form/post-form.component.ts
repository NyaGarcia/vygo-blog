import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { Post } from 'src/app/shared/models/post.model';

@Component({
  selector: 'vygo-post-form',
  templateUrl: './post-form.component.html',
})
export class PostFormComponent implements OnInit {
  @Input() post: Partial<Post> = {};
  @Output() data: EventEmitter<any> = new EventEmitter();

  form: FormGroup;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.setForm();
  }

  setForm() {
    this.form = this.formBuilder.group({
      title: [this.post.title, [Validators.required]],
      subtitle: [this.post.subtitle, [Validators.required]],
      editor: this.formBuilder.group({
        content: [this.post.content, [Validators.required]],
      }),
    });
  }

  onSubmit() {
    if (!this.form.valid) {
      return false;
    }

    const { id, originalDocRef } = this.post;

    this.data.emit({
      id,
      originalDocRef,
      ...this.form.value,
      ...this.form.get('editor').value,
    });
  }

  get title() {
    return this.form.get('title');
  }

  get subtitle() {
    return this.form.get('subtitle');
  }

  get editor() {
    return this.form.get('editor');
  }

  get content() {
    return this.editor.get('content');
  }
}
