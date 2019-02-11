export default class ServiceCreationError extends Error {
    constructor(service) {
        super(`The factory of ${service} didn't return anything`);
    }
}
