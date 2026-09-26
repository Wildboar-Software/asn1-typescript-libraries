import stringifyRDNSequence from "../rdnseq/tostr.mjs";
import type { Name } from "../Name.ta.mjs";

export
function stringifyName (
    name: Name,
): string {
    if ("rdnSequence" in name) {
        return "rdnSequence:" + stringifyRDNSequence(name.rdnSequence);
    }
    // TODO: Other variants
    return "";
}