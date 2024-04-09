import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'ipf-angular';
  constructor() {

  }

  ngAfterViewInit(): void {
    //Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
    //Add 'implements AfterViewInit' to the class.
    const observer = new ResizeObserver((entries: any) => {
      entries.forEach((e: any)=> {let a = '1'});
    })
    // console.log(observer);
    const item = document.querySelector('.main-content');
    // console.log(item);
    if (item !== null) {
      observer.observe(item);
    }
  }
  resize() {
    console.log('resize');
  }
}
