import EqualityMatcher from "../../types/EqualityMatcher.mjs";
import type { ASN1Element, OCTET_STRING } from "@wildboar/asn1";
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
 */
export
const presentationAddressMatch: EqualityMatcher = (
    assertion: ASN1Element,
    value: ASN1Element,
): boolean => {
    const a: PresentationAddress = _decode_PresentationAddress(assertion);
    const v: PresentationAddress = _decode_PresentationAddress(value);
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
