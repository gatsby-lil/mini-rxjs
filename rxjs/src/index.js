import { of, from } from './rxjs'

const arrayObeservable = of(1,2,3)
arrayObeservable.subscribe({
    next: (val) => console.log(val + 'abc')
})


const promisevalue = from(new Promise((resolve, reject) => {
    setTimeout(() => {
        // resolve('ok')
        reject('error');
    }, 3000)
}));
promisevalue.subscribe({
    next: (val) => console.log(val),
    error: (error) => console.log('catch' + error)
})

