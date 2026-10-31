/* eslint-disable */
import {
    type INTEGER,
    type ASN1Element as _Element,
    ASN1OverflowError,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary TTL
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * TTL          ::=  INTEGER (0..4294967295)
 * ```
 */
export
type TTL = INTEGER;

export function _decode_TTL (el: _Element): TTL {
    const value = $._decodeInteger(el);
    if (value < 0 || value > 4294967295) {
        throw new ASN1OverflowError("TTL violates INTEGER range");
    }
    return value;
}

export
const _encode_TTL: $.ASN1Encoder<TTL> = $._encodeInteger;

/* eslint-enable */
