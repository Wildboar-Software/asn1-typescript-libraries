import type { ASN1Element, OBJECT_IDENTIFIER } from "@wildboar/asn1";
import { createEqualityMatcher, type Matcher } from "@wildboar/x500";
import {
    _decode_ORDescriptor,
    type ORDescriptor,
} from "@wildboar/x400/IPMSInformationObjects";
import { MATCH_FLAG_ELEMENTS_MATCH } from "./oRNameMatch.mjs";
import {
    decodePreparedORDescriptorAssertion,
    matchORDescriptors,
    matchPreparedORDescriptor,
    normalizePreparedORDescriptor,
    type PreparedORDescriptor,
} from "./oRDescriptorMatch.mjs";

export
function oRDescriptorElementsMatchTyped (
    assertion: ORDescriptor,
    value: ASN1Element,
    getEqualityMatcher?: (attributeType: OBJECT_IDENTIFIER) => Matcher | undefined,
    flags: number = 0,
): boolean | undefined {
    const v = _decode_ORDescriptor(value);
    return matchORDescriptors(
        assertion,
        v,
        getEqualityMatcher,
        flags | MATCH_FLAG_ELEMENTS_MATCH,
    );
}

export
const oRDescriptorElementsMatch: Matcher = createEqualityMatcher(
    decodePreparedORDescriptorAssertion("oRDescriptorElementsMatch"),
    (
        assertion: PreparedORDescriptor,
        value: ASN1Element,
        getEqualityMatcher?: (attributeType: OBJECT_IDENTIFIER) => Matcher | undefined,
        flags: number = 0,
    ): boolean | undefined => {
        const v = _decode_ORDescriptor(value);
        return matchPreparedORDescriptor(
            assertion,
            v,
            getEqualityMatcher,
            flags | MATCH_FLAG_ELEMENTS_MATCH,
            true,
        );
    },
    undefined,
    false,
    normalizePreparedORDescriptor,
);

export default oRDescriptorElementsMatch;
