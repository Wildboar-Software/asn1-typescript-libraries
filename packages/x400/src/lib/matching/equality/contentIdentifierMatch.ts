import type { ASN1Element } from "@wildboar/asn1";
import {
    createEqualityMatcher,
    MATCH_FLAG_CONSTANT_TIME,
    type Matcher,
} from "@wildboar/x500";
import { stringsEqual } from "../constantTime.js";
import { _decode_ContentIdentifier } from "@wildboar/x400/MTSAbstractService";
import { normalizeMSString, prepareMSStringValue } from "./orAddressUtilities.js";

function normalizeContentIdentifier (assertion: string): string {
    return normalizeMSString(assertion, false);
}

export
const contentIdentifierMatch: Matcher = createEqualityMatcher(
    _decode_ContentIdentifier,
    (assertion, value: ASN1Element, _getEqualityMatcher, flags = 0): boolean => {
        const v = prepareMSStringValue(_decode_ContentIdentifier(value), false, flags);
        return stringsEqual(assertion, v, flags & MATCH_FLAG_CONSTANT_TIME);
    },
    undefined,
    false,
    normalizeContentIdentifier,
);

export default contentIdentifierMatch;
