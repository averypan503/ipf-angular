import { Component } from '@angular/core';
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
        <button mat-raised-button color="primary" (click)=save()>save</button>
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
export class FormComponent {
    form: any = {
        name: '',
        text: '',
        layout: ''
    };
    constructor(private route: ActivatedRoute, private apiService : ApiService) {
        // console.log(this.route);
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

    }

    save() {
        console.log(this.form);
    }
}
