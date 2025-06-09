import EqualityMatcher from "../../types/EqualityMatcher.js";
import { ASN1Element } from "asn1-ts";
import { evaluateCertificateAssertion } from "./certificateMatch.js";
import {
    CertificatePairAssertion,
    _decode_CertificatePairAssertion,
} from "../../modules/CertificateExtensions/CertificatePairAssertion.ta.js";
import {
    CertificatePair,
    _decode_CertificatePair,
} from "../../modules/AuthenticationFramework/CertificatePair.ta.js";

export
const certificatePairMatch: EqualityMatcher = (
    assertion: ASN1Element,
    value: ASN1Element,
): boolean => {
    const a: CertificatePairAssertion = _decode_CertificatePairAssertion(assertion);
    const v: CertificatePair = _decode_CertificatePair(value);
    return (
        evaluateCertificateAssertion(a.issuedByThisCAAssertion, v.issuedByThisCA)
        && evaluateCertificateAssertion(a.issuedToThisCAAssertion, v.issuedToThisCA)
    );
}

export default certificatePairMatch;
