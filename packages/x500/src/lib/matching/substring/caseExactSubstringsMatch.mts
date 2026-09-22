import SubstringsMatcher from "../../types/SubstringsMatcher.mjs";
import SubstringSelection from "../../types/SubstringSelection.mjs";
import type { ASN1Element } from "@wildboar/asn1";
import {
    _decode_UnboundedDirectoryString as _decode_UDS,
} from "../../modules/SelectedAttributeTypes/UnboundedDirectoryString.ta.mjs";
import directoryStringToString from "../../stringifiers/directoryStringToString.mjs";
import { prepString } from "../../utils/prepString.mjs";
import { partitionString, substringPieces } from "../../utils/substringPartition.mjs";

function ds (el: ASN1Element): string {
    try {
        return directoryStringToString(_decode_UDS(el));
    } catch {
        return el.utf8String;
    }
}

/**
 * Rec. ITU-T X.520 (10/2019), clause 8.1.3
 * `caseExactSubstringsMatch`.
 *
 * TRUE if the stored `DirectoryString` can be partitioned so that
 * presented `initial`/`any`/`final` substrings match distinct
 * portions in order (`initial` prefixes, `final` suffixes). Case
 * is significant; insignificant spaces are removed (clause 7.6).
 * At most one `initial` and one `final`; `control` is ignored.
 */
export
const caseExactSubstringsMatch: SubstringsMatcher = (
    assertion: ASN1Element,
    value: ASN1Element,
    selection?: SubstringSelection,
): boolean => {
    const stored = prepString(ds(value));
    if (stored === undefined) {
        return false;
    }
    const needles = [];
    for (const p of substringPieces(assertion, selection)) {
        const text = prepString(ds(p.element));
        if (text === undefined) {
            return false;
        }
        needles.push({ kind: p.kind, text });
    }
    return partitionString(stored, needles);
}

export default caseExactSubstringsMatch;
