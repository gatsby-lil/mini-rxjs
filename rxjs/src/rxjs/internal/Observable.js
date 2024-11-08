import { Subscriber } from './Subscriber'

export class Observable {
    constructor(subscribe) {
        this._subscribe = subscribe
    }
    subscribe(observerOrNext) {
        const subscriber = new Subscriber(observerOrNext);
        this._subscribe(subscriber)
        return subscriber
    }
}