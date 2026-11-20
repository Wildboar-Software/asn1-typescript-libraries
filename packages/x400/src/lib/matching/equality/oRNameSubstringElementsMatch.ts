import type { ASN1Element, OBJECT_IDENTIFIER } from "@wildboar/asn1";
import {
    createEqualityMatcher,
    type Matcher,
} from "@wildboar/x500";
import {
    type ORName,
    _decode_ORName,
} from "@wildboar/x400/MTSAbstractService";
import { oRNameMatchTyped } from "./oRNameMatch.js";
import { MATCH_FLAG_SUBSTRING_MATCH } from "./oRNameMatch.js";

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
    _decode_ORName,
    oRNameSubstringElementsMatchTyped,
);

export default oRNameSubstringElementsMatch;
