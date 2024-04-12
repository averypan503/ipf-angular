import { Component, SimpleChanges, OnChanges, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-form',
  template: `
    <div class="main-container">
        <h1>Edit form</h1>
        <h2>Form name: </h2>
        <app-form-input [placeholder]="'Please input form name'" [(value)]="form.name"></app-form-input>
        <!-- <input placeholder="Please input form name" [(ngModel)]="form.name"> -->
        <h2>Form text: </h2>
        <app-form-input [placeholder]="'Please input form text'" [(value)]="form.text"></app-form-input>
        <!-- <input placeholder="Please input form text" [(ngModel)]="form.text"> -->
        <h2>Form text: </h2>
        <select [(ngModel)]="form.layout">
            <option value="vertical">Vertical</option>
            <option value="horizontal">Horizontal</option>
        </select>
        <br/><br/>
        <button mat-raised-button color="primary" (click)=save() [disabled]="saveButtonDisabled()">save</button>
    </div>
  `,
  styles: [`
    :host {
        width: 100%;
        height: 100%;
    }
    .main-container {
        padding-top: 40px;
    }
  `]
})
export class FormComponent{
    form: any = {
        name: '',
        text: '',
        layout: ''
    };
    constructor(private route: ActivatedRoute, private apiService : ApiService) {
        // console.log(this.route);
        this.form.name = 'test';
        this.route.params.subscribe((params: any) => {
            const id = +params['id'];
            if (params['id']) {
                this.apiService.getFeedbackForm(id).then(form => {
                    this.form = form;
                    // console.log(form, this.form);
                })
            }
        })
    }

    ngOnInit(): void {
        //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
        //Add 'implements OnInit' to the class.
        // console.log('ng onInit');
    }

    saveButtonDisabled() {
        return !this.form.name || !this.form.text || !this.form.layout;
    }

    save() {
        console.log(this.form);
    }

    // ngOnChanges(changes: SimpleChanges): void {
    //     //Called before any other lifecycle hook. Use it to inject dependencies, but avoid any serious work here.
    //     //Add '${implements OnChanges}' to the class.
    //     console.log('ng onchanges', changes);
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
