import { ASN1Element, ASN1TagClass, type OBJECT_IDENTIFIER } from "@wildboar/asn1";
import {
    createEqualityMatcher,
    type Matcher,
} from "@wildboar/x500";
import {
    _decode_RecipientSpecifier,
    type RecipientSpecifier,
} from "@wildboar/x400/IPMSInformationObjects";
import { oRDescriptorMatchTyped } from "./oRDescriptorMatch.js";

function valueRecipientElement (value: ASN1Element): ASN1Element | undefined {
    return value.set.find((el) => (
        (el.tagClass === ASN1TagClass.context)
        && (el.tagNumber === 0)
    ));
}

export
function recipientSpecifierMatchTyped (
    assertion: RecipientSpecifier,
    value: ASN1Element,
    getEqualityMatcher?: (attributeType: OBJECT_IDENTIFIER) => Matcher | undefined,
    flags?: number,
): boolean {
    const recipient = valueRecipientElement(value);
    if (!recipient) { // This should not happen, because it is a required field.
        return false;
    }
    return oRDescriptorMatchTyped(assertion.recipient, recipient, getEqualityMatcher, flags);
}

export
const recipientSpecifierMatch: Matcher = createEqualityMatcher(
    _decode_RecipientSpecifier,
    recipientSpecifierMatchTyped,
);

export default recipientSpecifierMatch;
