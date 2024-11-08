export function isArrayLike(val) {
    return val && typeof val.length === 'number' && typeof val !== 'function'
}