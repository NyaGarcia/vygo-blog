import 'quill';

export interface Config {
  container: HTMLDivElement;
  unit: 'word' | 'char';
}

export interface QuillInstance {
  on: any;
  getText: any;
}

export default class Counter {
  quill: QuillInstance;
  options: Config;

  constructor(quill, options) {
    this.quill = quill;
    this.options = options;

    const container = this.options.container;

    /*    const length = this.calculate();*/
    container.innerHTML = `0 ${this.options.unit}s`;

    this.quill.on('editor-change', () => {
      const length = this.calculate();

      container.innerHTML = length + ' ' + this.options.unit + 's';
    });
  }

  calculate() {
    const text = this.quill.getText().trim();

    if (this.options.unit === 'word') {
      return !text ? 0 : text.split(/\s+/).length;
    }
    return text.length;
  }
}
