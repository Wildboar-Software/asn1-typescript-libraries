import type { ASN1Element } from "@wildboar/asn1";
import type { AttributeType } from "../../modules/InformationFramework/index.mjs";
import {
    createEqualityMatcher,
    MATCH_FLAG_CONSTANT_TIME,
    type Matcher,
    type TypedEquationFunction,
} from "../../types/matching.mjs";
import {
    UUIDPair,
    _decode_UUIDPair,
} from "../../modules/SelectedAttributeTypes/UUIDPair.ta.mjs";
import { bytesEqual } from "../constantTime.mjs";
import { readDecoded } from "../readValue.mjs";

/**
 * Rec. ITU-T X.520 (10/2019), clause 8.2.15 `uUIDPairMatch`.
 *
 * TRUE iff each component of the presented `UUIDPair` equals the
 * corresponding component of the stored pair (same length and
 * identical octets).
 *
 * @param assertion Presented pair.
 * @param value Stored pair, or that pair already decoded.
 * @returns `true` when both UUID components are equal.
 */
export
function uUIDPairMatchTyped (
    assertion: UUIDPair,
    value: UUIDPair | ASN1Element,
    _getEqualityMatcher?: (attributeType: AttributeType) => Matcher | undefined,
    flags: number = 0,
): boolean {
    const stored = readDecoded(value, _decode_UUIDPair);
    const constantTime = flags & MATCH_FLAG_CONSTANT_TIME;
    const issuerMatch = bytesEqual(assertion.issuerUUID, stored.issuerUUID, constantTime);
    if (!issuerMatch && !constantTime) {
        return false;
    }
    const subjectMatch = bytesEqual(assertion.subjectUUID, stored.subjectUUID, constantTime);
    return issuerMatch && subjectMatch;
}

uUIDPairMatchTyped satisfies TypedEquationFunction<UUIDPair>;

/**
 * `uUIDPairMatch` as a `Matcher`.
 */
export
const uUIDPairMatch: Matcher = createEqualityMatcher(
    _decode_UUIDPair,
    uUIDPairMatchTyped,
);

export default uUIDPairMatch;
