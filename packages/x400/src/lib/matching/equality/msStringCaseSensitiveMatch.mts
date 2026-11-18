import { Buffer } from "node:buffer";
import type { ASN1Element } from "@wildboar/asn1";
import {
    createEqualityMatcher,
    type Matcher,
    type TypedEquationFunction,
} from "@wildboar/x500";
import {
    _decode_MSString,
} from "@wildboar/x400/MSMatchingRules";
import { msStringToString } from "./orAddressUtilities.mjs";

export
function mSStringCaseSensitiveMatchTyped(
    assertion: ASN1Element,
    value: ASN1Element,
): boolean | undefined {
    // If the two values are byte-for-byte equal, return.
    if (!Buffer.compare(assertion.value, value.value)) {
        return true;
    }
    const a = msStringToString(_decode_MSString(assertion));
    const v = msStringToString(_decode_MSString(value));
    return (a.trim().replace(/\s+/g, " ") === v.trim().replace(/\s+/g, " "));
}

mSStringCaseSensitiveMatchTyped satisfies TypedEquationFunction<ASN1Element>;

export
const mSStringCaseSensitiveMatch: Matcher = createEqualityMatcher(
    (el: ASN1Element): ASN1Element => el,
    mSStringCaseSensitiveMatchTyped,
);

export default mSStringCaseSensitiveMatch;
