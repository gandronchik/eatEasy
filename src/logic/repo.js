import { singleton } from '../utils/singleton';
import {Network} from "./network";
import {Storage} from "./storage";
import {Platform} from 'react-native';
import * as Device from 'expo-device';

export const AuthState = {
    UNDEFINED: 0,
    NO_AUTHORIZED: 1,
    NO_APPROVED: 2,
    AUTHORIZED: 3
}

//TODO: No Approved

export class Repo {
    static shared = singleton(_ => new Repo());

    authState = AuthState.UNDEFINED;
    authStateChanged;
    errorsHandler;

    constructor() {
        this.network = new Network('https://chef.devop.pw/api/v1/company');
        this.storage = new Storage();
        this.storage.retrieveData().then(_ => {
            if (!!this.storage.token) {
                this.authState = AuthState.AUTHORIZED;
                this.network.headers = { 'Token': this.storage.token };
            } else {
                this.authState = AuthState.NO_AUTHORIZED;
            }
        });
    }

    async signUp(email, firstName, lastName, phone) {
        const os = Device.osName.toLowerCase();
        const version = Device.osVersion;
        let build = 0;
        let device = Device.modelName;
        const res = await this.network.signUp(os, email, firstName, lastName, phone, device, version, build);
        this.handleError(res);

        if (!!res.response && !!res.response.token) {
            await this.storage.setToken(res.response.token);
            this.network.headers = { 'Token': this.storage.token };
            this.authState = AuthState.AUTHORIZED;
            this.authStateChanged(this.authState);
        }

        return res.response;
    }

    async getProfile() {
        const res = await this.network.getProfile();
        this.handleError(res);
        return res.response;
    }

    handleError(res) {
        if (res.code === 401) {
            this.authState = AuthState.NO_AUTHORIZED
            this.authStateChanged(this.authState);
            //    TODO: handle logout
        }

        if (res.code > 299) {
            this.errorsHandler && this.errorsHandler(res.code);
        }
    }
}