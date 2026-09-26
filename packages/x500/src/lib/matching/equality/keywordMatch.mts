import type { DirectoryStringInput } from "../readValue.mjs";
import { caseIgnoreMatch } from "./caseIgnoreMatch.mjs";

/**
 * Rec. ITU-T X.520 (10/2019), clause 8.5.2 `keywordMatch`.
 *
 * TRUE if the presented string matches any keyword in a
 * `DirectoryString` attribute value. Identification of keywords in
 * the stored value and the exactness of match are both local
 * matters. This implementation uses `caseIgnoreMatch` against the
 * whole stored string.
 *
 * `assertion` and `value` are read independently. Each may be an
 * `ASN1Element`, a `DirectoryString` / `UnboundedDirectoryString`,
 * or a JavaScript `string`.
 */
export const keywordMatch: (
    assertion: DirectoryStringInput,
    value: DirectoryStringInput,
) => boolean = (
    assertion: DirectoryStringInput,
    value: DirectoryStringInput,
): boolean => caseIgnoreMatch(assertion, value);

export default keywordMatch;
