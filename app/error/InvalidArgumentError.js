export default class InvalidArgumentError extends Error {
    constructor(argumentName) {
        super(`Argument "${argumentName}" is incorrect`);
    }
}
