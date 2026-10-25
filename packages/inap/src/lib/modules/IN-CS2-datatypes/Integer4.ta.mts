/* eslint-disable */
import {
    type INTEGER,
    type ASN1Element as _Element,
    ASN1OverflowError,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary Integer4
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * Integer4  ::=  INTEGER(0..2147483647)
 * ```
 */
export
type Integer4 = INTEGER;

export
function _decode_Integer4 (el: _Element): Integer4 {
    const value = $._decodeInteger(el);
    if (value < 0 || value > 2147483647) {
        throw new ASN1OverflowError("Integer4 violates INTEGER constraint");
    }
    return value;
}

export
const _encode_Integer4: $.ASN1Encoder<Integer4> = $._encodeInteger;

/* eslint-enable */
