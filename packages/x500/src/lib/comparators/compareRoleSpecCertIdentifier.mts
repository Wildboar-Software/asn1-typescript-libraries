import type { OBJECT_IDENTIFIER } from "@wildboar/asn1";
import type EqualityMatcher from "../types/EqualityMatcher.mjs";
import type {
    RoleSpecCertIdentifier,
} from "../modules/AttributeCertificateDefinitions/RoleSpecCertIdentifier.ta.mjs";

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
    return a.isEqualTo(b, getEqualityMatcher);
}

export default compareRoleSpecCertIdentifier;
