import type { BIT_STRING } from "@wildboar/asn1";

/**
 * @summary Determine whether permission bits involve denying access
 * @param {Uint8ClampedArray} permissions The permissions bits
 * @returns {Boolean} `true` if the permissions involve denying access
 * @function
 */
export
function deniesAccess (permissions: BIT_STRING): boolean {
    // Odd bits are denials. Walk them directly so this does not allocate a copy.
    const length = permissions.length;
    for (let i = 1; i < length; i += 2) {
        if (permissions[i]) {
            return true;
        }
    }
    return false;
}

export default deniesAccess;
