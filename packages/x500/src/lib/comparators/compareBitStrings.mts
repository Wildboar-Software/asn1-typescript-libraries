import type { BIT_STRING } from "@wildboar/asn1";
import { Buffer } from "node:buffer";

/**
 * Copy the bits of a `BIT STRING` view, not the whole backing buffer.
 */
export
function bitStringBytes (bits: BIT_STRING): Buffer {
    return Buffer.from(bits.buffer, bits.byteOffset, bits.byteLength);
}

/**
 * @summary Compare two `BIT STRING` values
 * @param a One value
 * @param b The other
 * @returns {boolean} `true` if they match; `false` otherwise
 * @function
 */
export
function compareBitStrings (a: BIT_STRING, b: BIT_STRING): boolean {
    return !Buffer.compare(bitStringBytes(a), bitStringBytes(b));
}

export default compareBitStrings;
