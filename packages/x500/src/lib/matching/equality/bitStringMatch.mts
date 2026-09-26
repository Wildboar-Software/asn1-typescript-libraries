import { Buffer } from "node:buffer";
import type { ASN1Element, BIT_STRING } from "@wildboar/asn1";

/**
 * Rec. ITU-T X.520 (10/2019), clause 8.2.4 `bitStringMatch`.
 *
 * TRUE iff both BIT STRING values have the same number of bits and
 * the bits match bitwise. If the syntax is defined with a
 * `NamedBitList`, trailing zero bits in either value are ignored.
 *
 * Each argument may be an `ASN1Element` or a decoded `BIT_STRING`
 * (`Uint8ClampedArray`, one entry per bit). Constructed encodings
 * are deconstructed while reading.
 */
export
function bitStringMatch (
    assertion: ASN1Element | BIT_STRING,
    value: ASN1Element | BIT_STRING,
): boolean {
    return bitStringMatchTyped(
        assertion instanceof Uint8ClampedArray ? assertion : assertion.bitString,
        value instanceof Uint8ClampedArray ? value : value.bitString,
    );
}

/**
 * `bitStringMatch` on two decoded bit strings. Trailing zero bits
 * that were not part of the bit string are already absent.
 *
 * @param assertion Presented bits.
 * @param value Stored bits.
 * @returns `true` when the bit strings are equal.
 */
export
function bitStringMatchTyped (assertion: BIT_STRING, value: BIT_STRING): boolean {
    return Buffer.compare(
        Buffer.from(assertion.buffer, assertion.byteOffset, assertion.byteLength),
        Buffer.from(value.buffer, value.byteOffset, value.byteLength),
    ) === 0;
}

export default bitStringMatch;
