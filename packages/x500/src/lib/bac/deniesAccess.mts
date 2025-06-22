import type { BIT_STRING } from "@wildboar/asn1";

/**
 * @summary Determine whether permission bits involve denying access
 * @param {Uint8ClampedArray} permissions The permissions bits
 * @returns {Boolean} `true` if the permissions involve denying access
 * @function
 */
export
function deniesAccess (permissions: BIT_STRING): boolean {
    // All the odd bits are denials.
    return Array.from(permissions).some((perm, index) => (index % 2) ? Boolean(perm) : false);
}

export default deniesAccess;
