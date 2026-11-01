import { Buffer } from "node:buffer";
import type { ASN1Element } from "@wildboar/asn1";
import {
    createEqualityMatcher,
    type Matcher,
    type TypedEquationFunction,
} from "../../types/matching.mjs";
import {
    UUIDPair,
    _decode_UUIDPair,
} from "../../modules/SelectedAttributeTypes/UUIDPair.ta.mjs";
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
): boolean {
    const stored = readDecoded(value, _decode_UUIDPair);
    return (
        Buffer.compare(assertion.issuerUUID, stored.issuerUUID) === 0
        && Buffer.compare(assertion.subjectUUID, stored.subjectUUID) === 0
    );
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
