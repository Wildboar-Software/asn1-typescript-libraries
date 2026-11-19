import { ASN1Element } from "@wildboar/asn1";
import {
    createOrderingMatcher,
    type Matcher,
} from "@wildboar/x500";
import { _decode_MSString } from "@wildboar/x400/MSMatchingRules";
import { msStringToString } from "../equality/orAddressUtilities.js";

function decodeMSStringAssertion (el: ASN1Element): string {
    return msStringToString(_decode_MSString(el));
}

function normalizeCaseIgnoreMSString (assertion: string): string {
    return assertion.trim().replace(/\s+/g, " ").toUpperCase();
}

export
const mSStringOrderingMatch: Matcher = createOrderingMatcher(
    decodeMSStringAssertion,
    (assertion: string, value: string | ASN1Element): number => {
        const v = (typeof value === "string")
            ? value
            : normalizeCaseIgnoreMSString(msStringToString(_decode_MSString(value)));
        return assertion.localeCompare(v);
    },
    normalizeCaseIgnoreMSString,
);

export default mSStringOrderingMatch;
