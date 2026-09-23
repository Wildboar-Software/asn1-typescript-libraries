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

function isWordChar(c: string | undefined): boolean {
    return !!c && /[\p{L}\p{N}_]/u.test(c);
}

/**
 * Rec. ITU-T X.520 (10/2019) clause 8.5.1: whether `needle` occurs
 * as a complete word in `haystack`. X.520 leaves the definition of
 * a "word" as a local matter; here a word is letters, digits, or
 * underscore, bounded by other characters or the string edges.
 */
export
function containsWord (haystack: string, needle: string): boolean {
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

/**
 * Rec. ITU-T X.520 (10/2019), clause 8.5.1 `wordMatch`.
 *
 * TRUE if the presented word matches any word in a
 * `DirectoryString` attribute value. Individual words are compared
 * as for `caseIgnoreMatch`. The precise definition of a "word" is
 * a local matter; `containsWord` treats a match as a prepared,
 * case-folded substring bounded by non-word characters.
 */
export
const wordMatch: EqualityMatcher = (
    assertion: ASN1Element,
    value: ASN1Element,
): boolean => {
    const ads = _decode_UnboundedDirectoryString(assertion);
    const vds = _decode_UnboundedDirectoryString(value);
    const astr: string | undefined = ps(ds(ads).trim())?.toUpperCase();
    const vstr: string | undefined = ps(ds(vds).trim())?.toUpperCase();
    if (!astr || !vstr) {
        return false;
    }
    return containsWord(vstr, astr);
}

export default wordMatch;
