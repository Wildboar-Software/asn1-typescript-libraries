import EqualityMatcher from "../../types/EqualityMatcher.mjs";
import { ASN1Element } from "@wildboar/asn1";
import { evaluateCertificateAssertion } from "./certificateMatch.mjs";
import {
    CertificatePairAssertion,
    _decode_CertificatePairAssertion,
} from "../../modules/CertificateExtensions/CertificatePairAssertion.ta.mjs";
import {
    CertificatePair,
    _decode_CertificatePair,
} from "../../modules/AuthenticationFramework/CertificatePair.ta.mjs";

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
