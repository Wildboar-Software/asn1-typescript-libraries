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
 * `caseExactSubstringsMatch`.
 *
 * TRUE if the stored `DirectoryString` can be partitioned so that
 * presented `initial`/`any`/`final` substrings match distinct
 * portions in order (`initial` prefixes, `final` suffixes). Case
 * is significant; insignificant spaces are removed (clause 7.6).
 * At most one `initial` and one `final`; `control` is ignored.
 * Corresponding characters (including combining sequences) must
 * be identical.
 *
 * `assertion` may be a `SubstringAssertion`, one component plus
 * `selection`, a directory string, or a JavaScript string.
 * `value` is an element, a directory string, or a JavaScript string.
 */
export
function caseExactSubstringsMatch (
    assertion: SubstringAssertionInput | DirectoryStringInput,
    value: DirectoryStringInput,
    selection?: SubstringSelection,
): boolean {
    return caseExactSubstringsMatchTyped(
        readSubstringAssertionOrComponent(assertion, selection),
        readDirectoryString(value),
    );
}

/**
 * `caseExactSubstringsMatch` on prepared pieces and a stored string.
 *
 * @param assertion Presented substring pieces.
 * @param value Stored string.
 * @returns `true` when the pieces partition `value` in order.
 */
export
function caseExactSubstringsMatchTyped (
    assertion: readonly PreparedSubstring[],
    value: string,
): boolean {
    const stored = prepString(value);
    if (stored === undefined) {
        return false;
    }
    const p = partitionString(stored);
    p.next();
    for (const piece of assertion) {
        if (piece.kind === "control") {
            continue;
        }
        if (piece.kind === "unknown") {
            return false;
        }
        const text = prepString(piece.value);
        if (text === undefined) {
            return false;
        }
        if (!p.next({ kind: piece.kind, value: text }).value) {
            return false;
        }
    }
    return p.next().value === true;
}

export default caseExactSubstringsMatch;
