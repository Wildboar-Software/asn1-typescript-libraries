import type { ASN1Element, OBJECT_IDENTIFIER } from "@wildboar/asn1";
import { createEqualityMatcher, type Matcher } from "@wildboar/x500";
import { type ORName } from "@wildboar/x400/MTSAbstractService";
import {
    decodePreparedORNameAssertion,
    MATCH_FLAG_ELEMENTS_MATCH,
    matchPreparedORNameElement,
    normalizePreparedORName,
    oRNameMatchTyped,
} from "./oRNameMatch.js";

export
function oRNameElementsMatchTyped (
    assertion: ORName,
    value: ASN1Element,
    getEqualityMatcher?: (attributeType: OBJECT_IDENTIFIER) => Matcher | undefined,
    flags: number = 0,
): boolean | undefined {
    /* Quoting ITU-T Recommendation X.413, Section 12.4.5:
    "This rule is identical to the OR-name-match rule except that the
    OR-address-elements-match rule is used instead of the OR-address-match
    rule." */
    return oRNameMatchTyped(
        assertion,
        value,
        getEqualityMatcher,
        flags | MATCH_FLAG_ELEMENTS_MATCH,
    );
}

export
const oRNameElementsMatch: Matcher = createEqualityMatcher(
    decodePreparedORNameAssertion("oRNameElementsMatch"),
    matchPreparedORNameElement(MATCH_FLAG_ELEMENTS_MATCH),
    undefined,
    false,
    normalizePreparedORName,
);

export default oRNameElementsMatch;
