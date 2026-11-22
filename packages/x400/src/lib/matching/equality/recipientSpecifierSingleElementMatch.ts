import type { ASN1Element } from "@wildboar/asn1";
import { createEqualityMatcher, type Matcher } from "@wildboar/x500";
import { oRDescriptorSingleElementMatchTyped } from "./oRDescriptorSingleElementMatch.js";
import {
    decodeORNameSingleElementAssertion,
    normalizeORNameSingleElementAssertion,
} from "./oRNameSingleElementMatch.js";
import { findRecipientElement } from "./recipientSpecifierMatch.js";

export
const recipientSpecifierSingleElementMatch: Matcher = createEqualityMatcher(
    decodeORNameSingleElementAssertion,
    (assertion: string, value: ASN1Element, getEqualityMatcher, flags = 0): boolean | undefined => {
        const recipient = findRecipientElement(value);
        if (!recipient) {
            return undefined;
        }
        return oRDescriptorSingleElementMatchTyped(assertion, recipient, getEqualityMatcher, flags);
    },
    undefined,
    true,
    normalizeORNameSingleElementAssertion,
);

export default recipientSpecifierSingleElementMatch;
