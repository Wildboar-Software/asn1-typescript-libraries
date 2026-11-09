import type { OBJECT_IDENTIFIER } from "@wildboar/asn1";
import type { Matcher } from "../types/matching.mjs";
import { valueEqualityMatcher } from "../matching/valueEqualityMatcher.mjs";
import type {
    RoleSpecCertIdentifier,
} from "../modules/AttributeCertificateDefinitions/RoleSpecCertIdentifier.ta.mjs";
import { compareGeneralName } from "@wildboar/gn";
import compareGeneralNames from "./compareGeneralNames.mjs";
import { Buffer } from "node:buffer";

/**
 * @summary Compare two `RoleSpecCertIdentifier` values
 * @param a One value
 * @param b The other
 * @param getEqualityMatcher A function that takes an attribute type and
 *  returns a function that can equality-match two values of that type
 * @returns {boolean} `true` if they match; `false` otherwise
 * @function
 */
export
function compareRoleSpecCertIdentifier (
    a: RoleSpecCertIdentifier,
    b: RoleSpecCertIdentifier,
    getEqualityMatcher?: (attributeType: OBJECT_IDENTIFIER) => Matcher | undefined,
): boolean {
    const namingMatcher = valueEqualityMatcher(getEqualityMatcher);
    if (!compareGeneralName(a.roleName, b.roleName, namingMatcher)) {
        return false;
    }
    if (!compareGeneralName(a.roleCertIssuer, b.roleCertIssuer, namingMatcher)) {
        return false;
    }
    if (Boolean(a.roleCertSerialNumber) !== Boolean(b.roleCertSerialNumber)) {
        return false;
    }
    if (
        a.roleCertSerialNumber
        && b.roleCertSerialNumber
        && Buffer.compare(a.roleCertSerialNumber, b.roleCertSerialNumber)
    ) {
        return false;
    }
    if (Boolean(a.roleCertLocator) !== Boolean(b.roleCertLocator)) {
        return false;
    }
    if (
        a.roleCertLocator
        && b.roleCertLocator
        && !compareGeneralNames(a.roleCertLocator, b.roleCertLocator, getEqualityMatcher)
    ) {
        return false;
    }
    return true;
}

export default compareRoleSpecCertIdentifier;
