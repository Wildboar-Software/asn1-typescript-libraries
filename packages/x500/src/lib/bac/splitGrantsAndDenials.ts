import { TRUE_BIT } from "asn1-ts";
import type {
    GrantsAndDenials,
} from "../modules/BasicAccessControl/GrantsAndDenials.ta.js";

/**
 * @summary Splits `GrantsAndDenials` into up to two `GrantsAndDenials` into
 *  those that grant and deny access separately.
 * @description
 *
 * Splits a single `GrantsAndDenials`, which may contain bits that grant access
 * and bits that deny access, into two separate `GrantsAndDenials`, one of which
 * has only the corresponding grant bits set and another that has only the
 * corresponding deny bits set. If the input `GrantsAndDenials` exclusively
 * grants or denies from the start, this function returns that input
 * `GrantsAndDenials` as the only element of a one-element array.
 *
 * ### Parameters
 *
 * @param {GrantsAndDenials} gad The `GrantsAndDenials` that is to be split into
 *  one or two `GrantsAndDenials`.
 * @returns {GrantsAndDenials[]} An array of `GrantsAndDenials`, separated into
 *  those that exclusively grant and those that exclusively deny.
 * @function
 */
export
function splitGrantsAndDenials (gad: GrantsAndDenials): [ GrantsAndDenials ] | [ GrantsAndDenials, GrantsAndDenials ] {
    const grants: GrantsAndDenials = new Uint8ClampedArray(24);
    const denials: GrantsAndDenials = new Uint8ClampedArray(24);
    let grantsEncountered: boolean = false;
    let denialsEncountered: boolean = false;
    const len: number = Math.min(gad.length, 24);
    for (let i = 0; i < len; i++) {
        if ((i % 2) && gad[i]) { // Odd bits are denials. If it is set...
            denials[i] = TRUE_BIT;
            denialsEncountered = true;
        } else if (gad[i]) { // Even bits are grants.
            grants[i] = TRUE_BIT;
            grantsEncountered = true;
        }
    }
    if (grantsEncountered && denialsEncountered) {
        return [ grants, denials ];
    } else {
        return [ gad ];
    }
}

export default splitGrantsAndDenials;
