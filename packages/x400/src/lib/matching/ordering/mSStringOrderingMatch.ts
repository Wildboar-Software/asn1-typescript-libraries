import { ASN1Element } from "@wildboar/asn1";
import { compareCodePoints } from "@wildboar/dn";
import {
    createOrderingMatcher,
    type Matcher,
} from "@wildboar/x500";
import { decodeMSStringElement, normalizeMSString } from "../equality/orAddressUtilities.js";

function normalizeCaseIgnoreMSString (assertion: string): string {
    return normalizeMSString(assertion, true);
}

export
const mSStringOrderingMatch: Matcher = createOrderingMatcher(
    decodeMSStringElement,
    (assertion: string, value: string | ASN1Element): number => {
        const v = (typeof value === "string")
            ? value
            : normalizeCaseIgnoreMSString(decodeMSStringElement(value));
        return compareCodePoints(assertion, v);
    },
    normalizeCaseIgnoreMSString,
);

export default mSStringOrderingMatch;
