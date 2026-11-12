import { TRUE_BIT } from "@wildboar/asn1";
import type {
    GrantsAndDenials,
} from "../modules/BasicAccessControl/GrantsAndDenials.ta.mjs";

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
    const len: number = gad.length;
    let grantsEncountered: boolean = false;
    let denialsEncountered: boolean = false;
    // Even bits are grants and odd bits are denials. A pure value is the
    // common case, so do not allocate the two result strings until both kinds
    // of bit have actually been seen.
    for (let i = 0; i < len; i += 2) {
        if (gad[i]) {
            grantsEncountered = true;
        }
        const denialIndex = i + 1;
        if ((denialIndex < len) && gad[denialIndex]) {
            denialsEncountered = true;
        }
        if (grantsEncountered && denialsEncountered) {
            break;
        }
    }
    if (!grantsEncountered || !denialsEncountered) {
        return [ gad ];
    }
    const grants: GrantsAndDenials = new Uint8ClampedArray(len);
    const denials: GrantsAndDenials = new Uint8ClampedArray(len);
    for (let i = 0; i < len; i += 2) {
        if (gad[i]) {
            grants[i] = TRUE_BIT;
        }
        const denialIndex = i + 1;
        if ((denialIndex < len) && gad[denialIndex]) {
            denials[denialIndex] = TRUE_BIT;
        }
    }
    return [ grants, denials ];
}

export default splitGrantsAndDenials;
