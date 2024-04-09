import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Feedback } from '../mock/feedback.mock';
import { Forms } from '../mock/forms.mock';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private apiUrl: string;
  private feedback = Feedback;
  private forms = Forms;

  constructor(private http: HttpClient) {
    this.apiUrl = 'http://localhost:9000';
  }

  private mockData(data: any) {
    return new Promise((resolve, reject) => setTimeout(() => {resolve(data)}, 500));
  }

  // get feedback by client
  getFeedback() {
    this.feedback.forEach((f:any) =>f.form = this.forms.find(form => form.id === f.formId));
    return this.mockData(this.feedback);
    // return this.http.get()
  }

  // get feddback form
  getFeedbackForms() {
    return this.mockData(this.forms);
  }

  getFeedbackForm(id: number) {
    return this.mockData(this.forms.find(i => i.id === id));
  }
}
