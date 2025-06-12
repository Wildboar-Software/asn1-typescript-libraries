import type EqualityMatcher from "../../types/EqualityMatcher.mjs";
import type { ASN1Element, OBJECT_IDENTIFIER } from "asn1-ts";
import compareName from "../../comparators/compareName.mjs";
import {
    CertificatePairExactAssertion,
    _decode_CertificatePairExactAssertion,
} from "../../modules/CertificateExtensions/CertificatePairExactAssertion.ta.mjs";
import {
    CertificatePair,
    _decode_CertificatePair,
} from "../../modules/AuthenticationFramework/CertificatePair.ta.mjs";

export
const certificatePairExactMatch: EqualityMatcher = (
    assertion: ASN1Element,
    value: ASN1Element,
    getEqualityMatcher?: (attributeType: OBJECT_IDENTIFIER) => EqualityMatcher | undefined,
): boolean => {
    const a: CertificatePairExactAssertion = _decode_CertificatePairExactAssertion(assertion);
    const v: CertificatePair = _decode_CertificatePair(value);
    {
        const cert = v.issuedToThisCA;
        const assertedCert = a.issuedToThisCAAssertion;
        if (Buffer.compare(cert.toBeSigned.serialNumber, assertedCert.serialNumber)) {
            return false;
        }
        if (!compareName(cert.toBeSigned.issuer, assertedCert.issuer, getEqualityMatcher)) {
            return false;
        }
    }
    {
        const cert = v.issuedByThisCA;
        const assertedCert = a.issuedByThisCAAssertion;
        if (Buffer.compare(cert.toBeSigned.serialNumber, assertedCert.serialNumber)) {
            return false;
        }
        if (!compareName(cert.toBeSigned.issuer, assertedCert.issuer, getEqualityMatcher)) {
            return false;
        }
    }
    return true;
}

export default certificatePairExactMatch;
