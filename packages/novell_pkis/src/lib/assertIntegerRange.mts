import {
    ASN1OverflowError,
    type INTEGER,
} from "@wildboar/asn1";

/**
 * @summary Reject an INTEGER outside an inclusive range.
 */
export
function assertIntegerRange (
    value: INTEGER,
    min: bigint,
    max: bigint,
    name: string,
): void {
    if (typeof value === "bigint") {
        if (value < min || value > max) {
            throw new ASN1OverflowError(`${name} violates INTEGER range`);
        }
        return;
    }
    if (!Number.isInteger(value) || BigInt(value) < min || BigInt(value) > max) {
        throw new ASN1OverflowError(`${name} violates INTEGER range`);
    }
}
