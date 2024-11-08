import { Observable } from "../rxjs";

const observable = new Observable((subscriber) => {
  subscriber.next(1);
  subscriber.next(2);
  subscriber.next(3);
  subscriber.complete()
})

const observer= {
  next: (v) => console.log(v),
  error: error => console.console(error),
  complete: () => console.log('complete')
}


observable.subscribe(observer);
