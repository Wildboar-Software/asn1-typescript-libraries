import type { ASN1Element, OBJECT_IDENTIFIER } from "@wildboar/asn1";
import { createEqualityMatcher, type Matcher } from "@wildboar/x500";
import type { CirculationMember } from "@wildboar/x400/IPMSHeadingExtensions";
import { oRDescriptorElementsMatchTyped } from "./oRDescriptorElementsMatch.js";
import {
    decodeCirculationMemberAssertion,
    findCirculationRecipientElement,
} from "./circulationMemberMatch.js";

export
function circulationMemberElementsMatchTyped (
    assertion: CirculationMember,
    value: ASN1Element,
    getEqualityMatcher?: (attributeType: OBJECT_IDENTIFIER) => Matcher | undefined,
    flags: number = 0,
): boolean | undefined {
    const recipient = findCirculationRecipientElement(value, flags);
    if (!recipient) {
        return undefined;
    }
    return oRDescriptorElementsMatchTyped(
        assertion.circulation_recipient.recipient,
        recipient,
        getEqualityMatcher,
        flags,
    );
}

export
const circulationMemberElementsMatch: Matcher = createEqualityMatcher(
    decodeCirculationMemberAssertion("circulationMemberElementsMatch"),
    circulationMemberElementsMatchTyped,
);

export default circulationMemberElementsMatch;
