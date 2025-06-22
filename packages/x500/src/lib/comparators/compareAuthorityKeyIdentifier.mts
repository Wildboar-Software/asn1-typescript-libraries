import type EqualityMatcher from "../types/EqualityMatcher.mjs";
import type { OBJECT_IDENTIFIER } from "@wildboar/asn1";
import type {
    AuthorityKeyIdentifier,
} from "../modules/CertificateExtensions/AuthorityKeyIdentifier.ta.mjs";
import compareGeneralNames from "./compareGeneralNames.mjs";

/**
 * @summary Compare two `AuthorityKeyIdentifier` values
 * @param a One value
 * @param b The other
 * @returns {boolean} `true` if they match; `false` otherwise
 * @function
 */
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
