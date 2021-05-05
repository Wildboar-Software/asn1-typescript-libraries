import EqualityMatcher from "../../types/EqualityMatcher";
import type { ASN1Element } from "asn1-ts";
import {
    Name,
    _decode_Name,
} from "../../modules/InformationFramework/Name.ta";
import {
    AccessPoint,
    _decode_AccessPoint,
} from "../../modules/DistributedOperations/AccessPoint.ta";
import compareName from "../../comparators/compareName";

export
const accessPointMatch: EqualityMatcher = (
    assertion: ASN1Element,
    value: ASN1Element,
): boolean => {
    const a: Name = _decode_Name(assertion);
    const v: AccessPoint = _decode_AccessPoint(value);
    return compareName(a, v.ae_title);
}

export default accessPointMatch;
