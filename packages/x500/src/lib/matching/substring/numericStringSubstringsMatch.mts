import type { ASN1Element } from "@wildboar/asn1";
import SubstringSelection from "../../types/SubstringSelection.mjs";

/**
 * Rec. ITU-T X.520 (10/2019), clause 8.1.6
 * `numericStringSubstringsMatch`.
 *
 * Same as `caseIgnoreSubstringsMatch` except all spaces are
 * removed from both strings (clause 7.6.2).
 *
 * Each string argument may be an `ASN1Element` or a string.
 */
export
function numericStringSubstringsMatch (
    assertion: ASN1Element | string,
    value: ASN1Element | string,
    selection?: SubstringSelection,
): boolean {
    return numericStringSubstringsMatchTyped(
        typeof assertion === "string" ? assertion : assertion.numericString,
        typeof value === "string" ? value : value.numericString,
        selection ?? SubstringSelection.any_,
    );
}

/**
 * `numericStringSubstringsMatch` on two numeric strings.
 *
 * @param assertion Presented substring.
 * @param value Stored numeric string.
 * @param selection Which part of `value` must contain `assertion`.
 * @returns `true` when the selected containment holds.
 */
export
function numericStringSubstringsMatchTyped (
    assertion: string,
    value: string,
    selection: SubstringSelection,
): boolean {
    const a: string = assertion.replace(/\s+/g, "");
    const v: string = value.replace(/\s+/g, "");
    switch (selection) {
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

export default numericStringSubstringsMatch;
