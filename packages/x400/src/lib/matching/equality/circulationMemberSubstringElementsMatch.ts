import { ASN1Element, ASN1TagClass, ASN1UniversalType, type OBJECT_IDENTIFIER } from "@wildboar/asn1";
import {
    createEqualityMatcher,
    type Matcher,
} from "@wildboar/x500";
import {
    _decode_CirculationMember,
    type CirculationMember,
} from "@wildboar/x400/IPMSHeadingExtensions";
import { oRDescriptorSubstringElementsMatchTyped } from "./oRDescriptorSubstringElementsMatch.js";

function valueRecipientElement (value: ASN1Element): ASN1Element | undefined {
    const valueCirculationRecipientElement = value.set.find((el) => (
        (el.tagClass === ASN1TagClass.universal)
        && (el.tagNumber === ASN1UniversalType.set)
    ));
    if (!valueCirculationRecipientElement) {
        return undefined;
    }
    return valueCirculationRecipientElement.set.find((el) => (
        (el.tagClass === ASN1TagClass.context)
        && (el.tagNumber === 0)
    ));
}

export
function circulationMemberSubstringElementsMatchTyped (
    assertion: CirculationMember,
    value: ASN1Element,
    getEqualityMatcher?: (attributeType: OBJECT_IDENTIFIER) => Matcher | undefined,
    flags?: number,
): boolean | undefined {
    const recipient = valueRecipientElement(value);
    // This should not happen, because it is a required field.
    if (!recipient) {
        return false;
    }
    return oRDescriptorSubstringElementsMatchTyped(
        assertion.circulation_recipient.recipient,
        recipient,
        getEqualityMatcher,
        flags,
    );
}

export
const circulationMemberSubstringElementsMatch: Matcher = createEqualityMatcher(
    _decode_CirculationMember,
    circulationMemberSubstringElementsMatchTyped,
);

export default circulationMemberSubstringElementsMatch;
