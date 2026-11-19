import type { ASN1Element } from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { createEqualityMatcher, type Matcher } from "@wildboar/x500";
import {
    _decode_MSString,
    type MSString,
} from "@wildboar/x400/MSMatchingRules";
import { msStringToString } from "./orAddressUtilities.js";

const decodeMSStringSequence = $._decodeSequenceOf<MSString>(() => _decode_MSString);

function decodeMSStringList (el: ASN1Element): string[] {
    return decodeMSStringSequence(el).map((ms) => msStringToString(ms));
}

function normalizeCaseIgnoreList (assertion: string[]): string[] {
    return assertion.map((text) => text.trim().replace(/\s+/g, " ").toUpperCase());
}

export
const mSSingleSubstringListMatch: Matcher = createEqualityMatcher(
    decodeMSStringList,
    (assertion, value: ASN1Element): boolean => {
        const vElements = value.sequenceOf;
        if (assertion.length !== vElements.length) {
            return false;
        }
        for (let i = 0; i < assertion.length; i++) {
            const vi = msStringToString(_decode_MSString(vElements[i])).trim().replace(/\s+/g, " ").toUpperCase();
            if (vi.indexOf(assertion[i]) < 0) {
                return false;
            }
        }
        return true;
    },
    undefined,
    false,
    normalizeCaseIgnoreList,
);

export default mSSingleSubstringListMatch;
