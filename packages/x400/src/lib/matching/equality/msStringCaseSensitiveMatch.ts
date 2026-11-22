import type { ASN1Element } from "@wildboar/asn1";
import { createEqualityMatcher, type Matcher } from "@wildboar/x500";
import {
    decodeMSStringElement,
    normalizeMSString,
    prepareMSStringValue,
} from "./orAddressUtilities.js";

function normalizeCaseSensitiveMSString (assertion: string): string {
    return normalizeMSString(assertion, false);
}

export
const mSStringCaseSensitiveMatch: Matcher = createEqualityMatcher(
    decodeMSStringElement,
    (assertion, value: ASN1Element, _getEqualityMatcher, flags = 0): boolean => {
        const v = prepareMSStringValue(decodeMSStringElement(value), false, flags);
        return assertion === v;
    },
    undefined,
    false,
    normalizeCaseSensitiveMSString,
);

export default mSStringCaseSensitiveMatch;
