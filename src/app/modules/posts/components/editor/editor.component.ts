import { Component, ElementRef, Input, ViewChild } from '@angular/core';

import Counter from './counter';
import { FormGroup } from '@angular/forms';
import Quill from 'quill';

Quill.register('modules/counter', Counter);
const font = Quill.import('formats/font');
font.whitelist = ['georgia', 'roboto', 'bonvenoCF'];
Quill.register(font, true);
@Component({
  selector: 'vygo-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.scss'],
})
export class EditorComponent {
  @Input() form: FormGroup;
  @ViewChild('container') container: ElementRef<HTMLDivElement>;

  quillModules = {
    counter: { container: null, unit: 'word' },
  };

  constructor() {}

  ngAfterViewInit() {
    this.quillModules.counter.container = this.container.nativeElement;
  }
}
