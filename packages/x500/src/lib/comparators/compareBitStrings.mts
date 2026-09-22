import type { BIT_STRING } from "@wildboar/asn1";
import { Buffer } from "node:buffer";

/**
 * @summary Compare two `BIT STRING` values
 * @param a One value
 * @param b The other
 * @returns {boolean} `true` if they match; `false` otherwise
 * @function
 */
export
function compareBitStrings (a: BIT_STRING, b: BIT_STRING): boolean {
    // `Buffer.from(bits.buffer)` copies the whole backing store, which can
    // extend past the bit view (non-zero `byteOffset` or a longer buffer).
    return !Buffer.compare(
        Buffer.from(a.buffer, a.byteOffset, a.byteLength),
        Buffer.from(b.buffer, b.byteOffset, b.byteLength),
    );
}

export default compareBitStrings;
