import type { ASN1Element } from "@wildboar/asn1";
import { createEqualityMatcher, type Matcher } from "@wildboar/x500";
import { _decode_MSString } from "@wildboar/x400/MSMatchingRules";
import { msStringToString } from "./orAddressUtilities.js";

function decodeMSStringAssertion (el: ASN1Element): string {
    return msStringToString(_decode_MSString(el));
}

function normalizeCaseSensitiveMSString (assertion: string): string {
    return assertion.trim().replace(/\s+/g, " ");
}

export
const mSStringCaseSensitiveMatch: Matcher = createEqualityMatcher(
    decodeMSStringAssertion,
    (assertion, value: ASN1Element): boolean => {
        const v = normalizeCaseSensitiveMSString(msStringToString(_decode_MSString(value)));
        return assertion === v;
    },
    undefined,
    false,
    normalizeCaseSensitiveMSString,
);

export default mSStringCaseSensitiveMatch;
