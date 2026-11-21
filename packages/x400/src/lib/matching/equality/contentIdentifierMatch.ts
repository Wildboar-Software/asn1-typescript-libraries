import type { ASN1Element } from "@wildboar/asn1";
import { createEqualityMatcher, type Matcher } from "@wildboar/x500";
import { _decode_ContentIdentifier } from "@wildboar/x400/MTSAbstractService";
import { normalizeMSString } from "./orAddressUtilities.js";

function normalizeContentIdentifier (assertion: string): string {
    return normalizeMSString(assertion, false);
}

export
const contentIdentifierMatch: Matcher = createEqualityMatcher(
    _decode_ContentIdentifier,
    (assertion, value: ASN1Element): boolean => {
        return assertion === normalizeMSString(_decode_ContentIdentifier(value), false); // case-sensitive.
    },
    undefined,
    false,
    normalizeContentIdentifier,
);

export default contentIdentifierMatch;
