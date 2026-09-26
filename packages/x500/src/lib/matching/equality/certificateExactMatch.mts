import type EqualityMatcher from "../../types/EqualityMatcher.mjs";
import type { ASN1Element, OBJECT_IDENTIFIER } from "@wildboar/asn1";
import { readDecoded } from "../readValue.mjs";
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
function certificateExactMatch (
    assertion: ASN1Element | CertificateExactAssertion,
    value: ASN1Element | Certificate,
    getEqualityMatcher?: (attributeType: OBJECT_IDENTIFIER) => EqualityMatcher | undefined,
): boolean {
    return certificateExactMatchTyped(
        readDecoded(assertion, _decode_CertificateExactAssertion),
        readDecoded(value, _decode_Certificate),
        getEqualityMatcher,
    );
}

/**
 * `certificateExactMatch` on a decoded assertion and certificate.
 *
 * @param a Presented serial number and issuer.
 * @param v Stored certificate.
 * @param getEqualityMatcher Equality rule lookup for naming attributes.
 * @returns `true` when the serial number and issuer match.
 */
export
function certificateExactMatchTyped (
    a: CertificateExactAssertion,
    v: Certificate,
    getEqualityMatcher?: (attributeType: OBJECT_IDENTIFIER) => EqualityMatcher | undefined,
): boolean {
    if (Buffer.compare(v.toBeSigned.serialNumber, a.serialNumber)) {
        return false;
    }
    return compareName(v.toBeSigned.issuer, a.issuer, getEqualityMatcher);
}

export default certificateExactMatch;
