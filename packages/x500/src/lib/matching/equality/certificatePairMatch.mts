import { ASN1Element } from "@wildboar/asn1";
import { readDecoded } from "../readValue.mjs";
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
function certificatePairMatch (
    assertion: ASN1Element | CertificatePairAssertion,
    value: ASN1Element | CertificatePair,
): boolean {
    return certificatePairMatchTyped(
        readDecoded(assertion, _decode_CertificatePairAssertion),
        readDecoded(value, _decode_CertificatePair),
    );
}

/**
 * `certificatePairMatch` on decoded values.
 *
 * @param a Presented pair assertion.
 * @param v Stored certificate pair.
 * @returns `true` when every present component matches.
 */
export
function certificatePairMatchTyped (
    a: CertificatePairAssertion,
    v: CertificatePair,
): boolean {
    if (v.isEmpty()) {
        return false;
    }
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
