import EqualityMatcher from "../../types/EqualityMatcher.mjs";
import type { ASN1Element } from "@wildboar/asn1";
import {
    UUIDPair,
    _decode_UUIDPair,
} from "../../modules/SelectedAttributeTypes/UUIDPair.ta.mjs";
import { Buffer } from "node:buffer";

/**
 * Rec. ITU-T X.520 (10/2019), clause 8.2.15 `uUIDPairMatch`.
 *
 * TRUE iff each component of the presented `UUIDPair` equals the
 * corresponding component of the stored pair (same length and
 * identical octets).
 */
export
const uUIDPairMatch: EqualityMatcher = (
    assertion: ASN1Element,
    value: ASN1Element,
): boolean => {
    const a: UUIDPair = _decode_UUIDPair(assertion);
    const v: UUIDPair = _decode_UUIDPair(value);
    return (
        !Buffer.compare(a.issuerUUID, v.issuerUUID)
        && !Buffer.compare(a.subjectUUID, v.subjectUUID)
    );
}

export default uUIDPairMatch;
