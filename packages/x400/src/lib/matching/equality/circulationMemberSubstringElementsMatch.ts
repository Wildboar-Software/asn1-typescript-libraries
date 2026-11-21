import type { ASN1Element, OBJECT_IDENTIFIER } from "@wildboar/asn1";
import {
    createEqualityMatcher,
    type Matcher,
} from "@wildboar/x500";
import type { CirculationMember } from "@wildboar/x400/IPMSHeadingExtensions";
import { oRDescriptorSubstringElementsMatchTyped } from "./oRDescriptorSubstringElementsMatch.js";
import {
    decodeCirculationMemberAssertion,
    findCirculationRecipientElement,
} from "./circulationMemberMatch.js";

export
function circulationMemberSubstringElementsMatchTyped (
    assertion: CirculationMember,
    value: ASN1Element,
    getEqualityMatcher?: (attributeType: OBJECT_IDENTIFIER) => Matcher | undefined,
    flags: number = 0,
): boolean | undefined {
    const recipient = findCirculationRecipientElement(value);
    if (!recipient) {
        return undefined;
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
    decodeCirculationMemberAssertion("circulationMemberSubstringElementsMatch", true),
    circulationMemberSubstringElementsMatchTyped,
);

export default circulationMemberSubstringElementsMatch;
