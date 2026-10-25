/**
 * @classdesc An error for when a matching rule cannot be performed exactly
 */
export
class CannotPerformExactly extends Error {
    public override readonly message: string;

    constructor (message: string) {
        super(message);
        this.message = message;
        Object.setPrototypeOf(this, CannotPerformExactly.prototype);
    }
}
