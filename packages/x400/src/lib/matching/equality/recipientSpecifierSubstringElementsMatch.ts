import { ASN1Element, ASN1TagClass, type OBJECT_IDENTIFIER } from "@wildboar/asn1";
import {
    createEqualityMatcher,
    type Matcher,
} from "@wildboar/x500";
import {
    _decode_RecipientSpecifier,
    type RecipientSpecifier,
} from "@wildboar/x400/IPMSInformationObjects";
import { oRDescriptorSubstringElementsMatchTyped } from "./oRDescriptorSubstringElementsMatch.js";

export
function recipientSpecifierSubstringElementsMatchTyped (
    assertion: RecipientSpecifier,
    value: ASN1Element,
    getEqualityMatcher?: (attributeType: OBJECT_IDENTIFIER) => Matcher | undefined,
    flags?: number,
): boolean {
    const recipient = value.set.find((el) => (
        (el.tagClass === ASN1TagClass.context)
        && (el.tagNumber === 0)
    ));
    if (!recipient) { // This should not happen, because it is a required field.
        return false;
    }
    return oRDescriptorSubstringElementsMatchTyped(
        assertion.recipient,
        recipient,
        getEqualityMatcher,
        flags,
    );
}

export
const recipientSpecifierSubstringElementsMatch: Matcher = createEqualityMatcher(
    _decode_RecipientSpecifier,
    recipientSpecifierSubstringElementsMatchTyped,
);

export default recipientSpecifierSubstringElementsMatch;
