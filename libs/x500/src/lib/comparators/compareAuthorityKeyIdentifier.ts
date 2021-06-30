import type EqualityMatcher from "../types/EqualityMatcher";
import type { OBJECT_IDENTIFIER } from "asn1-ts";
import type {
    AuthorityKeyIdentifier,
} from "../modules/CertificateExtensions/AuthorityKeyIdentifier.ta";
import compareGeneralNames from "./compareGeneralNames";
import compareUint8Arrays from "./compareUint8Arrays";

export
function compareAttCertIssuer (
    a: AuthorityKeyIdentifier,
    b: AuthorityKeyIdentifier,
    getEqualityMatcher?: (attributeType: OBJECT_IDENTIFIER) => EqualityMatcher | undefined,
): boolean {
    if (Boolean(a.keyIdentifier) !== Boolean(b.keyIdentifier)) {
        return false;
    }
    if (Boolean(a.authorityCertIssuer) !== Boolean(b.authorityCertIssuer)) {
        return false;
    }
    if (Boolean(a.authorityCertSerialNumber) !== Boolean(b.authorityCertSerialNumber)) {
        return false;
    }
    if (
        a.keyIdentifier
        && b.keyIdentifier
        && !compareUint8Arrays(a.keyIdentifier, b.keyIdentifier)
    ) {
        return false;
    }
    if (
        a.authorityCertIssuer
        && b.authorityCertIssuer
        && !compareGeneralNames(a.authorityCertIssuer, b.authorityCertIssuer, getEqualityMatcher)
    ) {
        return false;
    }
    if (
        a.authorityCertSerialNumber
        && b.authorityCertSerialNumber
        && !compareUint8Arrays(a.authorityCertSerialNumber, b.authorityCertSerialNumber)
    ) {
        return false;
    }
    return true;
}

export default compareAttCertIssuer;
