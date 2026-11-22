import type { ASN1Element, OBJECT_IDENTIFIER } from "@wildboar/asn1";
import {
    createEqualityMatcher,
    type Matcher,
} from "@wildboar/x500";
import type { RecipientSpecifier } from "@wildboar/x400/IPMSInformationObjects";
import { oRDescriptorSubstringElementsMatchTyped } from "./oRDescriptorSubstringElementsMatch.js";
import {
    decodeNonEmptyRecipientSpecifierAssertion,
    findRecipientElement,
} from "./recipientSpecifierMatch.js";

export
function recipientSpecifierSubstringElementsMatchTyped (
    assertion: RecipientSpecifier,
    value: ASN1Element,
    getEqualityMatcher?: (attributeType: OBJECT_IDENTIFIER) => Matcher | undefined,
    flags: number = 0,
): boolean | undefined {
    const recipient = findRecipientElement(value, flags);
    if (!recipient) {
        return undefined;
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
    decodeNonEmptyRecipientSpecifierAssertion("recipientSpecifierSubstringElementsMatch", true),
    recipientSpecifierSubstringElementsMatchTyped,
    undefined,
    false,
);

export default recipientSpecifierSubstringElementsMatch;
