export class AppUtil {
    // debounce 去弹跳
    static debounce(fn: Function, delay: number) {
        let timer: any;
        const context = this;
        console.log(this);
        return function() {
            const args = arguments;
            clearTimeout(timer);
            timer = setTimeout(() => fn.apply(context, args), delay)
        }
    }

    // throttle 节流
    static throttle(fn: Function, delay: number) {

    }
}