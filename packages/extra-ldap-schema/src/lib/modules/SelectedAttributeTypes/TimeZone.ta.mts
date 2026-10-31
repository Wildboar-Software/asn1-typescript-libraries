/* eslint-disable */
import {
    type INTEGER,
    type ASN1Element as _Element,
    ASN1OverflowError,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary TimeZone
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * TimeZone  ::=  INTEGER(-12..12)
 * ```
 */
export
type TimeZone = INTEGER;

export function _decode_TimeZone (el: _Element): TimeZone {
    const value = $._decodeInteger(el);
    if (value < -12 || value > 12) {
        throw new ASN1OverflowError("TimeZone violates INTEGER range");
    }
    return value;
}

export
const _encode_TimeZone: $.ASN1Encoder<TimeZone> = $._encodeInteger;

/* eslint-enable */
