import { ASN1Element, ASN1TagClass, ASN1UniversalType } from "@wildboar/asn1";
import { createEqualityMatcher, type Matcher } from "@wildboar/x500";
import {
    _decode_MSString,
    type MSString,
} from "@wildboar/x400/MSMatchingRules";
import { oRDescriptorSingleElementMatchTyped } from "./oRDescriptorSingleElementMatch.js";

export
const circulationMemberSingleElementMatch: Matcher = createEqualityMatcher(
    _decode_MSString,
    (assertion: MSString, value: ASN1Element): boolean => {
        const valueCirculationRecipientElement = value.set.find((el) => (
            (el.tagClass === ASN1TagClass.universal)
            && (el.tagNumber === ASN1UniversalType.set)
        ));
        // This should not happen, because it is a required field.
        if (!valueCirculationRecipientElement) {
            return false;
        }
        const valueRecipientElement = valueCirculationRecipientElement.set.find((el) => (
            (el.tagClass === ASN1TagClass.context)
            && (el.tagNumber === 0)
        ));
        // This should not happen, because it is a required field.
        if (!valueRecipientElement) {
            return false;
        }
        return oRDescriptorSingleElementMatchTyped(assertion, valueRecipientElement);
    },
);

export default circulationMemberSingleElementMatch;
