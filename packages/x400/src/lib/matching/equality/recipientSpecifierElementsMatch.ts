import { ASN1Element, ASN1TagClass } from "@wildboar/asn1";
import { createEqualityMatcher, type Matcher } from "@wildboar/x500";
import {
    _decode_RecipientSpecifier,
    type RecipientSpecifier,
} from "@wildboar/x400/IPMSInformationObjects";
import { oRDescriptorElementsMatchTyped } from "./oRDescriptorElementsMatch.js";

export
function recipientSpecifierElementsMatchTyped (
    assertion: RecipientSpecifier,
    value: ASN1Element,
): boolean {
    const recipient = value.set.find((el) => (
        (el.tagClass === ASN1TagClass.context)
        && (el.tagNumber === 0)
    ));
    if (!recipient) { // This should not happen, because it is a required field.
        return false;
    }
    return oRDescriptorElementsMatchTyped(assertion.recipient, recipient);
}

export
const recipientSpecifierElementsMatch: Matcher = createEqualityMatcher(
    _decode_RecipientSpecifier,
    recipientSpecifierElementsMatchTyped,
    undefined,
    false,
);

export default recipientSpecifierElementsMatch;
