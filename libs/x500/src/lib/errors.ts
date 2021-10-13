export
class CannotPerformExactly extends Error {
    constructor (readonly message: string) {
        super(message);
        Object.setPrototypeOf(this, CannotPerformExactly.prototype);
    }
}
