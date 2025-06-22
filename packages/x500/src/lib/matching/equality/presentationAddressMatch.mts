import EqualityMatcher from "../../types/EqualityMatcher.mjs";
import type { ASN1Element, OCTET_STRING } from "@wildboar/asn1";
import {
    PresentationAddress,
    _decode_PresentationAddress,
} from "../../modules/SelectedAttributeTypes/PresentationAddress.ta.mjs";

function bothUndefinedOrSame (a: Uint8Array | undefined, b: Uint8Array | undefined): boolean {
    return (
        ((a === undefined) && (b === undefined))
        || (
            (a && b)
            && !Buffer.compare(a, b)
        )
    );
}

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
