import { Component, EventEmitter, Input, Output, SimpleChanges } from '@angular/core';
import { AppUtil } from '../utils/app.util';

@Component({
  selector: 'app-form-input',
  template: `
    <input [placeholder]="placeholder" [value]="value" (keyup)="change($event)">
  `,
  styles: [`
  `]
})
export class FormInputComponent {
    @Input() placeholder: string = '';
    @Input() value: string = '';
    @Output() valueChange = new EventEmitter();
    change: any;
    constructor() {}

    ngOnInit(): void {
        // console.log('ng onInit');
        // console.log(this.placeholder, this.value);
        //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
        //Add 'implements OnInit' to the class.
        this.change = this.debounce(this.inputChange, 2000);
    }

    inputChange(e: any) {
        // console.log(arguments);
        this.valueChange.emit(e.target.value);
    }


    // this指向是个问题，apputil的话，this指向util，写在当前组件里还可以
    debounce(fn: Function, delay: number) {
        let timer: any;
        const context = this;
        return function() {
            const args = arguments;
            clearTimeout(timer);
            timer = setTimeout(() => fn.apply(context, args), delay)
        }
    }

    // ngOnChanges(changes: SimpleChanges): void {
    //     //Called before any other lifecycle hook. Use it to inject dependencies, but avoid any serious work here.
    //     //Add '${implements OnChanges}' to the class.
    //     console.log('ng onchanges');
    //   }

    //   ngDoCheck(): void {
    //     //Called every time that the input properties of a component or a directive are checked. Use it to extend change detection by performing a custom check.
    //     //Add 'implements DoCheck' to the class.
    //     console.log('ng doCheck');
    //   }

    //   ngAfterContentInit(): void {
    //     //Called after ngOnInit when the component's or directive's content has been initialized.
    //     //Add 'implements AfterContentInit' to the class.
    //     console.log('ng aterContentInit')
    //   }

    //   ngAfterContentChecked(): void {
    //     //Called after every check of the component's or directive's content.
    //     //Add 'implements AfterContentChecked' to the class.
    //     console.log('ng afterContentChecked');
    //   }

    //   ngAfterViewInit(): void {
    //     //Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
    //     //Add 'implements AfterViewInit' to the class.
    //     console.log('ng AfterViewInit');
    //   }

    //   ngAfterViewChecked(): void {
    //     //Called after every check of the component's view. Applies to components only.
    //     //Add 'implements AfterViewChecked' to the class.
    //     console.log('ng afterViewChecked');
    //   }

    //   ngOnDestroy(): void {
    //     //Called once, before the instance is destroyed.
    //     //Add 'implements OnDestroy' to the class.
    //     console.log('ng onDestory');
    //   }
}
