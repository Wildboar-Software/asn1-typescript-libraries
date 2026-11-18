import { ASN1Element } from "@wildboar/asn1";
import type { AttributeType } from "@wildboar/x500/InformationFramework";
import {
    createOrderingMatcher,
    type Matcher,
    type TypedOrderingFunction,
} from "@wildboar/x500";
import {
    _decode_MSString,
    type MSString,
} from "@wildboar/x400/MSMatchingRules";
import { msStringToString } from "../equality/orAddressUtilities.mjs";

export
function mSStringOrderingMatchTyped(
    assertion: MSString,
    value: MSString | ASN1Element,
    _getEqualityMatcher?: (attributeType: AttributeType) => Matcher | undefined,
    _flags?: number,
): number | undefined {
    const a = msStringToString(assertion).trim().replace(/\s+/g, " ").toUpperCase();
    const stored = ASN1Element.isElement(value) ? _decode_MSString(value) : value;
    const v = msStringToString(stored).trim().replace(/\s+/g, " ").toUpperCase();
    return a.localeCompare(v);
}

mSStringOrderingMatchTyped satisfies TypedOrderingFunction<MSString>;

export
const mSStringOrderingMatch: Matcher = createOrderingMatcher(
    _decode_MSString,
    mSStringOrderingMatchTyped,
);

export default mSStringOrderingMatch;
