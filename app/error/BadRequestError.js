export default class BadRequestError extends Error {
    constructor(response) {
        super('Bad Request');
        this._response = response;
    }

    get response() {
        return this._response;
    }
}
