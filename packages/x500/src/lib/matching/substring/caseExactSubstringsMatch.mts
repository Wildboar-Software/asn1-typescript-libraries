import SubstringsMatcher from "../../types/SubstringsMatcher.mjs";
import SubstringSelection from "../../types/SubstringSelection.mjs";
import type { ASN1Element } from "@wildboar/asn1";
import {
    _decode_UnboundedDirectoryString as _decode_UDS,
} from "../../modules/SelectedAttributeTypes/UnboundedDirectoryString.ta.mjs";
import directoryStringToString from "../../stringifiers/directoryStringToString.mjs";;

/**
 * Rec. ITU-T X.520 (10/2019), clause 8.1.3
 * `caseExactSubstringsMatch`.
 *
 * TRUE if the stored `DirectoryString` can be partitioned so that
 * presented `initial`/`any`/`final` substrings match distinct
 * portions in order (`initial` prefixes, `final` suffixes). Case
 * is significant; insignificant spaces are removed (clause 7.6).
 * At most one `initial` and one `final`; `control` is ignored.
 * Corresponding characters (including combining sequences) must
 * be identical.
 */
export
const caseExactSubstringsMatch: SubstringsMatcher = (
    assertion: ASN1Element,
    value: ASN1Element,
    selection?: SubstringSelection,
): boolean => {
    const sel: SubstringSelection = selection ?? SubstringSelection.any_;
    const a: string = directoryStringToString(_decode_UDS(assertion));
    const v: string = directoryStringToString(_decode_UDS(value));
    switch (sel) {
        case (SubstringSelection.initial): {
            return v.startsWith(a);
        }
        case (SubstringSelection.any_): {
            return (v.indexOf(a) > -1);
        }
        case (SubstringSelection.final): {
            return v.endsWith(a);
        }
        default: {
            return false;
        }
    }

}

export default caseExactSubstringsMatch;
