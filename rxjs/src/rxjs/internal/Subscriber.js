import { isFunction } from '../util'
export class Subscriber {
    isStopped = false;
    constructor(observerOrNext) {
        let observer
        if(isFunction(observerOrNext)) {
            observer = {
                next: observerOrNext
            }
        } else {
            observer = observerOrNext
        }
        this.destinaiton = observer
    }
    next(value) {
        if(this.isStopped) {
            return;
        }
        this.destinaiton.next(value);
    }
    complete() {
        if(this.isStopped) {
            return;
        }
        this.isStopped = true;
        this.destinaiton?.complete?.();
    }
}