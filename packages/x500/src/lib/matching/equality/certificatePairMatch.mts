import { ASN1Element } from "@wildboar/asn1";
import type { AttributeType } from "../../modules/InformationFramework/index.mjs";
import { readDecoded } from "../readValue.mjs";
import { evaluateCertificateAssertion } from "./certificateMatch.mjs";
import {
    createEqualityMatcher,
    MATCH_FLAG_DEBUG,
    type Matcher,
    type TypedEquationFunction,
} from "../../types/matching.mjs";
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
/**
 * `certificatePairMatch` on decoded values.
 *
 * @param a Presented pair assertion.
 * @param value Stored certificate pair, or that pair already decoded.
 * @param getMatcher Equality rule lookup for naming attributes inside certificates.
 * @returns `true` when every present component matches.
 */
export
function certificatePairMatchTyped (
    a: CertificatePairAssertion,
    value: CertificatePair | ASN1Element,
    getMatcher?: (attributeType: AttributeType) => Matcher | undefined,
    flags: number = 0,
): boolean {
    const v = readDecoded(value, _decode_CertificatePair);
    if (v.isEmpty()) {
        if (flags & MATCH_FLAG_DEBUG) {
            console.error(
                "@wildboar/x500: debug: certificatePairMatch: stored CertificatePair is empty",
            );
        }
        return false;
    }
    const issuedBy = a.issuedByThisCAAssertion;
    const issuedTo = a.issuedToThisCAAssertion;
    const issuedByCert = v.issuedByThisCA;
    const issuedToCert = v.issuedToThisCA;
    return (
        (!issuedBy || (!!issuedByCert && evaluateCertificateAssertion(issuedBy, issuedByCert, getMatcher, flags)))
        && (!issuedTo || (!!issuedToCert && evaluateCertificateAssertion(issuedTo, issuedToCert, getMatcher, flags)))
    );
}

certificatePairMatchTyped satisfies TypedEquationFunction<CertificatePairAssertion>;

/**
 * `certificatePairMatch` as a `Matcher`.
 */
export
const certificatePairMatch: Matcher = createEqualityMatcher(
    _decode_CertificatePairAssertion,
    certificatePairMatchTyped,
);

export default certificatePairMatch;
