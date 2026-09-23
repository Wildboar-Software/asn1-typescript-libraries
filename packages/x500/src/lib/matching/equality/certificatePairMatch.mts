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

/**
 * Rec. ITU-T X.509 (10/2019), clause 13.3.4 `certificatePairMatch`.
 *
 * Selects one or more `CertificatePair` values. TRUE iff every
 * component present in `issuedToThisCAAssertion` /
 * `issuedByThisCAAssertion` matches the corresponding certificate
 * as for `certificateMatch` (clause 13.3.2). At least one of those
 * assertion components must be present.
 */
export
const certificatePairMatch: EqualityMatcher = (
    assertion: ASN1Element,
    value: ASN1Element,
): boolean => {
    const a: CertificatePairAssertion = _decode_CertificatePairAssertion(assertion);
    const v: CertificatePair = _decode_CertificatePair(value);
    const issuedBy = a.issuedByThisCAAssertion;
    const issuedTo = a.issuedToThisCAAssertion;
    const issuedByCert = v.issuedByThisCA;
    const issuedToCert = v.issuedToThisCA;
    return (
        (!issuedBy || (!!issuedByCert && evaluateCertificateAssertion(issuedBy, issuedByCert)))
        && (!issuedTo || (!!issuedToCert && evaluateCertificateAssertion(issuedTo, issuedToCert)))
    );
}

export default certificatePairMatch;
