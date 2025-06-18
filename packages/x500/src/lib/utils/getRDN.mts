import type {
    DistinguishedName,
} from "../modules/InformationFramework/DistinguishedName.ta.mjs";
import type {
    RelativeDistinguishedName,
} from "../modules/InformationFramework/RelativeDistinguishedName.ta.mjs";

/**
 * @summary Get the relative distinguished name from a distinguished name.
 * @description
 *
 * This function may seem pointlessly simple, but it exists for clarification.
 * In the X.500 specifications, a distinguished name is sorted in order that
 * descends the DIT, meaning that the entries at the start of the DN are closer
 * to the root of the DIT, and entries at the end of the DN are closer to the
 * leaves of the DIT.
 *
 * This is the opposite in LDAP distinguished names.
 *
 * This unintuitive reversal warrants a function specifically for clarification.
 *
 * @param {DistinguishedName} dn The distinguished name from whence to extract the relative
 *  distinguished name.
 * @returns {RelativeDistinguishedName | undefined} The relative distinguished
 *  name or `undefined` if the distinguished name is zero-length.
 */
export
function getRDN (dn: DistinguishedName): RelativeDistinguishedName | undefined {
    return dn[dn.length - 1];
}

export default getRDN;
