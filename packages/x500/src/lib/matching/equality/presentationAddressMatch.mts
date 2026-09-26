import type { ASN1Element, OCTET_STRING } from "@wildboar/asn1";
import { readDecoded } from "../readValue.mjs";
import {
    PresentationAddress,
    _decode_PresentationAddress,
} from "../../modules/SelectedAttributeTypes/PresentationAddress.ta.mjs";
import { Buffer } from "node:buffer";

function bothUndefinedOrSame (a: Uint8Array | undefined, b: Uint8Array | undefined): boolean {
    if (a === undefined || b === undefined) {
        return a === undefined && b === undefined;
    }
    return Buffer.compare(a, b) === 0;
}

/**
 * Rec. ITU-T X.520 (10/2019), clause 8.2.10
 * `presentationAddressMatch`.
 *
 * TRUE iff the P/S/T selectors of presented and stored
 * `PresentationAddress` are equal and the presented `nAddresses`
 * are a subset of the stored ones.
 *
 * Each argument may be an `ASN1Element` or a `PresentationAddress`.
 */
export
function presentationAddressMatch (
    assertion: ASN1Element | PresentationAddress,
    value: ASN1Element | PresentationAddress,
): boolean {
    return presentationAddressMatchTyped(
        readDecoded(assertion, _decode_PresentationAddress),
        readDecoded(value, _decode_PresentationAddress),
    );
}

/**
 * `presentationAddressMatch` on two decoded presentation addresses.
 *
 * @param a Presented address.
 * @param v Stored address.
 * @returns `true` when selectors match and asserted NSAPs are stored.
 */
export
function presentationAddressMatchTyped (
    a: PresentationAddress,
    v: PresentationAddress,
): boolean {
    const storedNAddresses: Set<string> = new Set<string>(
        v.nAddresses.map((naddr: OCTET_STRING): string => naddr.toString())
    );
    return (
        (
            bothUndefinedOrSame(a.pSelector, v.pSelector)
            && bothUndefinedOrSame(a.sSelector, v.sSelector)
            && bothUndefinedOrSame(a.tSelector, v.tSelector)
            && a.nAddresses.every((naddr: OCTET_STRING) => storedNAddresses.has(naddr.toString()))
        )
    );
}

export default presentationAddressMatch;
