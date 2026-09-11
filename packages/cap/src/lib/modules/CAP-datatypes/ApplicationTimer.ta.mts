import {
    INTEGER,
    ASN1Element as _Element,
    ASN1OverflowError,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";


/**
 * @summary ApplicationTimer
 * @description
 *
 * Timer set by the gsmSCF in the gsmSSF, in seconds (0..2047). Used as the
 * No_Answer timer in `DpSpecificCriteria`; shall be shorter than the network
 * No_Answer timer. (3GPP TS 29.078 V19.0.0 clauses 5.1 and 11.27).
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ApplicationTimer ::=INTEGER (0..2047)
 * ```
 *
 */
export type ApplicationTimer = INTEGER;
export const _decode_ApplicationTimer = (el: _Element): ApplicationTimer => {
    const value = $._decodeInteger(el);
    if (typeof value === "bigint" ? (value < 0n || value > 2047n) : (value < 0 || value > 2047)) {
        throw new ASN1OverflowError("ApplicationTimer violates INTEGER constraint");
    }
    return value;
};
export const _encode_ApplicationTimer = $._encodeInteger;
