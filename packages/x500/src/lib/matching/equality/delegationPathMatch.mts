import type EqualityMatcher from "../../types/EqualityMatcher.mjs";
import type { ASN1Element, OBJECT_IDENTIFIER } from "@wildboar/asn1";
import { readDecoded } from "../readValue.mjs";
import {
    AttCertPath,
    _decode_AttCertPath,
} from "../../modules/AttributeCertificateDefinitions/AttCertPath.ta.mjs";
import {
    DelMatchSyntax,
    _decode_DelMatchSyntax,
} from "../../modules/AttributeCertificateDefinitions/DelMatchSyntax.ta.mjs";
import type {
    AttributeCertificate,
} from "../../modules/AttributeCertificateDefinitions/AttributeCertificate.ta.mjs";
import compareAttCertIssuer from "../../comparators/compareAttCertIssuer.mjs";
import compareHolder from "../../comparators/compareHolder.mjs";

/**
 * Rec. ITU-T X.509 (10/2019), clause 19.3.4 `delegationPathMatch`.
 *
 * Selects a stored `delegationPath` from an SOA-issued certificate
 * to the AA that issued the end-entity holder certificate being
 * validated. TRUE iff `firstIssuer` matches the issuer of the
 * first AC in the SEQUENCE and `lastHolder` matches the holder of
 * the last. FALSE if either comparison fails.
 *
 * `assertion` may be an element or a `DelMatchSyntax`. `value` may
 * be an element or an `AttCertPath`.
 */
export
function delegationPathMatch (
    assertion: ASN1Element | DelMatchSyntax,
    value: ASN1Element | AttCertPath,
    getEqualityMatcher?: (attributeType: OBJECT_IDENTIFIER) => EqualityMatcher | undefined,
): boolean {
    return delegationPathMatchTyped(
        readDecoded(assertion, _decode_DelMatchSyntax),
        readDecoded(value, _decode_AttCertPath),
        getEqualityMatcher,
    );
}

/**
 * `delegationPathMatch` on decoded values.
 *
 * @param a Presented endpoints.
 * @param v Stored attribute-certificate path.
 * @param getEqualityMatcher Equality rule lookup for naming attributes.
 * @returns `true` when the first issuer and last holder match.
 */
export
function delegationPathMatchTyped (
    a: DelMatchSyntax,
    v: AttCertPath,
    getEqualityMatcher?: (attributeType: OBJECT_IDENTIFIER) => EqualityMatcher | undefined,
): boolean {
    const firstCert: AttributeCertificate = v[0];
    const lastCert: AttributeCertificate = v[v.length - 1];
    if (!compareAttCertIssuer(a.firstIssuer, firstCert.toBeSigned.issuer)) {
        return false;
    }
    return compareHolder(a.lastHolder, lastCert.toBeSigned.holder, getEqualityMatcher);
}

export default delegationPathMatch;
