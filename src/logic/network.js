export class Network {
    headers = {};

    constructor(api) {
        this.api = api;
    }

    signUp(os, email, firstName, lastName, phone, device, version, build) {
        const params = {
            os,
            email,
            first_name: firstName,
            last_name: lastName,
            telephone: phone,
            device,
            version,
            build
        };

        return this._request('/registration', 'POST', params);
    }

    getProfile() {
        return this._request('/profile/get', 'GET');
    }

    _request(path, method, params) {
        return fetch(this.api + path, {
            method,
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
                ...this.headers,
            },
            body: JSON.stringify(params),
        })
            .then(async (response) => {
                const json = await response.json();
                return { response: json, code: response.status };
            })
            .catch((_) => {
                return { code: 520 };
            });
    }
}