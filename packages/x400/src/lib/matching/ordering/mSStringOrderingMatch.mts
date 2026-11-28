import { ASN1Element } from "@wildboar/asn1";
import { compareCodePoints } from "@wildboar/dn";
import {
    createOrderingMatcher,
    MATCH_FLAG_CONSTANT_TIME,
    type Matcher,
} from "@wildboar/x500";
import { ctCompareCodePoints } from "../constantTime.mjs";
import {
    decodeMSStringElement,
    normalizeMSString,
    prepareMSStringValue,
} from "../equality/orAddressUtilities.mjs";

function normalizeCaseIgnoreMSString (assertion: string): string {
    return normalizeMSString(assertion, true);
}

export
const mSStringOrderingMatch: Matcher = createOrderingMatcher(
    decodeMSStringElement,
    (assertion: string, value: string | ASN1Element, _getEqualityMatcher, flags = 0): number => {
        const v = (typeof value === "string")
            ? value
            : prepareMSStringValue(decodeMSStringElement(value), true, flags);
        const compare = (flags & MATCH_FLAG_CONSTANT_TIME)
            ? ctCompareCodePoints
            : compareCodePoints;
        return compare(assertion, v);
    },
    normalizeCaseIgnoreMSString,
);

export default mSStringOrderingMatch;
