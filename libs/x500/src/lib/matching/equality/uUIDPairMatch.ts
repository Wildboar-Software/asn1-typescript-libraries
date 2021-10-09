import EqualityMatcher from "../../types/EqualityMatcher";
import type { ASN1Element } from "asn1-ts";
import {
    UUIDPair,
    _decode_UUIDPair,
} from "../../modules/SelectedAttributeTypes/UUIDPair.ta";

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
