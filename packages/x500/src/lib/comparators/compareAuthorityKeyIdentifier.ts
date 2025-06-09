import type EqualityMatcher from "../types/EqualityMatcher.js";
import type { OBJECT_IDENTIFIER } from "asn1-ts";
import type {
    AuthorityKeyIdentifier,
} from "../modules/CertificateExtensions/AuthorityKeyIdentifier.ta.js";
import compareGeneralNames from "./compareGeneralNames.js";

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
        && Buffer.compare(a.keyIdentifier, b.keyIdentifier)
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
        && Buffer.compare(a.authorityCertSerialNumber, b.authorityCertSerialNumber)
    ) {
        return false;
    }
    return true;
}

export default compareAttCertIssuer;
