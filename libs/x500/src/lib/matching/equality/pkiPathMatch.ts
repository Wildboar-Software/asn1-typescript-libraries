import EqualityMatcher from "../../types/EqualityMatcher";
import type { ASN1Element } from "asn1-ts";
import {
    PkiPath,
    _decode_PkiPath,
} from "../../modules/AuthenticationFramework/PkiPath.ta";
import {
    PkiPathMatchSyntax,
    _decode_PkiPathMatchSyntax,
} from "../../modules/CertificateExtensions/PkiPathMatchSyntax.ta";
import type {
    Certificate,
} from "../../modules/AuthenticationFramework/Certificate.ta";
import compareName from "../../comparators/compareName";

export
const pkiPathMatch: EqualityMatcher = (
    assertion: ASN1Element,
    value: ASN1Element,
): boolean => {
    const a: PkiPathMatchSyntax = _decode_PkiPathMatchSyntax(assertion);
    const v: PkiPath = _decode_PkiPath(value);
    const firstCert: Certificate = v[0];
    const lastCert: Certificate = v[v.length - 1];
    return (
        compareName(a.firstIssuer, firstCert.toBeSigned.issuer)
        && compareName(a.lastSubject, lastCert.toBeSigned.subject)
    );
}

export default pkiPathMatch;
