import { isArrayLike, isPromise } from "../../util";
import { Observable } from "../Observable";

export function innerFrom(input) {
    if(input instanceof Observable) {
        return input
    }
    if(isPromise(input)) {
        return fromPromise(input)
    }
    if(isArrayLike(input)) {
        return fromArrayLike(input)
    }
}


function fromArrayLike(arrayLike) {
    return new Observable((subscriber) => {
        for(let item of arrayLike) {
            subscriber.next(item);
        }
        subscriber.complete()
    })
}

function fromPromise(promise) {
    return new Observable((subscriber) => {
        promise.then(value => {
            subscriber.next(value)
            subscriber?.complete?.();
        }, err => {
            subscriber?.error(err)
        })
    })
}