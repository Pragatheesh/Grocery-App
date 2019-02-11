import merge from 'lodash.merge';
import ConnectionError from "../error/ConnectionError";
import BadRequestError from "../error/BadRequestError";
import ServerError from "../error/ServerError";

export default class ApiService {
    defaultOptions = {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        }
    };

    constructor(baseUrl) {
        this._baseUrl = baseUrl;
    }

    get(endpoint, query = {}, options = {}) {
        return this._fetch('GET', endpoint, {}, query, options);
    }

    post(endpoint, body = {}, query = {}, options = {}) {
        return this._fetch('POST', endpoint, body, query, options);
    }

    _fetch(method, endpoint, body = {}, query = {}, options = {}) {
        if (Object.keys(query).length > 0) {
            endpoint = `${endpoint}?${this.serialize(query)}`;
        }

        options = merge(
            {},
            this.defaultOptions,
            options,
            {
                method
            }
        );

        if (Object.keys(body).length > 0) {
            options.body = typeof body === 'object' ? JSON.stringify(body) : body;
        }

        console.log(`issuing AJAX call to ${this._baseUrl}${endpoint}`, options);
        return fetch(`${this._baseUrl}${endpoint}`, options)
            .catch((error) => {
                console.log(`AJAX error for ${this._baseUrl}${endpoint}`, error);
                throw new ConnectionError(error);
            })
            .then((response) => {
                console.log(`AJAX response for ${this._baseUrl}${endpoint}`, response);
                if (response.status >= 500) {
                    throw new ServerError(response);
                }

                if (response.status >= 400) {
                    throw new BadRequestError(response);
                }

                return response.json();
            });
    }

    serialize = (obj, prefix) => {
        let str = [];
        for (let [param, value] of entries(obj)) {

            let key = prefix ? `${prefix}[${param}]` : param;

            if (value !== null && typeof value === "object") {
                str.push(this.serialize(value, key));
                continue;
            }

            str.push(`${encodeURIComponent(key)}=${encodeURIComponent(value)}`);
        }
        return str.join("&");
    };
}