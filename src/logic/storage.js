import { AsyncStorage } from "react-native";

export class Storage {
    constructor() {
        this.order = [];
    }

    async setToken(token) {
        this.token = token;
        await this._storeData('token', token);
    }

    retrieveData = async () => {
        const keys = ['token', 'order'];
        for (const key in keys) {
            try {
                const value = await AsyncStorage.getItem(key);
                if (value !== null) {
                    this[key] = value;
                }
            } catch (error) {
            }
        }
    }

    _storeData = async (key ,value) => {
        try {
            await AsyncStorage.setItem(key, value);
        } catch (error) {

        }
    }
}