/* eslint-disable */
import {
    type INTEGER,
    ASN1Element as _Element,
    ASN1OverflowError
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary Day
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * Day         ::=  INTEGER ( 1 .. 31 )
 * ```
 */
export
type Day = INTEGER;

export const _decode_Day = (el: _Element): Day => {
    const value = $._decodeInteger(el);
    if (value < 1 || value > 31) {
        throw new ASN1OverflowError("Day violates INTEGER range");
    }
    return value;
};

export
const _encode_Day: $.ASN1Encoder<Day> = $._encodeInteger;

/* eslint-enable */
