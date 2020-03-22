export function makeStorage() {
    let storage = {};

    return {
        load: (key) => storage[key],
        store: (key, value) => storage[key] = value
    }
}
