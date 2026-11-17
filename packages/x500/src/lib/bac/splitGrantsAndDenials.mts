import {
    GRANTS_AND_DENIALS_DENIAL_MASK,
    GRANTS_AND_DENIALS_GRANT_MASK,
} from "./grantsAndDenialsMask.mjs";

// Local copies. See deniesAccess: imported constants are getters under Vitest,
// which hid the bitwise split in the benchmark.
const GRANT_MASK: number = GRANTS_AND_DENIALS_GRANT_MASK;
const DENIAL_MASK: number = GRANTS_AND_DENIALS_DENIAL_MASK;

/**
 * @summary Split a grants-and-denials mask into grant bits and denial bits.
 * @description
 *
 * Even bits grant and odd bits deny. A mask that already only grants or only
 * denies is returned as the sole element, the same number, so a pure tuple
 * does not have to be rebuilt. A mixed mask becomes `[grants, denials]`.
 *
 * The argument is the packed form stored on `ACDFTuple`, not the
 * `GrantsAndDenials` BIT STRING. Pack a BIT STRING with
 * `grantsAndDenialsToMask` first.
 *
 * @param mask Packed `GrantsAndDenials`. See `grantsAndDenialsToMask`.
 * @returns One mask when the input is pure, or grant bits then denial bits.
 * @function
 */
export
function splitGrantsAndDenials (mask: number): [ number ] | [ number, number ] {
    const grants = mask & GRANT_MASK;
    const denials = mask & DENIAL_MASK;
    if ((grants === 0) || (denials === 0)) {
        return [ mask ];
    }
    return [ grants, denials ];
}

export default splitGrantsAndDenials;
