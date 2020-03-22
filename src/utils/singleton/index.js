import { makeStorage } from './storage';

export function singleton(createInstance) {

    let storage;

    return (...args) => {

        if (!storage) {
            storage = makeStorage();
        }

        const key = JSON.stringify(args);

        let instance = storage.load(key);
        if (!instance) {
            instance = createInstance(...args);
            storage.store(key, instance);
        }

        return instance;
    };
}
