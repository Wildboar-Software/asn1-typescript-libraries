import type { OBJECT_IDENTIFIER } from "@wildboar/asn1";
import type EqualityMatcher from "../types/EqualityMatcher.mjs";
import {
    RoleSpecCertIdentifier,
} from "../modules/AttributeCertificateDefinitions/RoleSpecCertIdentifier.ta.mjs";
import compareGeneralName from "./compareGeneralName.mjs";
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
    getEqualityMatcher?: (attributeType: OBJECT_IDENTIFIER) => EqualityMatcher | undefined,
): boolean {
    if (!compareGeneralName(a.roleName, b.roleName, getEqualityMatcher)) {
        return false;
    }
    if (!compareGeneralName(a.roleCertIssuer, b.roleCertIssuer, getEqualityMatcher)) {
        return false;
    }
    const aSerial = a.roleCertSerialNumber;
    const bSerial = b.roleCertSerialNumber;
    if (Boolean(aSerial) !== Boolean(bSerial)) {
        return false;
    }
    if (aSerial && bSerial && Buffer.compare(aSerial, bSerial)) {
        return false;
    }
    const aLocator = a.roleCertLocator;
    const bLocator = b.roleCertLocator;
    if (!aLocator || !bLocator) {
        return !aLocator && !bLocator;
    }
    return compareGeneralNames(aLocator, bLocator, getEqualityMatcher);
}

export default compareRoleSpecCertIdentifier;
