import SubstringSelection from "../../types/SubstringSelection.mjs";
import type { DirectoryStringInput } from "../readValue.mjs";
import type {
    PreparedSubstring,
    SubstringAssertionInput,
} from "../readValue.mjs";
import {
    readDirectoryString,
    readSubstringAssertionOrComponent,
} from "../readValue.mjs";
import { prepString } from "../../utils/prepString.mjs";
import { partitionString } from "../../utils/substringPartition.mjs";

/**
 * Rec. ITU-T X.520 (10/2019), clause 8.1.3
 * `caseIgnoreSubstringsMatch`.
 *
 * Same as `caseExactSubstringsMatch` except upper-case is folded
 * during string preparation (clause 7.2). `control` elements are
 * ignored.
 *
 * `assertion` may be a `SubstringAssertion`, one component plus
 * `selection`, a directory string, or a JavaScript string.
 * `value` is an element, a directory string, or a JavaScript string.
 */
export
function caseIgnoreSubstringsMatch (
    assertion: SubstringAssertionInput | DirectoryStringInput,
    value: DirectoryStringInput,
    selection?: SubstringSelection,
): boolean {
    return caseIgnoreSubstringsMatchTyped(
        readSubstringAssertionOrComponent(assertion, selection),
        readDirectoryString(value),
    );
}

/**
 * `caseIgnoreSubstringsMatch` on prepared pieces and a stored string.
 * Case is folded during string preparation.
 *
 * @param assertion Presented substring pieces.
 * @param value Stored string.
 * @returns `true` when the pieces partition `value` in order.
 */
export
function caseIgnoreSubstringsMatchTyped (
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

export default caseIgnoreSubstringsMatch;
