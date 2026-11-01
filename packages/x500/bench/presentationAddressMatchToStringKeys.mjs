/**
 * `presentationAddressMatchTyped` as it was before switching to Latin-1
 * keys, kept as a module so that it is loaded the same way as the current
 * implementation when benchmarked.
 */
import { Buffer } from "node:buffer";
import { readDecoded } from "../src/lib/matching/readValue.mjs";
import {
    _decode_PresentationAddress,
} from "../src/lib/modules/SelectedAttributeTypes/PresentationAddress.ta.mjs";

function bothUndefinedOrSame (a, b) {
    if (a === undefined || b === undefined) {
        return a === undefined && b === undefined;
    }
    return Buffer.compare(a, b) === 0;
}

export
function presentationAddressMatchToStringKeys (a, value) {
    const v = readDecoded(value, _decode_PresentationAddress);
    const storedNAddresses = new Set(
        v.nAddresses.map((naddr) => naddr.toString())
    );
    return (
        (
            bothUndefinedOrSame(a.pSelector, v.pSelector)
            && bothUndefinedOrSame(a.sSelector, v.sSelector)
            && bothUndefinedOrSame(a.tSelector, v.tSelector)
            && a.nAddresses.every((naddr) => storedNAddresses.has(naddr.toString()))
        )
    );
}
