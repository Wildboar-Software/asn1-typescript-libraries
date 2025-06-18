import type { BIT_STRING } from "asn1-ts";

/**
 * @summary Compare two `BIT STRING` values
 * @param a One value
 * @param b The other
 * @returns {boolean} `true` if they match; `false` otherwise
 * @function
 */
export
function compareBitStrings (a: BIT_STRING, b: BIT_STRING): boolean {
    return !Buffer.compare(Buffer.from(a.buffer), Buffer.from(b.buffer));
}

export default compareBitStrings;
