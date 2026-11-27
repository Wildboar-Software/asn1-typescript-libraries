import type { ASN1Element, OBJECT_IDENTIFIER } from "@wildboar/asn1";
import {
    createEqualityMatcher,
    type Matcher,
} from "@wildboar/x500";
import {
    type ORName,
} from "@wildboar/x400/MTSAbstractService";
import {
    decodePreparedORNameAssertion,
    MATCH_FLAG_SUBSTRING_MATCH,
    matchPreparedORNameElement,
    normalizePreparedORName,
    oRNameMatchTyped,
} from "./oRNameMatch.js";

export
function oRNameSubstringElementsMatchTyped (
    assertion: ORName,
    value: ASN1Element,
    getEqualityMatcher?: (attributeType: OBJECT_IDENTIFIER) => Matcher | undefined,
    flags: number = 0,
): boolean | undefined {
    return oRNameMatchTyped(
        assertion,
        value,
        getEqualityMatcher,
        flags | MATCH_FLAG_SUBSTRING_MATCH,
    );
}

export
const oRNameSubstringElementsMatch: Matcher = createEqualityMatcher(
    decodePreparedORNameAssertion("oRNameSubstringElementsMatch"),
    matchPreparedORNameElement(MATCH_FLAG_SUBSTRING_MATCH),
    undefined,
    false,
    normalizePreparedORName,
);

export default oRNameSubstringElementsMatch;
