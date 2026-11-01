import type { ASN1Element } from "@wildboar/asn1";
import type { AttributeType } from "../../modules/InformationFramework/index.mjs";
import { valueEqualityMatcher } from "../valueEqualityMatcher.mjs";
import { bytesEqual } from "../constantTime.mjs";
import {
    createEqualityMatcher,
    MATCH_FLAG_CONSTANT_TIME,
    type Matcher,
    type TypedEquationFunction,
} from "../../types/matching.mjs";
import { readDecoded } from "../readValue.mjs";
import { compareName } from "@wildboar/dn";
import {
    CertificateExactAssertion,
    _decode_CertificateExactAssertion,
} from "../../modules/CertificateExtensions/CertificateExactAssertion.ta.mjs";
import {
    type Certificate,
    _decode_Certificate,
} from "../../modules/AuthenticationFramework/Certificate.ta.mjs";

/**
 * Rec. ITU-T X.509 (10/2019), clause 13.3.1
 * `certificateExactMatch`.
 *
 * Uniquely selects a single `Certificate`. TRUE iff serial number
 * and issuer `Name` in `CertificateExactAssertion` equal those in
 * the stored certificate.
 */
/**
 * `certificateExactMatch` on a decoded assertion and certificate.
 *
 * @param a Presented serial number and issuer.
 * @param value Stored certificate, or that certificate already decoded.
 * @param getMatcher Equality rule lookup for naming attributes.
 * @returns `true` when the serial number and issuer match.
 */
export
function certificateExactMatchTyped (
    a: CertificateExactAssertion,
    value: Certificate | ASN1Element,
    getMatcher?: (attributeType: AttributeType) => Matcher | undefined,
    flags: number = 0,
): boolean {
    const v = readDecoded(value, _decode_Certificate);
    const constantTime = flags & MATCH_FLAG_CONSTANT_TIME;
    const getEqualityMatcher = valueEqualityMatcher(getMatcher, flags);
    const serialMatches = bytesEqual(a.serialNumber, v.toBeSigned.serialNumber, constantTime);
    if (!serialMatches && !constantTime) {
        return false;
    }
    const issuerMatches = compareName(v.toBeSigned.issuer, a.issuer, getEqualityMatcher);
    return serialMatches && issuerMatches;
}

certificateExactMatchTyped satisfies TypedEquationFunction<CertificateExactAssertion>;

/**
 * `certificateExactMatch` as a `Matcher`.
 */
export
const certificateExactMatch: Matcher = createEqualityMatcher(
    _decode_CertificateExactAssertion,
    certificateExactMatchTyped,
    undefined,
    true,
);

export default certificateExactMatch;
