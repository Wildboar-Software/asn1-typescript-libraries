import { Buffer } from "node:buffer";
import type { ASN1Element } from "@wildboar/asn1";
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
 * Each argument may be an `ASN1Element` or a `UUIDPair`.
 */
export
function uUIDPairMatch (
    assertion: ASN1Element | UUIDPair,
    value: ASN1Element | UUIDPair,
): boolean {
    return uUIDPairMatchTyped(
        readDecoded(assertion, _decode_UUIDPair),
        readDecoded(value, _decode_UUIDPair),
    );
}

/**
 * `uUIDPairMatch` on two decoded pairs.
 *
 * @param assertion Presented pair.
 * @param value Stored pair.
 * @returns `true` when both UUID components are equal.
 */
export
function uUIDPairMatchTyped (assertion: UUIDPair, value: UUIDPair): boolean {
    return (
        Buffer.compare(assertion.issuerUUID, value.issuerUUID) === 0
        && Buffer.compare(assertion.subjectUUID, value.subjectUUID) === 0
    );
}

export default uUIDPairMatch;
