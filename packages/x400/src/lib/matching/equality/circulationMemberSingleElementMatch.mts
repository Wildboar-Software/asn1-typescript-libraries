import type { ASN1Element } from "@wildboar/asn1";
import { createEqualityMatcher, type Matcher } from "@wildboar/x500";
import { findCirculationRecipientElement } from "./circulationMemberMatch.mjs";
import { oRDescriptorSingleElementMatchTyped } from "./oRDescriptorSingleElementMatch.mjs";
import {
    decodeORNameSingleElementAssertion,
    normalizeORNameSingleElementAssertion,
} from "./oRNameSingleElementMatch.mjs";

export
const circulationMemberSingleElementMatch: Matcher = createEqualityMatcher(
    decodeORNameSingleElementAssertion,
    (assertion: string, value: ASN1Element, getEqualityMatcher, flags = 0): boolean | undefined => {
        const recipient = findCirculationRecipientElement(value, flags);
        if (!recipient) {
            return undefined;
        }
        return oRDescriptorSingleElementMatchTyped(assertion, recipient, getEqualityMatcher, flags);
    },
    undefined,
    true,
    normalizeORNameSingleElementAssertion,
);

export default circulationMemberSingleElementMatch;
