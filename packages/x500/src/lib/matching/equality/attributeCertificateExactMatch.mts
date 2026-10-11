import type EqualityMatcher from "../../types/EqualityMatcher.mjs";
import type { ASN1Element, OBJECT_IDENTIFIER } from "@wildboar/asn1";
import { Buffer } from "node:buffer";
import { readDecoded } from "../readValue.mjs";
import {
    AttributeCertificateExactAssertion,
    _decode_AttributeCertificateExactAssertion,
} from "../../modules/AttributeCertificateDefinitions/AttributeCertificateExactAssertion.ta.mjs";
import {
    AttributeCertificate,
    _decode_AttributeCertificate,
} from "../../modules/AttributeCertificateDefinitions/AttributeCertificate.ta.mjs";
import compareAttCertIssuer from "../../comparators/compareAttCertIssuer.mjs";

/**
 * Rec. ITU-T X.509 (10/2019), clause 19.3.1
 * `attributeCertificateExactMatch`.
 *
 * Uniquely selects an `AttributeCertificate`. TRUE iff serial
 * number and issuer (`AttCertIssuer`) in
 * `AttributeCertificateExactAssertion` equal those in the stored
 * certificate.
 *
 * `AttributeCertificateExactAssertion` is a SEQUENCE of
 * `serialNumber` then `issuer`. The stored value is
 * `SIGNED{TBSAttributeCertificate}`, whose serial number is inside
 * `toBeSigned`, not a third component of the outer sequence.
 *
 * `assertion` may be an element or an
 * `AttributeCertificateExactAssertion`. `value` may be an element
 * or an `AttributeCertificate`.
 */
export
function attributeCertificateExactMatch (
    assertion: ASN1Element | AttributeCertificateExactAssertion,
    value: ASN1Element | AttributeCertificate,
    getEqualityMatcher?: (attributeType: OBJECT_IDENTIFIER) => EqualityMatcher | undefined,
): boolean {
    return attributeCertificateExactMatchTyped(
        readDecoded(assertion, _decode_AttributeCertificateExactAssertion),
        readDecoded(value, _decode_AttributeCertificate),
        getEqualityMatcher,
    );
}

/**
 * `attributeCertificateExactMatch` on a decoded assertion and
 * attribute certificate.
 *
 * @param assertion Presented serial number and issuer.
 * @param value Stored attribute certificate.
 * @param getEqualityMatcher Equality rule lookup for naming attributes.
 * @returns `true` when the serial number and issuer match.
 */
export
function attributeCertificateExactMatchTyped (
    assertion: AttributeCertificateExactAssertion,
    value: AttributeCertificate,
    getEqualityMatcher?: (attributeType: OBJECT_IDENTIFIER) => EqualityMatcher | undefined,
): boolean {
    if (Buffer.compare(value.toBeSigned.serialNumber, assertion.serialNumber) !== 0) {
        return false;
    }
    return compareAttCertIssuer(
        assertion.issuer,
        value.toBeSigned.issuer,
        getEqualityMatcher,
    );
}

export default attributeCertificateExactMatch;
