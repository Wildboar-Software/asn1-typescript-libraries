/**
 * @classdesc An error for when a matching rule cannot be performed exactly
 */
export
class CannotPerformExactly extends Error {
    constructor (override readonly message: string) {
        super(message);
        Object.setPrototypeOf(this, CannotPerformExactly.prototype);
    }
}
