import keywordMatch from "./caseIgnoreMatch.mjs";

/**
 * Rec. ITU-T X.520 (10/2019), clause 8.5.2 `keywordMatch`.
 *
 * TRUE if the presented string matches any keyword in a
 * `DirectoryString` attribute value. Identification of keywords in
 * the stored value and the exactness of match are both local
 * matters. This implementation uses `caseIgnoreMatch` against the
 * whole stored string.
 */
export { caseIgnoreMatch as keywordMatch } from "./caseIgnoreMatch.mjs";

export default keywordMatch;
