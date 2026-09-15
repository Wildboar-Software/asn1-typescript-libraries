import type EqualityMatcher from "../../types/EqualityMatcher.mjs";
import type { ASN1Element, OBJECT_IDENTIFIER } from "@wildboar/asn1";
import {
    Name,
    _decode_Name,
} from "../../modules/InformationFramework/Name.ta.mjs";
import {
    AccessPoint,
    _decode_AccessPoint,
} from "../../modules/DistributedOperations/AccessPoint.ta.mjs";
import compareName from "../../comparators/compareName.mjs";

/**
 * Rec. ITU-T X.501 (10/2019), clause 24.2.1.9.1 `accessPointMatch`.
 *
 * Equality for `AccessPoint`. The assertion is the `Name`
 * (`ae-title`) component of the access point. TRUE iff those names
 * match as distinguished names.
 */
export
const accessPointMatch: EqualityMatcher = (
    assertion: ASN1Element,
    value: ASN1Element,
    getEqualityMatcher?: (attributeType: OBJECT_IDENTIFIER) => EqualityMatcher | undefined,
): boolean => {
    const a: Name = _decode_Name(assertion);
    const v: AccessPoint = _decode_AccessPoint(value);
    return compareName(a, v.ae_title, getEqualityMatcher);
}

export default accessPointMatch;
