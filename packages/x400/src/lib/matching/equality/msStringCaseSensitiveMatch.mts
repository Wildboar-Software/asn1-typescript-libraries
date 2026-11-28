import type { ASN1Element } from "@wildboar/asn1";
import {
    createEqualityMatcher,
    MATCH_FLAG_CONSTANT_TIME,
    type Matcher,
} from "@wildboar/x500";
import { stringsEqual } from "../constantTime.mjs";
import {
    decodeMSStringElement,
    normalizeMSString,
    prepareMSStringValue,
} from "./orAddressUtilities.mjs";

function normalizeCaseSensitiveMSString (assertion: string): string {
    return normalizeMSString(assertion, false);
}

export
const mSStringCaseSensitiveMatch: Matcher = createEqualityMatcher(
    decodeMSStringElement,
    (assertion, value: ASN1Element, _getEqualityMatcher, flags = 0): boolean => {
        const v = prepareMSStringValue(decodeMSStringElement(value), false, flags);
        return stringsEqual(assertion, v, flags & MATCH_FLAG_CONSTANT_TIME);
    },
    undefined,
    false,
    normalizeCaseSensitiveMSString,
);

export default mSStringCaseSensitiveMatch;
