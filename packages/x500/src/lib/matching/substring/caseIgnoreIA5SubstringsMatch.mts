import type { ASN1Element } from "@wildboar/asn1";
import type SubstringSelection from "../../types/SubstringSelection.mjs";
import type {
    PreparedSubstring,
    SubstringAssertionInput,
} from "../readValue.mjs";
import { readSubstringAssertionOrComponent } from "../readValue.mjs";
import { prepString } from "../../utils/prepString.mjs";
import { partitionString } from "../../utils/substringPartition.mjs";

/**
 * Rec. ITU-T X.520 (10/2019), clause 8.11.3
 * `caseIgnoreIA5SubstringsMatch` (LDAP-defined).
 *
 * Substring match of an IA5String stored value against a
 * `SubstringAssertion` after string preparation (clause 7.2). Same
 * partitioning rules as `caseIgnoreSubstringsMatch` (clause
 * 8.1.3).
 *
 * `assertion` is an element or a substring assertion. `value` is
 * an element or an IA5 string.
 */
export
function caseIgnoreIA5SubstringsMatch (
    assertion: SubstringAssertionInput,
    value: ASN1Element | string,
    selection?: SubstringSelection,
): boolean {
    return caseIgnoreIA5SubstringsMatchTyped(
        readSubstringAssertionOrComponent(assertion, selection),
        typeof value === "string" ? value : value.ia5String,
    );
}

/**
 * `caseIgnoreIA5SubstringsMatch` on prepared pieces and a stored
 * IA5 string. Case is folded during string preparation.
 *
 * @param assertion Presented substring pieces.
 * @param value Stored IA5 string.
 * @returns `true` when the pieces partition `value` in order.
 */
export
function caseIgnoreIA5SubstringsMatchTyped (
    assertion: readonly PreparedSubstring[],
    value: string,
): boolean {
    const stored = prepString(value, { caseFold: true });
    if (stored === undefined) {
        return false;
    }
    const needles: PreparedSubstring[] = [];
    for (const piece of assertion) {
        if (piece.kind === "control") {
            continue;
        }
        if (piece.kind === "unknown") {
            return false;
        }
        const text = prepString(piece.value, { caseFold: true });
        if (text === undefined) {
            return false;
        }
        needles.push({ kind: piece.kind, value: text });
    }
    return partitionString(stored, needles);
}

export default caseIgnoreIA5SubstringsMatch;
