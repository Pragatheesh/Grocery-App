export default class RecursiveDependencyError extends Error {
    constructor(service) {
        super(`Service "${service}" has recursive dependencies`);
    }
}
