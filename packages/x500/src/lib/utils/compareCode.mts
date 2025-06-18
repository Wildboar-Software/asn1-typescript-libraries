import type {
    Code,
} from "../modules/CommonProtocolSpecification/Code.ta.mjs";

/**
 * @summary Compare two Remote Operation Service Element (ROSE) Operation Codes
 * @description
 * 
 * Compare two Remote Operation Service Element (ROSE) Operation Codes for
 * equality. The ordering of codes do not matter.
 * 
 * @param {Code} a One code
 * @param {Code} b The other code
 * @returns {Boolean} `true` if both codes match
 * @function
 */
export
function compareCode (a: Code, b: Code): boolean {
    if (("local" in a) && ("local" in b)) {
        return a.local === b.local;
    } else if (("global" in a) && ("global" in b)) {
        return a.global.isEqualTo(b.global);
    } else {
        return false;
    }
}

export default compareCode;
