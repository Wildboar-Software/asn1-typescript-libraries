import EqualityMatcher from "../../types/EqualityMatcher.mjs";
import type { ASN1Element } from "@wildboar/asn1";
import {
    _decode_UnboundedDirectoryString,
} from "../../modules/SelectedAttributeTypes/UnboundedDirectoryString.ta.mjs";
import { directoryStringToString as ds } from "../../stringifiers/directoryStringToString.mjs";
import { prepString as ps } from "../../utils/prepString.mjs";
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
export
const keywordMatch: EqualityMatcher = (
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

export default keywordMatch;
