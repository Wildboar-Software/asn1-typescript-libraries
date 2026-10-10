import type { Code } from "../modules/CommonProtocolSpecification/Code.ta.mjs";

/**
 * @summary Convert a `Code` value to a string.
 * @description
 *
 * This function converts a `Code` value to a string. If the `Code` value is
 * a local code, it returns the local code as a decimal integer string. If the
 * `Code` value is a global code, it returns the global code as a
 * dot-delimited numeric object identifier string. If some other unrecognized
 * alternative is used, it returns `"?"`.
 * 
 * @param code A `Code` value.
 * @returns A string representation of the `Code` value.
 */
export
function codeToString (code: Code): string {
    if ("local" in code) {
        return code.local.toString();
    } else if ("global" in code) {
        return code.global.toString();
    } else {
        return "?";
    }
}

export default codeToString;
