import EqualityMatcher from "../../types/EqualityMatcher.mjs";
import type { ASN1Element } from "@wildboar/asn1";

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
    return !Buffer.compare(a, v);
}

export default attributeCertificateExactMatch;
