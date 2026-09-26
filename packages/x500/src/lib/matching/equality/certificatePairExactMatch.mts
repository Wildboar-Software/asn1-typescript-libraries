import type EqualityMatcher from "../../types/EqualityMatcher.mjs";
import type { ASN1Element, OBJECT_IDENTIFIER } from "@wildboar/asn1";
import { readDecoded } from "../readValue.mjs";
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
function certificatePairExactMatch (
    assertion: ASN1Element | CertificatePairExactAssertion,
    value: ASN1Element | CertificatePair,
    getEqualityMatcher?: (attributeType: OBJECT_IDENTIFIER) => EqualityMatcher | undefined,
): boolean {
    return certificatePairExactMatchTyped(
        readDecoded(assertion, _decode_CertificatePairExactAssertion),
        readDecoded(value, _decode_CertificatePair),
        getEqualityMatcher,
    );
}

/**
 * `certificatePairExactMatch` on decoded values.
 *
 * @param a Presented exact assertion.
 * @param v Stored certificate pair.
 * @param getEqualityMatcher Equality rule lookup for naming attributes.
 * @returns `true` when every present component matches.
 */
export
function certificatePairExactMatchTyped (
    a: CertificatePairExactAssertion,
    v: CertificatePair,
    getEqualityMatcher?: (attributeType: OBJECT_IDENTIFIER) => EqualityMatcher | undefined,
): boolean {
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
