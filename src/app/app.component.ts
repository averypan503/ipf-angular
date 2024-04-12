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
    // const observer = new ResizeObserver(this.throttle((entries: any) => {
    //   entries.forEach((e: any)=> {let a = '1'});
    // }, 2000));
    // console.log(observer);
    // const item = document.querySelector('.main-content');
    // // console.log(item);
    // if (item !== null) {
    //   observer.observe(item);
    // }
  }
  resize() {
    // console.log('resize');
  }

  throttle(fn: Function, delay: number) {
    let timer: any;
    let last: number;
    const context = this;
    return () => {
      const agrs = arguments;
      let now = +new Date();
      if (last && now < (last + delay)) {
          // 不到时间，直接清除定时器，每次进来都会清除之前的
          // 保证再当前区间结束前，已经定义了下一个时间的定时器
          clearTimeout(timer);
          timer = setTimeout(() => {
              last = now;
              fn.apply(context, agrs);
          }, delay);
      } else { // 最开始和到达时间的时候，执行并记录last
          last = now;
          fn.apply(context, agrs);
      }
    }
  }
}
