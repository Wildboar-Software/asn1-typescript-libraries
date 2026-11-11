import type ACDFTupleExtended from "../types/ACDFTupleExtended.mjs";

/**
 * @summary Determine whether an ACDF tuple involves granting access
 * @param {ACDFTupleExtended} tuple The ACDF tuple
 * @returns {Boolean} `true` if the permissions involve granting access
 * @function
 */
export
function grantsAccess (tuple: ACDFTupleExtended): boolean {
    const permissions = tuple.grantsAndDenials;
    // Even bits are grants. Walk them directly so this does not allocate a copy.
    const length = permissions.length;
    for (let i = 0; i < length; i += 2) {
        if (permissions[i]) {
            return true;
        }
    }
    return false;
}

export default grantsAccess;
