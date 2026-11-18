import { ASN1Element, ASN1TagClass } from "@wildboar/asn1";
import { createEqualityMatcher, type Matcher } from "@wildboar/x500";
import {
    _decode_MSString,
    type MSString,
} from "@wildboar/x400/MSMatchingRules";
import { oRDescriptorSingleElementMatchTyped } from "./oRDescriptorSingleElementMatch.js";

export
const recipientSpecifierSingleElementMatch: Matcher = createEqualityMatcher(
    _decode_MSString,
    (assertion: MSString, value: ASN1Element): boolean => {
        const valueRecipientElement = value.set.find((el) => (
            (el.tagClass === ASN1TagClass.context)
            && (el.tagNumber === 0)
        ));
        if (!valueRecipientElement) { // This should not happen, because it is a required field.
            return false;
        }
        return oRDescriptorSingleElementMatchTyped(assertion, valueRecipientElement);
    },
);

export default recipientSpecifierSingleElementMatch;
