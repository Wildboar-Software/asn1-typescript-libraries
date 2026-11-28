import type { ASN1Element, OBJECT_IDENTIFIER } from "@wildboar/asn1";
import {
    createEqualityMatcher,
    type Matcher,
} from "@wildboar/x500";
import type { RecipientSpecifier } from "@wildboar/x400/IPMSInformationObjects";
import { normalizePreparedORDescriptor } from "./oRDescriptorMatch.mjs";
import { oRDescriptorSubstringElementsMatchTyped } from "./oRDescriptorSubstringElementsMatch.mjs";
import { MATCH_FLAG_SUBSTRING_MATCH } from "./oRNameMatch.mjs";
import {
    decodePreparedRecipientSpecifierAssertion,
    findRecipientElement,
    recipientSpecifierValueMatcher,
} from "./recipientSpecifierMatch.mjs";

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
    decodePreparedRecipientSpecifierAssertion("recipientSpecifierSubstringElementsMatch", true),
    recipientSpecifierValueMatcher(MATCH_FLAG_SUBSTRING_MATCH),
    undefined,
    false,
    normalizePreparedORDescriptor,
);

export default recipientSpecifierSubstringElementsMatch;
