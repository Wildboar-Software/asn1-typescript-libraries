/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1OverflowError,
    INTEGER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary ReservationIndicator
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ReservationIndicator  ::=  INTEGER((-128..127))
 * ```
 */
export
type ReservationIndicator = INTEGER;

export function _decode_ReservationIndicator (el: _Element): ReservationIndicator {
    const value = $._decodeInteger(el);
    const n = typeof value === "bigint" ? value : BigInt(value);
    if (n < -128n || n > 127n) {
        throw new ASN1OverflowError("ReservationIndicator violates INTEGER (-128..127)");
    }
    return value;
}

export const _encode_ReservationIndicator: $.ASN1Encoder<ReservationIndicator> = $._encodeInteger;


/* eslint-enable */
