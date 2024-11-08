export function isPromise(val) {
    return typeof val === 'object' && val != null && typeof val.then == 'function'
}