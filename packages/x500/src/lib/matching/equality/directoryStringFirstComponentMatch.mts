import type { DirectoryStringInput } from "../readValue.mjs";
import {
    readDirectoryString,
    readFirstDirectoryString,
} from "../readValue.mjs";
import { caseIgnoreMatchTyped } from "./caseIgnoreMatch.mjs";

/**
 * Rec. ITU-T X.520 (10/2019), clause 8.4.3
 * `directoryStringFirstComponentMatch`.
 *
 * Compares a presented `UnboundedDirectoryString` with a SEQUENCE
 * whose first component is a mandatory `DirectoryString`. TRUE iff
 * that first component matches via `caseIgnoreMatch`. The
 * assertion syntax is derived from the first SEQUENCE component.
 *
 * `assertion` is an element, directory string, or string. `value`
 * is that same set, or a SEQUENCE element whose first component is
 * the directory string. A missing first component is FALSE.
 */
export
function directoryStringFirstComponentMatch (
    assertion: DirectoryStringInput,
    value: DirectoryStringInput,
): boolean {
    const first = readFirstDirectoryString(value);
    if (first === undefined) {
        return false;
    }
    return directoryStringFirstComponentMatchTyped(
        readDirectoryString(assertion),
        first,
    );
}

/**
 * `directoryStringFirstComponentMatch` on the presented string and
 * the stored first component. Comparison is `caseIgnoreMatch`.
 *
 * @param assertion Presented directory string.
 * @param value Stored first component.
 * @returns `true` when `caseIgnoreMatch` holds.
 */
export
function directoryStringFirstComponentMatchTyped (
    assertion: string,
    value: string,
): boolean {
    return caseIgnoreMatchTyped(assertion, value);
}

export default directoryStringFirstComponentMatch;
