import type { ASN1Element } from "@wildboar/asn1";
import { createEqualityMatcher, type Matcher } from "@wildboar/x500";
import { _decode_ContentIdentifier } from "@wildboar/x400/MTSAbstractService";

function normalizeContentIdentifier (assertion: string): string {
    return assertion.trim().replace(/\s+/g, " ");
}

export
const contentIdentifierMatch: Matcher = createEqualityMatcher(
    _decode_ContentIdentifier,
    (assertion, value: ASN1Element): boolean => {
        return assertion === value.printableString.trim().replace(/\s+/g, " "); // case-sensitive.
    },
    undefined,
    false,
    normalizeContentIdentifier,
);

export default contentIdentifierMatch;
