import EqualityMatcher from "../../types/EqualityMatcher";
import type { ASN1Element } from "asn1-ts";
import compareUint8Arrays from "../../comparators/compareUint8Arrays";

/**
 * In this matching rule, we only check the signature value, since it is
 * virtually impossible for two different certificates to have the same
 * signature.
 *
 * @param assertion
 * @param value
 * @returns
 */
export
const attributeCertificateExactMatch: EqualityMatcher = (
    assertion: ASN1Element,
    value: ASN1Element,
): boolean => {
    const a: Uint8Array = assertion.sequence[2].octetString;
    const v: Uint8Array = value.sequence[2].octetString;
    return compareUint8Arrays(a, v);
}

export default attributeCertificateExactMatch;
