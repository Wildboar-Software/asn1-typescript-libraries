import EqualityMatcher from "../../types/EqualityMatcher.mjs";
import type { ASN1Element } from "@wildboar/asn1";
import { Buffer } from "node:buffer";

/**
 * Rec. ITU-T X.509 (10/2019), clause 19.3.1
 * `attributeCertificateExactMatch`.
 *
 * Uniquely selects an `AttributeCertificate`. TRUE iff serial
 * number and issuer (`AttCertIssuer`) in
 * `AttributeCertificateExactAssertion` equal those in the stored
 * certificate.
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
