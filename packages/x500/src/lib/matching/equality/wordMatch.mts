// TODO: Not right. Make this do a substring search. Or use regex?
// export { default as wordMatch } from "./caseIgnoreMatch.mjs";
// export { default as default } from "./caseIgnoreMatch.mjs";

import EqualityMatcher from "../../types/EqualityMatcher.mjs";
import type { ASN1Element } from "@wildboar/asn1";
import {
    UnboundedDirectoryString,
    _decode_UnboundedDirectoryString,
} from "../../modules/SelectedAttributeTypes/UnboundedDirectoryString.ta.mjs";
import { directoryStringToString as ds } from "../../stringifiers/directoryStringToString.mjs";
import { prepString as ps } from "../../utils/prepString.mjs";

function isWordChar(c: string) {
    return c && /[\p{L}\p{N}_]/u.test(c);
}

export
function containsWord (haystack: string, needle: string) {
    let i = haystack.indexOf(needle);
    while (i >= 0) {
        const before = haystack[i - 1];
        const after = haystack[i + needle.length];
        // We have to check that what we found isn't a substring of another
        // word. It must match on a complete word.
        if (!isWordChar(before) && !isWordChar(after)) {
            return true;
        }
        i = haystack.indexOf(needle, i + 1);
    }
    return false;
}

export
const wordMatch: EqualityMatcher = (
    assertion: ASN1Element,
    value: ASN1Element,
): boolean | false => {
    const ads = _decode_UnboundedDirectoryString(assertion);
    const vds = _decode_UnboundedDirectoryString(value);
    const astr: string | undefined = ps(ds(ads).trim())?.toUpperCase();
    const vstr: string | undefined = ps(ds(vds).trim())?.toUpperCase();
    if (!astr || !vstr) {
        return undefined;
    }
    return containsWord(vstr, astr);
}

export default wordMatch;
