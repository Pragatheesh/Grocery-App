export default class UnknownServiceError extends Error {
    constructor(serviceName) {
        super(`Service "${serviceName}" is not registered, cannot instantiate it`);
    }
}
