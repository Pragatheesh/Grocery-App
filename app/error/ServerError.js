export default class ServerError extends Error {
    constructor(response) {
        super('Bad response from server');
        this._response = response;
    }

    get response() {
        return this._response;
    }
}
