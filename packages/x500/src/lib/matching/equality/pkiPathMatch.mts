import type EqualityMatcher from "../../types/EqualityMatcher.mjs";
import type { ASN1Element, OBJECT_IDENTIFIER } from "@wildboar/asn1";
import { readDecoded } from "../readValue.mjs";
import {
    PkiPath,
    _decode_PkiPath,
} from "../../modules/AuthenticationFramework/PkiPath.ta.mjs";
import {
    PkiPathMatchSyntax,
    _decode_PkiPathMatchSyntax,
} from "../../modules/CertificateExtensions/PkiPathMatchSyntax.ta.mjs";
import type {
    Certificate,
} from "../../modules/AuthenticationFramework/Certificate.ta.mjs";
import compareName from "../../comparators/compareName.mjs";

/**
 * Rec. ITU-T X.509 (10/2019), clause 13.3.9 `pkiPathMatch`.
 *
 * Selects a stored `pkiPath` beginning at a trusted CA and ending
 * at a given subject. TRUE iff `firstIssuer` matches the issuer of
 * the first certificate in the SEQUENCE and `lastSubject` matches
 * the subject of the last. FALSE if either comparison fails.
 */
export
function pkiPathMatch (
    assertion: ASN1Element | PkiPathMatchSyntax,
    value: ASN1Element | PkiPath,
    getEqualityMatcher?: (attributeType: OBJECT_IDENTIFIER) => EqualityMatcher | undefined,
): boolean {
    return pkiPathMatchTyped(
        readDecoded(assertion, _decode_PkiPathMatchSyntax),
        readDecoded(value, _decode_PkiPath),
        getEqualityMatcher,
    );
}

/**
 * `pkiPathMatch` on decoded values.
 *
 * @param a Presented endpoints.
 * @param v Stored PKI path.
 * @param getEqualityMatcher Equality rule lookup for naming attributes.
 * @returns `true` when the first issuer and last subject match.
 */
export
function pkiPathMatchTyped (
    a: PkiPathMatchSyntax,
    v: PkiPath,
    getEqualityMatcher?: (attributeType: OBJECT_IDENTIFIER) => EqualityMatcher | undefined,
): boolean {
    const firstCert: Certificate = v[0];
    const lastCert: Certificate = v[v.length - 1];
    return (
        compareName(a.firstIssuer, firstCert.toBeSigned.issuer, getEqualityMatcher)
        && compareName(a.lastSubject, lastCert.toBeSigned.subject, getEqualityMatcher)
    );
}

export default pkiPathMatch;
