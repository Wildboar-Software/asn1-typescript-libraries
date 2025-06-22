import EqualityMatcher from "../../types/EqualityMatcher.mjs";
import type { ASN1Element } from "@wildboar/asn1";
import {
    UUIDPair,
    _decode_UUIDPair,
} from "../../modules/SelectedAttributeTypes/UUIDPair.ta.mjs";

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
