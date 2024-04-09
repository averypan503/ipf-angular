import { Directive, ElementRef, EventEmitter, Output } from '@angular/core';

@Directive({
  selector: '[resize]'
})
export class ResizeDirective {
  @Output() resize = new EventEmitter();
  observer: any;

  constructor(private el: ElementRef) {
    const observer = new ResizeObserver((entries: any) => {
      this.resize.emit();
    })
    observer.observe(el.nativeElement);
   }

   ngOnDestroy(): void {
    this.observer.disconnect()
   }
}
