import type EqualityMatcher from "../../types/EqualityMatcher.mjs";
import type { ASN1Element, OBJECT_IDENTIFIER } from "@wildboar/asn1";
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
 */
export
const delegationPathMatch: EqualityMatcher = (
    assertion: ASN1Element,
    value: ASN1Element,
    getEqualityMatcher?: (attributeType: OBJECT_IDENTIFIER) => EqualityMatcher | undefined,
): boolean => {
    const a: DelMatchSyntax = _decode_DelMatchSyntax(assertion);
    const v: AttCertPath = _decode_AttCertPath(value);
    const firstCert: AttributeCertificate = v[0];
    const lastCert: AttributeCertificate = v[v.length - 1];
    if (!compareAttCertIssuer(a.firstIssuer, firstCert.toBeSigned.issuer)) {
        return false;
    }
    return compareHolder(a.lastHolder, lastCert.toBeSigned.holder, getEqualityMatcher);
}

export default delegationPathMatch;
