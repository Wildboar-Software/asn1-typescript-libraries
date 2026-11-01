import type { ASN1Element } from "@wildboar/asn1";
import type { AttributeType } from "../../modules/InformationFramework/index.mjs";
import { valueEqualityMatcher } from "../valueEqualityMatcher.mjs";
import {
    createEqualityMatcher,
    MATCH_FLAG_CONSTANT_TIME,
    MATCH_FLAG_DEBUG,
    type Matcher,
    type TypedEquationFunction,
} from "../../types/matching.mjs";
import { readDecoded } from "../readValue.mjs";
import {
    type PkiPath,
    _decode_PkiPath,
} from "../../modules/AuthenticationFramework/PkiPath.ta.mjs";
import {
    PkiPathMatchSyntax,
    _decode_PkiPathMatchSyntax,
} from "../../modules/CertificateExtensions/PkiPathMatchSyntax.ta.mjs";
import type {
    Certificate,
} from "../../modules/AuthenticationFramework/Certificate.ta.mjs";
import { compareName } from "@wildboar/dn";

/**
 * Rec. ITU-T X.509 (10/2019), clause 13.3.9 `pkiPathMatch`.
 *
 * Selects a stored `pkiPath` beginning at a trusted CA and ending
 * at a given subject. TRUE iff `firstIssuer` matches the issuer of
 * the first certificate in the SEQUENCE and `lastSubject` matches
 * the subject of the last. FALSE if either comparison fails.
 */
/**
 * `pkiPathMatch` on decoded values.
 *
 * @param a Presented endpoints.
 * @param value Stored PKI path, or that path already decoded.
 * @param getMatcher Equality rule lookup for naming attributes.
 * @returns `true` when the first issuer and last subject match.
 */
export
function pkiPathMatchTyped (
    a: PkiPathMatchSyntax,
    value: PkiPath | ASN1Element,
    getMatcher?: (attributeType: AttributeType) => Matcher | undefined,
    flags: number = 0,
): boolean {
    const v = readDecoded(value, _decode_PkiPath);
    if (v.length === 0) {
        if (flags & MATCH_FLAG_DEBUG) {
            console.error(
                "@wildboar/x500: debug: pkiPathMatch: stored PkiPath is empty",
            );
        }
        return false;
    }
    const getEqualityMatcher = valueEqualityMatcher(getMatcher, flags);
    const firstCert: Certificate = v[0];
    const lastCert: Certificate = v[v.length - 1];
    const firstMatches = compareName(a.firstIssuer, firstCert.toBeSigned.issuer, getEqualityMatcher);
    if (!firstMatches && !(flags & MATCH_FLAG_CONSTANT_TIME)) {
        return false;
    }
    const lastMatches = compareName(a.lastSubject, lastCert.toBeSigned.subject, getEqualityMatcher);
    return firstMatches && lastMatches;
}

pkiPathMatchTyped satisfies TypedEquationFunction<PkiPathMatchSyntax>;

/**
 * `pkiPathMatch` as a `Matcher`.
 */
export
const pkiPathMatch: Matcher = createEqualityMatcher(
    _decode_PkiPathMatchSyntax,
    pkiPathMatchTyped,
    undefined,
    true,
);

export default pkiPathMatch;
