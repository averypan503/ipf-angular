import { Directive, ElementRef, EventEmitter, Output } from '@angular/core';

@Directive({
  selector: '[resize]'
})
export class ResizeDirective {
  @Output() resize = new EventEmitter();
  observer: any;

  constructor(private el: ElementRef) {
    const observer = new ResizeObserver(this.throttle((entries: any) => {
      // 节流
      this.resize.emit();
    }, 2000))
    observer.observe(el.nativeElement);
   }

   ngOnDestroy(): void {
    this.observer.disconnect()
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
