import type { Code } from "../modules/CommonProtocolSpecification/Code.ta.mjs";

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
