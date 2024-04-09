import { Component, Input } from '@angular/core';

@Component({
  selector: 'form-preview',
  template: `
    <h4>Form Id: {{form.id}}</h4>
    <h4>Form name: {{form.name}}</h4>
    <h4>Form text: {{form.text}}</h4>
  `,
  styles: [`

  `]
})
export class FormPreviewComponent {
  @Input() form : any;
}
