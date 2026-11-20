import type { ASN1Element } from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { createEqualityMatcher, type Matcher } from "@wildboar/x500";
import {
    decodeMSStringElement,
    normalizeMSString,
} from "./orAddressUtilities.js";

const decodeMSStringSequence = $._decodeSequenceOf<string>(() => decodeMSStringElement);

function decodeMSStringList (el: ASN1Element): string[] {
    return decodeMSStringSequence(el);
}

function normalizeCaseIgnoreList (assertion: string[]): string[] {
    return assertion.map((text) => normalizeMSString(text, true));
}

export
const mSStringListMatch: Matcher = createEqualityMatcher(
    decodeMSStringList,
    (assertion, value: ASN1Element): boolean => {
        const vElements = value.sequenceOf;
        if (assertion.length !== vElements.length) {
            return false;
        }
        for (let i = 0; i < assertion.length; i++) {
            const vi = normalizeMSString(decodeMSStringElement(vElements[i]), true);
            if (assertion[i] !== vi) {
                return false;
            }
        }
        return true;
    },
    undefined,
    false,
    normalizeCaseIgnoreList,
);

export default mSStringListMatch;
