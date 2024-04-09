import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-form-input',
  template: `
    <input [placeholder]="placeholder" [value]="value" (change)="inputChange($event)">
  `,
  styles: [`
  `]
})
export class FormInputComponent {
    @Input() placeholder: string = '';
    @Input() value: string = '';
    @Output() valueChange = new EventEmitter();
    constructor() {}

    ngOnInit(): void {
        // console.log(this.placeholder, this.value);
        //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
        //Add 'implements OnInit' to the class.

    }

    inputChange(e: any) {
        this.valueChange.emit(e.target.value);
    }
}
