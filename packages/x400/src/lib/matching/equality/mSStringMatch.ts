import type { ASN1Element } from "@wildboar/asn1";
import { createEqualityMatcher, type Matcher } from "@wildboar/x500";
import { decodeMSStringElement, normalizeMSString } from "./orAddressUtilities.js";

function normalizeCaseIgnoreMSString (assertion: string): string {
    return normalizeMSString(assertion, true);
}

export
const mSStringMatch: Matcher = createEqualityMatcher(
    decodeMSStringElement,
    (assertion, value: ASN1Element): boolean => {
        const v = normalizeCaseIgnoreMSString(decodeMSStringElement(value));
        return assertion === v;
    },
    undefined,
    false,
    normalizeCaseIgnoreMSString,
);

export default mSStringMatch;
