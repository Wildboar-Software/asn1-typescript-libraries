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
        try {
            return el.printableString;
        } catch {
            return el.utf8String;
        }
    }
}

function prepareTelephone (s: string): string | undefined {
    return prepString(s.replace(/[-\s]+/g, ""))?.toLowerCase();
}

/**
 * Rec. ITU-T X.520 (10/2019), clause 8.2.14
 * `facsimileNumberSubstringsMatch`.
 *
 * Substring-matches the first (`telephoneNumber`) element of a
 * facsimile sequence; `parameters` is not evaluated. Matching of
 * that number is as for `telephoneNumberSubstringsMatch`.
 */
export
const facsimileNumberSubstringsMatch: SubstringsMatcher = (
    assertion: ASN1Element,
    value: ASN1Element,
    selection?: SubstringSelection,
): boolean => {
    const stored = prepareTelephone(ds(value.sequence[0]));
    if (stored === undefined) {
        return false;
    }
    const needles = [];
    for (const p of substringPieces(assertion, selection)) {
        const text = prepareTelephone(ds(p.element));
        if (text === undefined) {
            return false;
        }
        needles.push({ kind: p.kind, text });
    }
    return partitionString(stored, needles);
}

export default facsimileNumberSubstringsMatch;
