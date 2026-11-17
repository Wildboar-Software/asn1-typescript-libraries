import { GRANTS_AND_DENIALS_DENIAL_MASK } from "./grantsAndDenialsMask.mjs";

// Local copy. A live import of this constant is a getter under Vitest's module
// runner, and that getter dominated this one-and function in the benchmark.
const DENIAL_MASK: number = GRANTS_AND_DENIALS_DENIAL_MASK;

/**
 * @summary Determine whether permission bits involve denying access
 * @param mask Packed `GrantsAndDenials` (odd bits deny). See `grantsAndDenialsToMask`.
 * @returns `true` if any denial bit is set.
 * @function
 */
export
function deniesAccess (mask: number): boolean {
    return (mask & DENIAL_MASK) !== 0;
}

export default deniesAccess;
