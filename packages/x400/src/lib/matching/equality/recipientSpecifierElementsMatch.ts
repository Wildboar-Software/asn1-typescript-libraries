import type { ASN1Element, OBJECT_IDENTIFIER } from "@wildboar/asn1";
import { createEqualityMatcher, type Matcher } from "@wildboar/x500";
import type { RecipientSpecifier } from "@wildboar/x400/IPMSInformationObjects";
import { oRDescriptorElementsMatchTyped } from "./oRDescriptorElementsMatch.js";
import {
    decodeNonEmptyRecipientSpecifierAssertion,
    findRecipientElement,
} from "./recipientSpecifierMatch.js";

export
function recipientSpecifierElementsMatchTyped (
    assertion: RecipientSpecifier,
    value: ASN1Element,
    getEqualityMatcher?: (attributeType: OBJECT_IDENTIFIER) => Matcher | undefined,
    flags: number = 0,
): boolean | undefined {
    const recipient = findRecipientElement(value);
    if (!recipient) {
        return undefined;
    }
    return oRDescriptorElementsMatchTyped(
        assertion.recipient,
        recipient,
        getEqualityMatcher,
        flags,
    );
}

export
const recipientSpecifierElementsMatch: Matcher = createEqualityMatcher(
    decodeNonEmptyRecipientSpecifierAssertion("recipientSpecifierElementsMatch"),
    recipientSpecifierElementsMatchTyped,
    undefined,
    false,
);

export default recipientSpecifierElementsMatch;
