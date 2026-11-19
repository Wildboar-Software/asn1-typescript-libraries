import { ASN1Element, ASN1TagClass, ASN1UniversalType } from "@wildboar/asn1";
import { createEqualityMatcher, type Matcher } from "@wildboar/x500";
import {
    _decode_CirculationMember,
    type CirculationMember,
} from "@wildboar/x400/IPMSHeadingExtensions";
import { oRDescriptorElementsMatchTyped } from "./oRDescriptorElementsMatch.js";

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
function circulationMemberElementsMatchTyped (
    assertion: CirculationMember,
    value: ASN1Element,
): boolean {
    const recipient = valueRecipientElement(value);
    // This should not happen, because it is a required field.
    if (!recipient) {
        return false;
    }
    return oRDescriptorElementsMatchTyped(
        assertion.circulation_recipient.recipient,
        recipient,
    );
}

export
const circulationMemberElementsMatch: Matcher = createEqualityMatcher(
    _decode_CirculationMember,
    circulationMemberElementsMatchTyped,
);

export default circulationMemberElementsMatch;
