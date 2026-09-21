import SubstringsMatcher from "../../types/SubstringsMatcher.mjs";
import SubstringSelection from "../../types/SubstringSelection.mjs";
import type { ASN1Element } from "@wildboar/asn1";
import { prepString } from "../../utils/prepString.mjs";
import { partitionString, substringPieces } from "../../utils/substringPartition.mjs";

function prepare (s: string): string | undefined {
    return prepString(s.replace(/\s+/g, ""))?.toLowerCase();
}

function numericFrom (el: ASN1Element): string {
    try {
        return el.numericString;
    } catch {
        return el.utf8String;
    }
}

/**
 * Rec. ITU-T X.520 (10/2019), clause 8.1.6
 * `numericStringSubstringsMatch`.
 *
 * Same as `caseIgnoreSubstringsMatch` except all spaces are
 * removed from both strings (clause 7.6.2).
 */
export
const numericStringSubstringsMatch: SubstringsMatcher = (
    assertion: ASN1Element,
    value: ASN1Element,
    selection?: SubstringSelection,
): boolean => {
    const stored = prepare(numericFrom(value));
    if (stored === undefined) {
        return false;
    }
    const needles = [];
    for (const p of substringPieces(assertion, selection)) {
        const text = prepare(numericFrom(p.element));
        if (text === undefined) {
            return false;
        }
        needles.push({ kind: p.kind, text });
    }
    return partitionString(stored, needles);
}

export default numericStringSubstringsMatch;
