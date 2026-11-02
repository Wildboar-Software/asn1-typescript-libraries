import type { ASN1Element, OBJECT_IDENTIFIER } from "@wildboar/asn1";
import type { AttributeType } from "../../modules/InformationFramework/index.mjs";
import { valueEqualityMatcher } from "../valueEqualityMatcher.mjs";
import type EqualityMatcher from "../../types/EqualityMatcher.mjs";
import { bytesEqual, ctBytesEqual } from "../constantTime.mjs";
import {
    createEqualityMatcher,
    MATCH_FLAG_CONSTANT_TIME,
    MATCH_FLAG_DEBUG,
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

type GetValueMatcher = ((attributeType: OBJECT_IDENTIFIER) => EqualityMatcher | undefined) | undefined;

function matchCertificatePairFast (
    a: CertificatePairExactAssertion,
    v: CertificatePair,
    getEqualityMatcher: GetValueMatcher,
): boolean {
    const issuedTo = a.issuedToThisCAAssertion;
    const issuedBy = a.issuedByThisCAAssertion;
    if (issuedTo) {
        const cert = v.issuedToThisCA;
        if (!cert) {
            return false;
        }
        if (!bytesEqual(issuedTo.serialNumber, cert.toBeSigned.serialNumber, false)) {
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
        if (!bytesEqual(issuedBy.serialNumber, cert.toBeSigned.serialNumber, false)) {
            return false;
        }
        if (!compareName(cert.toBeSigned.issuer, issuedBy.issuer, getEqualityMatcher)) {
            return false;
        }
    }
    return true;
}

function matchCertificatePairConstantTime (
    a: CertificatePairExactAssertion,
    v: CertificatePair,
    getEqualityMatcher: GetValueMatcher,
): boolean {
    const issuedTo = a.issuedToThisCAAssertion;
    const issuedBy = a.issuedByThisCAAssertion;
    let matched = true;
    if (issuedTo) {
        const cert = v.issuedToThisCA;
        if (!cert) {
            matched = false;
        } else {
            const serialOk = ctBytesEqual(issuedTo.serialNumber, cert.toBeSigned.serialNumber);
            const issuerOk = compareName(cert.toBeSigned.issuer, issuedTo.issuer, getEqualityMatcher);
            if (!serialOk || !issuerOk) {
                matched = false;
            }
        }
    }
    if (issuedBy) {
        const cert = v.issuedByThisCA;
        if (!cert) {
            matched = false;
        } else {
            const serialOk = ctBytesEqual(issuedBy.serialNumber, cert.toBeSigned.serialNumber);
            const issuerOk = compareName(cert.toBeSigned.issuer, issuedBy.issuer, getEqualityMatcher);
            if (!serialOk || !issuerOk) {
                matched = false;
            }
        }
    }
    return matched;
}

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
    const getEqualityMatcher = valueEqualityMatcher(getMatcher, flags);
    if (!a.issuedToThisCAAssertion && !a.issuedByThisCAAssertion) {
        if (flags & MATCH_FLAG_DEBUG) {
            console.error(
                "@wildboar/x500: debug: certificatePairExactMatch: assertion has neither issuedToThisCAAssertion nor issuedByThisCAAssertion",
            );
        }
        return false;
    }
    if (flags & MATCH_FLAG_CONSTANT_TIME) {
        return matchCertificatePairConstantTime(a, v, getEqualityMatcher);
    }
    return matchCertificatePairFast(a, v, getEqualityMatcher);
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
