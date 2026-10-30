import type EqualityMatcher from "../../types/EqualityMatcher.mjs";
import {
    _decode_UnboundedDirectoryString,
} from "../../modules/SelectedAttributeTypes/UnboundedDirectoryString.ta.mjs";
import { directoryStringToString as ds } from "../../stringifiers/directoryStringToString.mjs";
import { prepString as ps } from "../../utils/prepString.mjs";
import {
    assertionAlreadyPrepped,
    valueAlreadyPrepped,
} from "../../types/MatchFlags.mjs";
import { containsWord } from "./wordMatch.mjs";

/**
 * Rec. ITU-T X.520 (10/2019), clause 8.5.2 `keywordMatch`.
 *
 * TRUE if the presented string matches any keyword in a
 * `DirectoryString` attribute value. Identification of keywords in
 * the stored value and the exactness of match are both local
 * matters. This implementation treats a keyword as a prepared,
 * case-folded complete word, using the same `containsWord` rule as
 * `wordMatch`.
 */
/**
 * `keywordMatch` on two strings that are already prepared and uppercased.
 *
 * @param assertion Prepared presented keyword.
 * @param value Prepared stored text.
 * @returns `true` when the keyword occurs as a word.
 */
export
function keywordMatchPrepped (assertion: string, value: string): boolean {
    return containsWord(value, assertion);
}

function prepareKeyword (text: string): string | undefined {
    return ps(text.trim())?.toUpperCase();
}

export
const keywordMatch: EqualityMatcher = (
    assertion,
    value,
    _getEqualityMatcher,
    flags = 0,
): boolean => {
    const ads = _decode_UnboundedDirectoryString(assertion);
    const vds = _decode_UnboundedDirectoryString(value);
    const rawA = ds(ads);
    const rawV = ds(vds);
    const astr = assertionAlreadyPrepped(flags) ? rawA : prepareKeyword(rawA);
    const vstr = valueAlreadyPrepped(flags) ? rawV : prepareKeyword(rawV);
    if (!astr || !vstr) {
        return false;
    }
    return keywordMatchPrepped(astr, vstr);
}

export default keywordMatch;
