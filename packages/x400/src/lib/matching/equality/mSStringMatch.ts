import type { ASN1Element } from "@wildboar/asn1";
import { createEqualityMatcher, type Matcher } from "@wildboar/x500";
import {
    decodeMSStringElement,
    normalizeMSString,
    prepareMSStringValue,
} from "./orAddressUtilities.js";

function normalizeCaseIgnoreMSString (assertion: string): string {
    return normalizeMSString(assertion, true);
}

export
const mSStringMatch: Matcher = createEqualityMatcher(
    decodeMSStringElement,
    (assertion, value: ASN1Element, _getEqualityMatcher, flags = 0): boolean => {
        const v = prepareMSStringValue(decodeMSStringElement(value), true, flags);
        return assertion === v;
    },
    undefined,
    false,
    normalizeCaseIgnoreMSString,
);

export default mSStringMatch;
