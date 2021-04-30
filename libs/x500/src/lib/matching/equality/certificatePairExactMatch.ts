import EqualityMatcher from "../../types/EqualityMatcher";
import type { ASN1Element } from "asn1-ts";
import compareUint8Arrays from "../../comparators/compareUint8Arrays";
import compareName from "../../comparators/compareName";
import {
    CertificatePairExactAssertion,
    _decode_CertificatePairExactAssertion,
} from "../../modules/CertificateExtensions/CertificatePairExactAssertion.ta";
import {
    CertificatePair,
    _decode_CertificatePair,
} from "../../modules/AuthenticationFramework/CertificatePair.ta";

export
const certificatePairExactMatch: EqualityMatcher = (
    assertion: ASN1Element,
    value: ASN1Element,
): boolean => {
    const a: CertificatePairExactAssertion = _decode_CertificatePairExactAssertion(assertion);
    const v: CertificatePair = _decode_CertificatePair(value);
    {
        const cert = v.issuedToThisCA;
        const assertedCert = a.issuedToThisCAAssertion;
        if (!compareUint8Arrays(cert.toBeSigned.serialNumber, assertedCert.serialNumber)) {
            return false;
        }
        if (!compareName(cert.toBeSigned.issuer, assertedCert.issuer)) {
            return false;
        }
    }
    {
        const cert = v.issuedByThisCA;
        const assertedCert = a.issuedByThisCAAssertion;
        if (!compareUint8Arrays(cert.toBeSigned.serialNumber, assertedCert.serialNumber)) {
            return false;
        }
        if (!compareName(cert.toBeSigned.issuer, assertedCert.issuer)) {
            return false;
        }
    }
    return true;
}

export default certificatePairExactMatch;
