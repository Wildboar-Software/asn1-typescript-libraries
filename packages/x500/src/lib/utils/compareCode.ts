import type {
    Code,
} from "../modules/CommonProtocolSpecification/Code.ta.js";

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
