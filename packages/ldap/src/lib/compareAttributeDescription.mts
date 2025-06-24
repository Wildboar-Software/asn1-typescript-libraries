import type { AttributeDescription } from "../lib/modules/Lightweight-Directory-Access-Protocol-V3/AttributeDescription.ta.mjs";
import bytesToAscii from "./utils/bytesToAscii.mjs";

const SEMI_COLON: number = ";".charCodeAt(0);

/**
 * @summary Compare two `AttributeDescription`s
 * @description
 * 
 * This function compares two `AttributeDescription`s. These cannot be compared
 * simply with `===` because they may contain options like ";binary", and they
 * are case-insensitive.
 * 
 * @param a One `AttributeDescription`
 * @param b The other
 * @returns Whether they match
 * @function
 */
export
function compareAttributeDescription (a: AttributeDescription, b: AttributeDescription): boolean {
    const a_semi_index = a.indexOf(SEMI_COLON);
    const b_semi_index = b.indexOf(SEMI_COLON);
    const a_oid = (a_semi_index > -1)
        ? a.slice(0, a_semi_index)
        : a;
    const b_oid = (b_semi_index > -1)
        ? b.slice(0, b_semi_index)
        : b;
    if (a_oid.length !== b_oid.length) {
        return false;
    }
    const a_str = bytesToAscii(a_oid);
    const b_str = bytesToAscii(b_oid);
    return (a_str.toLowerCase() === b_str.toLowerCase());
}

export default compareAttributeDescription;
