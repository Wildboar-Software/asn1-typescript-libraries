import {
    ASN1ConstructionError,
    type ASN1Element,
    type OBJECT_IDENTIFIER,
} from "@wildboar/asn1";
import { createEqualityMatcher, type Matcher } from "@wildboar/x500";
import {
    _decode_ORDescriptor,
    type ORDescriptor,
} from "@wildboar/x400/IPMSInformationObjects";
import { oRDescriptorElementsMatchTyped } from "./oRDescriptorElementsMatch.js";
import { validateORDescriptorAssertion } from "./oRDescriptorMatch.js";
import { findCirculationRecipientElement } from "./circulationMemberMatch.js";

/**
 * Decode only the `circulation-recipient.recipient` O/R descriptor.
 *
 * Elements matching compares that descriptor and nothing else, so the
 * checkmark and the other recipient-specifier components are not decoded.
 * `CirculationMember` still requires `formal-name` to be present.
 */
function decodeCirculationMemberElementsAssertion (el: ASN1Element): ORDescriptor {
    const recipient = findCirculationRecipientElement(el);
    if (!recipient) {
        throw new ASN1ConstructionError(
            "circulationMemberElementsMatch: circulation-recipient.recipient is required",
            el,
        );
    }
    const descriptor = _decode_ORDescriptor(recipient);
    if (!descriptor.formal_name) {
        throw new ASN1ConstructionError(
            "circulationMemberElementsMatch: formal-name is required in CirculationMember assertion",
            el,
        );
    }
    return validateORDescriptorAssertion(descriptor, "circulationMemberElementsMatch");
}

export
function circulationMemberElementsMatchTyped (
    assertion: ORDescriptor,
    value: ASN1Element,
    getEqualityMatcher?: (attributeType: OBJECT_IDENTIFIER) => Matcher | undefined,
    flags: number = 0,
): boolean | undefined {
    const recipient = findCirculationRecipientElement(value);
    if (!recipient) {
        return undefined;
    }
    return oRDescriptorElementsMatchTyped(
        assertion,
        recipient,
        getEqualityMatcher,
        flags,
    );
}

export
const circulationMemberElementsMatch: Matcher = createEqualityMatcher(
    decodeCirculationMemberElementsAssertion,
    circulationMemberElementsMatchTyped,
);

export default circulationMemberElementsMatch;
