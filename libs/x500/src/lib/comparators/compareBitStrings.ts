import type { BIT_STRING } from "asn1-ts";

export
function compareBitStrings (a: BIT_STRING, b: BIT_STRING): boolean {
    return !Buffer.compare(Buffer.from(a.buffer), Buffer.from(b.buffer));
}

export default compareBitStrings;
