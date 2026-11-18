import type { ASN1Element } from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { createEqualityMatcher, type Matcher } from "@wildboar/x500";
import {
    _decode_MSString,
    type MSString,
} from "@wildboar/x400/MSMatchingRules";
import { msStringToString } from "./orAddressUtilities.js";

const decodeMSStringSequence = $._decodeSequenceOf<MSString>(() => _decode_MSString);

export
const mSSingleSubstringListElementsMatch: Matcher = createEqualityMatcher(
    decodeMSStringSequence,
    (assertion, value: ASN1Element): boolean => {
        const vElements = value.sequenceOf;
        const len = Math.min(assertion.length, vElements.length);
        const v = vElements.map((el) => _decode_MSString(el));
        for (let i = 0; i < len; i++) {
            const ai = msStringToString(assertion[i]).trim().replace(/\s+/g, " ").toUpperCase();
            const vi = msStringToString(v[i]).trim().replace(/\s+/g, " ").toUpperCase();
            if (vi.indexOf(ai) < 0) {
                return false;
            }
        }
        return true;
    },
);

export default mSSingleSubstringListElementsMatch;
