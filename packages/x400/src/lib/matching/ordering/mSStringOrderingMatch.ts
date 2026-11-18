import { ASN1Element } from "@wildboar/asn1";
import {
    createOrderingMatcher,
    type Matcher,
} from "@wildboar/x500";
import {
    _decode_MSString,
    type MSString,
} from "@wildboar/x400/MSMatchingRules";
import { msStringToString } from "../equality/orAddressUtilities.js";

export
const mSStringOrderingMatch: Matcher = createOrderingMatcher(
    _decode_MSString,
    (assertion: MSString, value: MSString | ASN1Element): number => {
        const a = msStringToString(assertion).trim().replace(/\s+/g, " ").toUpperCase();
        const stored = ASN1Element.isElement(value) ? _decode_MSString(value) : value;
        const v = msStringToString(stored).trim().replace(/\s+/g, " ").toUpperCase();
        return a.localeCompare(v);
    },
);

export default mSStringOrderingMatch;
