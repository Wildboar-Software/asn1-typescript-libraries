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
