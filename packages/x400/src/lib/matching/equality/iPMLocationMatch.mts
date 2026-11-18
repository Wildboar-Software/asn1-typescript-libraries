import type { ASN1Element } from "@wildboar/asn1";
import {
    createEqualityMatcher,
    type Matcher,
    type TypedEquationFunction,
} from "@wildboar/x500";
import { _decode_SequenceNumber } from "@wildboar/x400/MSAbstractService";
import { _decode_IPMLocation } from "@wildboar/x400/IPMSMessageStoreAttributes";

export
function iPMLocationMatchTyped(
    assertion: ASN1Element,
    value: ASN1Element,
): boolean | undefined {
    const v = _decode_IPMLocation(value);
    if (!("stored" in v)) {
        return false;
    }
    const a = Number(_decode_SequenceNumber(assertion));
    for (const sn of v.stored) {
        if (a === Number(sn)) {
            return true;
        }
    }
    return false;
}

iPMLocationMatchTyped satisfies TypedEquationFunction<ASN1Element>;

export
const iPMLocationMatch: Matcher = createEqualityMatcher(
    (el: ASN1Element): ASN1Element => el,
    iPMLocationMatchTyped,
);

export default iPMLocationMatch;
