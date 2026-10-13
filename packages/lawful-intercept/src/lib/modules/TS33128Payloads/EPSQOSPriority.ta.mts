/* eslint-disable */
import {
    ASN1Element as _Element,
    INTEGER,
    ASN1OverflowError
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary EPSQOSPriority
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * EPSQOSPriority  ::=  INTEGER (1..15)
 * ```
 */
export
type EPSQOSPriority = INTEGER;
export const _decode_EPSQOSPriority: $.ASN1Decoder<EPSQOSPriority> = (el: _Element): EPSQOSPriority => {
    const value = $._decodeInteger(el);
    const _n = typeof value === "bigint" ? value : BigInt(value);
    if (_n < 1n || _n > 15n) {
        throw new ASN1OverflowError("EPSQOSPriority violates INTEGER range");
    }
    return value;
};
export const _encode_EPSQOSPriority: $.ASN1Encoder<EPSQOSPriority> = $._encodeInteger;


/* eslint-enable */
