/* eslint-disable */
import {
    type ASN1Element as _Element,
    ASN1OverflowError,
    type INTEGER
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

export
function _decode_TimeZone (el: _Element): TimeZone {
    const value = $._decodeInteger(el);
    const below = typeof value === "bigint" ? value < -12n : value < -12;
    const above = typeof value === "bigint" ? value > 12n : value > 12;
    if (below || above) {
        throw new ASN1OverflowError("TimeZone violates INTEGER constraint");
    }
    return value;
}

export
const _encode_TimeZone: $.ASN1Encoder<TimeZone> = $._encodeInteger;

/* eslint-enable */
