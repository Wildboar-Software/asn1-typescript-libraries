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

function prepare (s: string): string | undefined {
    return prepString(s)?.toLowerCase();
}

/**
 * Rec. ITU-T X.520 (10/2019), clause 8.1.3
 * `caseIgnoreSubstringsMatch`.
 *
 * Same as `caseExactSubstringsMatch` except upper-case is folded
 * during string preparation (clause 7.2). `control` elements are
 * ignored.
 */
export
const caseIgnoreSubstringsMatch: SubstringsMatcher = (
    assertion: ASN1Element,
    value: ASN1Element,
    selection?: SubstringSelection,
): boolean => {
    const stored = prepare(ds(value));
    if (stored === undefined) {
        return false;
    }
    const needles = [];
    for (const p of substringPieces(assertion, selection)) {
        const text = prepare(ds(p.element));
        if (text === undefined) {
            return false;
        }
        needles.push({ kind: p.kind, text });
    }
    return partitionString(stored, needles);
}

export default caseIgnoreSubstringsMatch;
