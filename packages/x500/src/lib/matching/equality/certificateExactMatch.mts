import type EqualityMatcher from "../../types/EqualityMatcher.mjs";
import type { ASN1Element, OBJECT_IDENTIFIER } from "@wildboar/asn1";
import compareName from "../../comparators/compareName.mjs";
import {
    CertificateExactAssertion,
    _decode_CertificateExactAssertion,
} from "../../modules/CertificateExtensions/CertificateExactAssertion.ta.mjs";
import {
    Certificate,
    _decode_Certificate,
} from "../../modules/AuthenticationFramework/Certificate.ta.mjs";
import { Buffer } from "node:buffer";

/**
 * Rec. ITU-T X.509 (10/2019), clause 13.3.1
 * `certificateExactMatch`.
 *
 * Uniquely selects a single `Certificate`. TRUE iff serial number
 * and issuer `Name` in `CertificateExactAssertion` equal those in
 * the stored certificate.
 */
export
const certificateExactMatch: EqualityMatcher = (
    assertion: ASN1Element,
    value: ASN1Element,
    getEqualityMatcher?: (attributeType: OBJECT_IDENTIFIER) => EqualityMatcher | undefined,
): boolean => {
    const a: CertificateExactAssertion = _decode_CertificateExactAssertion(assertion);
    const v: Certificate = _decode_Certificate(value);
    if (Buffer.compare(v.toBeSigned.serialNumber, a.serialNumber)) {
        return false;
    }
    return compareName(v.toBeSigned.issuer, a.issuer, getEqualityMatcher);
}

export default certificateExactMatch;
