import type EqualityMatcher from "../../types/EqualityMatcher.mjs";
import type { ASN1Element, OBJECT_IDENTIFIER } from "@wildboar/asn1";
import compareName from "../../comparators/compareName.mjs";
import {
    CertificatePairExactAssertion,
    _decode_CertificatePairExactAssertion,
} from "../../modules/CertificateExtensions/CertificatePairExactAssertion.ta.mjs";
import {
    CertificatePair,
    _decode_CertificatePair,
} from "../../modules/AuthenticationFramework/CertificatePair.ta.mjs";
import { Buffer } from "node:buffer";

/**
 * Rec. ITU-T X.509 (10/2019), clause 13.3.3
 * `certificatePairExactMatch`.
 *
 * Uniquely selects a single `CertificatePair`. Present
 * `issuedToThisCAAssertion` / `issuedByThisCAAssertion` components
 * must match the corresponding certificates as for
 * `certificateExactMatch`. At least one of those components must
 * be present.
 */
export
const certificatePairExactMatch: EqualityMatcher = (
    assertion: ASN1Element,
    value: ASN1Element,
    getEqualityMatcher?: (attributeType: OBJECT_IDENTIFIER) => EqualityMatcher | undefined,
): boolean => {
    const a: CertificatePairExactAssertion = _decode_CertificatePairExactAssertion(assertion);
    const v: CertificatePair = _decode_CertificatePair(value);
    const issuedTo = a.issuedToThisCAAssertion;
    const issuedBy = a.issuedByThisCAAssertion;
    if (!issuedTo && !issuedBy) {
        return false;
    }
    if (issuedTo) {
        const cert = v.issuedToThisCA;
        if (!cert) {
            return false;
        }
        if (Buffer.compare(cert.toBeSigned.serialNumber, issuedTo.serialNumber)) {
            return false;
        }
        if (!compareName(cert.toBeSigned.issuer, issuedTo.issuer, getEqualityMatcher)) {
            return false;
        }
    }
    if (issuedBy) {
        const cert = v.issuedByThisCA;
        if (!cert) {
            return false;
        }
        if (Buffer.compare(cert.toBeSigned.serialNumber, issuedBy.serialNumber)) {
            return false;
        }
        if (!compareName(cert.toBeSigned.issuer, issuedBy.issuer, getEqualityMatcher)) {
            return false;
        }
    }
    return true;
}

export default certificatePairExactMatch;
