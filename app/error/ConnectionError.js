export default class ConnectionError extends Error {
    constructor(response) {
        super('Server unreachable');
        this._response = response;
    }

    get response() {
        return this._response;
    }
}
