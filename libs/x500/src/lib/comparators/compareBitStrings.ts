import type { BIT_STRING } from "asn1-ts";

export
function compareBitStrings (a: BIT_STRING, b: BIT_STRING): boolean {
    if (a.length !== b.length) {
        return false;
    }
    for (let i = 0; i < a.length; i++) {
        if (a[i] !== b[i]) {
            return false;
        }
    }
    return true;
}

export default compareBitStrings;
