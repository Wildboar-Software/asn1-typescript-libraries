import type ACDFTupleExtended from "../types/ACDFTupleExtended.mjs";
import { GRANTS_AND_DENIALS_GRANT_MASK } from "./grantsAndDenialsMask.mjs";

// Local copy. See deniesAccess: the imported binding is a getter under Vitest.
const GRANT_MASK: number = GRANTS_AND_DENIALS_GRANT_MASK;

/**
 * @summary Determine whether an ACDF tuple involves granting access
 * @param tuple The ACDF tuple
 * @returns `true` if any grant bit is set
 * @function
 */
export
function grantsAccess (tuple: ACDFTupleExtended): boolean {
    return (tuple.grantsAndDenials & GRANT_MASK) !== 0;
}

export default grantsAccess;
