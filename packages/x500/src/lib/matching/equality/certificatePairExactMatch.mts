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
    CertificatePairExactAssertion,
    _decode_CertificatePairExactAssertion,
} from "../../modules/CertificateExtensions/CertificatePairExactAssertion.ta.mjs";
import {
    CertificatePair,
    _decode_CertificatePair,
} from "../../modules/AuthenticationFramework/CertificatePair.ta.mjs";

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
/**
 * `certificatePairExactMatch` on decoded values.
 *
 * @param a Presented exact assertion.
 * @param value Stored certificate pair, or that pair already decoded.
 * @param getMatcher Equality rule lookup for naming attributes.
 * @returns `true` when every present component matches.
 */
export
function certificatePairExactMatchTyped (
    a: CertificatePairExactAssertion,
    value: CertificatePair | ASN1Element,
    getMatcher?: (attributeType: AttributeType) => Matcher | undefined,
    flags: number = 0,
): boolean {
    const v = readDecoded(value, _decode_CertificatePair);
    const constantTime = flags & MATCH_FLAG_CONSTANT_TIME;
    const getEqualityMatcher = valueEqualityMatcher(getMatcher, flags);
    const issuedTo = a.issuedToThisCAAssertion;
    const issuedBy = a.issuedByThisCAAssertion;
    if (!issuedTo && !issuedBy) {
        return false;
    }
    let matched = true;
    if (issuedTo) {
        const cert = v.issuedToThisCA;
        if (!cert) {
            if (!constantTime) {
                return false;
            }
            matched = false;
        } else {
            const serialOk = bytesEqual(issuedTo.serialNumber, cert.toBeSigned.serialNumber, constantTime);
            const issuerOk = compareName(cert.toBeSigned.issuer, issuedTo.issuer, getEqualityMatcher);
            if (!serialOk || !issuerOk) {
                if (!constantTime) {
                    return false;
                }
                matched = false;
            }
        }
    }
    if (issuedBy) {
        const cert = v.issuedByThisCA;
        if (!cert) {
            if (!constantTime) {
                return false;
            }
            matched = false;
        } else {
            const serialOk = bytesEqual(issuedBy.serialNumber, cert.toBeSigned.serialNumber, constantTime);
            const issuerOk = compareName(cert.toBeSigned.issuer, issuedBy.issuer, getEqualityMatcher);
            if (!serialOk || !issuerOk) {
                if (!constantTime) {
                    return false;
                }
                matched = false;
            }
        }
    }
    return matched;
}

certificatePairExactMatchTyped satisfies TypedEquationFunction<CertificatePairExactAssertion>;

/**
 * `certificatePairExactMatch` as a `Matcher`.
 */
export
const certificatePairExactMatch: Matcher = createEqualityMatcher(
    _decode_CertificatePairExactAssertion,
    certificatePairExactMatchTyped,
    undefined,
    true,
);

export default certificatePairExactMatch;
