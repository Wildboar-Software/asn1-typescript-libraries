import type EqualityMatcher from "../../types/EqualityMatcher.js";
import type { ASN1Element, OBJECT_IDENTIFIER } from "asn1-ts";
import {
    AttCertPath,
    _decode_AttCertPath,
} from "../../modules/AttributeCertificateDefinitions/AttCertPath.ta.js";
import {
    DelMatchSyntax,
    _decode_DelMatchSyntax,
} from "../../modules/AttributeCertificateDefinitions/DelMatchSyntax.ta.js";
import type {
    AttributeCertificate,
} from "../../modules/AttributeCertificateDefinitions/AttributeCertificate.ta.js";
import compareAttCertIssuer from "../../comparators/compareAttCertIssuer.js";
import compareHolder from "../../comparators/compareHolder.js";

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
