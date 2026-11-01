import type { ASN1Element } from "@wildboar/asn1";
import type { AttributeType } from "../../modules/InformationFramework/index.mjs";
import { valueEqualityMatcher } from "../valueEqualityMatcher.mjs";
import {
    createEqualityMatcher,
    type Matcher,
    type TypedEquationFunction,
} from "../../types/matching.mjs";
import { Buffer } from "node:buffer";
import { readDecoded } from "../readValue.mjs";
import {
    AttributeCertificateExactAssertion,
    _decode_AttributeCertificateExactAssertion,
} from "../../modules/AttributeCertificateDefinitions/AttributeCertificateExactAssertion.ta.mjs";
import {
    type AttributeCertificate,
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
/**
 * `attributeCertificateExactMatch` on a decoded assertion and
 * attribute certificate.
 *
 * @param assertion Presented serial number and issuer.
 * @param value Stored attribute certificate, or that certificate already decoded.
 * @param getMatcher Equality rule lookup for naming attributes.
 * @returns `true` when the serial number and issuer match.
 */
export
function attributeCertificateExactMatchTyped (
    assertion: AttributeCertificateExactAssertion,
    value: AttributeCertificate | ASN1Element,
    getMatcher?: (attributeType: AttributeType) => Matcher | undefined,
): boolean {
    const stored = readDecoded(value, _decode_AttributeCertificate);
    const getEqualityMatcher = valueEqualityMatcher(getMatcher);
    if (Buffer.compare(stored.toBeSigned.serialNumber, assertion.serialNumber) !== 0) {
        return false;
    }
    return compareAttCertIssuer(
        assertion.issuer,
        stored.toBeSigned.issuer,
        getEqualityMatcher,
    );
}

attributeCertificateExactMatchTyped satisfies TypedEquationFunction<AttributeCertificateExactAssertion>;

/**
 * `attributeCertificateExactMatch` as a `Matcher`.
 */
export
const attributeCertificateExactMatch: Matcher = createEqualityMatcher(
    _decode_AttributeCertificateExactAssertion,
    attributeCertificateExactMatchTyped,
);

export default attributeCertificateExactMatch;
