import type { ASN1Element } from "@wildboar/asn1";
import { ASN1TagClass, ASN1UniversalType } from "@wildboar/asn1";
import SubstringSelection from "../../types/SubstringSelection.mjs";
import type {
    PreparedSubstring,
} from "../readValue.mjs";
import { readSubstringAssertion } from "../readValue.mjs";
import { partitionString } from "../../utils/substringPartition.mjs";

function numericText (value: ASN1Element | string): string {
    return (typeof value === "string" ? value : value.numericString).replace(/\s+/g, "");
}

function numericPieces (
    assertion: ASN1Element | string,
    selection?: SubstringSelection,
): PreparedSubstring[] {
    if (selection !== undefined) {
        return [{ kind: selection, value: numericText(assertion) }];
    }
    if (typeof assertion === "string") {
        return [{ kind: SubstringSelection.any_, value: assertion.replace(/\s+/g, "") }];
    }
    if (
        assertion.tagClass === ASN1TagClass.universal
        && assertion.tagNumber === ASN1UniversalType.sequence
    ) {
        const out: PreparedSubstring[] = [];
        for (const piece of readSubstringAssertion(assertion)) {
            if (piece.kind === "control") {
                continue;
            }
            if (piece.kind === "unknown") {
                return [{ kind: "unknown" }];
            }
            out.push({ kind: piece.kind, value: piece.value.replace(/\s+/g, "") });
        }
        return out;
    }
    return [{ kind: SubstringSelection.any_, value: numericText(assertion) }];
}

/**
 * Rec. ITU-T X.520 (10/2019), clause 8.1.6
 * `numericStringSubstringsMatch`.
 *
 * Same as `caseIgnoreSubstringsMatch` except all spaces are
 * removed from both strings (clause 7.6.2). NumericString does not
 * need `prepString`.
 *
 * `assertion` may be a `SubstringAssertion` SEQUENCE, one numeric
 * string plus `selection`, or a numeric string (treated as `any`).
 * `value` is an element or a string.
 */
export
function numericStringSubstringsMatch (
    assertion: ASN1Element | string,
    value: ASN1Element | string,
    selection?: SubstringSelection,
): boolean {
    return numericStringSubstringsMatchTyped(
        numericPieces(assertion, selection),
        numericText(value),
    );
}

/**
 * `numericStringSubstringsMatch` on prepared pieces whose spaces
 * are already removed, and a stored numeric string.
 *
 * @param assertion Presented substring pieces.
 * @param value Stored numeric string with spaces already removed.
 * @returns `true` when the pieces partition `value` in order.
 */
export
function numericStringSubstringsMatchTyped (
    assertion: readonly PreparedSubstring[],
    value: string,
): boolean {
    const p = partitionString(value);
    p.next();
    for (const piece of assertion) {
        if (!p.next(piece).value) {
            return false;
        }
    }
    return p.next().value === true;
}

export default numericStringSubstringsMatch;
