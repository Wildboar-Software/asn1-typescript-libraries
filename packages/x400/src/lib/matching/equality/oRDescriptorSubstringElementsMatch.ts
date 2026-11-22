import type { ASN1Element, OBJECT_IDENTIFIER } from "@wildboar/asn1";
import { createEqualityMatcher, type Matcher } from "@wildboar/x500";
import {
    _decode_ORDescriptor,
    type ORDescriptor,
} from "@wildboar/x400/IPMSInformationObjects";
import { MATCH_FLAG_SUBSTRING_MATCH } from "./oRNameMatch.js";
import {
    decodePreparedORDescriptorAssertion,
    matchORDescriptors,
    matchPreparedORDescriptor,
    normalizePreparedORDescriptor,
    type PreparedORDescriptor,
} from "./oRDescriptorMatch.js";

export
function oRDescriptorSubstringElementsMatchTyped (
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
        flags | MATCH_FLAG_SUBSTRING_MATCH,
    );
}

export
const oRDescriptorSubstringElementsMatch: Matcher = createEqualityMatcher(
    decodePreparedORDescriptorAssertion("oRDescriptorSubstringElementsMatch", true),
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
            flags | MATCH_FLAG_SUBSTRING_MATCH,
            true,
        );
    },
    undefined,
    false,
    normalizePreparedORDescriptor,
);

export default oRDescriptorSubstringElementsMatch;
