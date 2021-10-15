import { Component, Input } from '@angular/core';

import { FormGroup } from '@angular/forms';

@Component({
  selector: 'vygo-editor',
  templateUrl: './editor.component.html',
})
export class EditorComponent {
  @Input() form: FormGroup;

  quillModules = {
    toolbar: [
      ['bold', 'italic', 'underline', 'strike'], // toggled buttons
      ['blockquote', 'code-block'],
    ],
  };

  constructor() {}
}
