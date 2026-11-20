import type { ASN1Element } from "@wildboar/asn1";
import { createEqualityMatcher, type Matcher } from "@wildboar/x500";
import { _decode_RecipientSpecifier } from "@wildboar/x400/IPMSInformationObjects";
import { matchORDescriptorSingleElement } from "./oRDescriptorSingleElementMatch.js";
import {
    decodeORNameSingleElementAssertion,
    normalizeORNameSingleElementAssertion,
} from "./oRNameSingleElementMatch.js";

export
const recipientSpecifierSingleElementMatch: Matcher = createEqualityMatcher(
    decodeORNameSingleElementAssertion,
    (assertion: string, value: ASN1Element): boolean | undefined => {
        const v = _decode_RecipientSpecifier(value);
        return matchORDescriptorSingleElement(assertion, v.recipient);
    },
    undefined,
    true,
    normalizeORNameSingleElementAssertion,
);

export default recipientSpecifierSingleElementMatch;
