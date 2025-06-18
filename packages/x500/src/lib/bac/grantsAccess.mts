import type ACDFTupleExtended from "../types/ACDFTupleExtended.mjs";

/**
 * @summary Determine whether an ACDF tuple involves granting access
 * @param {Array} tuple The ACDF tuple
 * @returns {Boolean} `true` if the permissions involve granting access
 * @function
 */
export
function grantsAccess (tuple: ACDFTupleExtended): boolean {
    const permissions = tuple[3];
    // All the even bits are grants.
    return Array.from(permissions).some((perm, index) => (index % 2) ? false : Boolean(perm));
}

export default grantsAccess;
