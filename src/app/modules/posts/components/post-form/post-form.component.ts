import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';

import { Post } from 'src/app/shared/models/post.model';

@Component({
  selector: 'vygo-post-form',
  templateUrl: './post-form.component.html',
})
export class PostFormComponent implements OnInit {
  @Input() post: Partial<Post> = {};
  @Output() data: EventEmitter<any> = new EventEmitter();

  @ViewChild('formDirective') formDirective: NgForm;

  form: FormGroup;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.setForm();
  }

  setForm() {
    this.form = this.formBuilder.group({
      title: [
        this.post.title,
        [Validators.required, Validators.maxLength(200)],
      ],
      subtitle: [
        this.post.subtitle,
        [Validators.required, Validators.maxLength(200)],
      ],
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
    const { editor, ...formValues } = this.form.value;
    const post = {
      id,
      originalDocRef,
      ...formValues,
      content: this.content.value,
    };

    this.data.emit(post);
    this.post = post;
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

  resetForm() {
    this.formDirective.resetForm();
  }
}
