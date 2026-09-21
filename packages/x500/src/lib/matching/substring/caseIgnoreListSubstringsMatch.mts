import SubstringsMatcher from "../../types/SubstringsMatcher.mjs";
import SubstringSelection from "../../types/SubstringSelection.mjs";
import type { ASN1Element } from "@wildboar/asn1";
import {
    _decode_UnboundedDirectoryString as _decode_UDS,
} from "../../modules/SelectedAttributeTypes/UnboundedDirectoryString.ta.mjs";
import directoryStringToString from "../../stringifiers/directoryStringToString.mjs";
import { prepString } from "../../utils/prepString.mjs";
import { partitionStringList, substringPieces } from "../../utils/substringPartition.mjs";

function ds (el: ASN1Element): string {
    return directoryStringToString(_decode_UDS(el));
}

function prepare (s: string): string | undefined {
    return prepString(s)?.toLowerCase();
}

/**
 * Rec. ITU-T X.520 (10/2019), clause 8.1.8
 * `caseIgnoreListSubstringsMatch`.
 *
 * Presented `SubstringAssertion` is matched against the
 * concatenation of stored `UnboundedDirectoryString` values, using
 * `caseIgnoreSubstringsMatch`. An `initial`/`any`/`final` piece
 * must not span more than one stored string.
 */
export
const caseIgnoreListSubstringsMatch: SubstringsMatcher = (
    assertion: ASN1Element,
    value: ASN1Element,
    selection?: SubstringSelection,
): boolean => {
    const lines: string[] = [];
    for (const e of value.sequenceOf) {
        const line = prepare(ds(e));
        if (line === undefined) {
            return false;
        }
        lines.push(line);
    }
    const needles = [];
    for (const p of substringPieces(assertion, selection)) {
        const text = prepare(ds(p.element));
        if (text === undefined) {
            return false;
        }
        needles.push({ kind: p.kind, text });
    }
    return partitionStringList(lines, needles);
}

export default caseIgnoreListSubstringsMatch;
