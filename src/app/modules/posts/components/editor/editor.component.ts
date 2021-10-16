import { Component, ElementRef, Input, ViewChild } from '@angular/core';

import Counter from './counter';
import { FormGroup } from '@angular/forms';
import Quill from 'quill';

Quill.register('modules/counter', Counter);
@Component({
  selector: 'vygo-editor',
  templateUrl: './editor.component.html',
})
export class EditorComponent {
  @Input() form: FormGroup;
  @ViewChild('container') container: ElementRef<HTMLDivElement>;

  quillModules = {
    toolbar: [
      ['bold', 'italic', 'underline', 'strike'], // toggled buttons
      ['blockquote', 'code-block'],
    ],
    counter: { container: null, unit: 'word' },
  };

  constructor() {}

  ngAfterViewInit() {
    this.quillModules.counter.container = this.container.nativeElement;
  }
}
