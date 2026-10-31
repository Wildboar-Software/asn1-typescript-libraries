/* eslint-disable */
import {
    type INTEGER,
    type ASN1Element as _Element,
    ASN1OverflowError,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary BaseDistance
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * BaseDistance  ::=  INTEGER(0..MAX)
 * ```
 */
export
type BaseDistance = INTEGER;

export function _decode_BaseDistance (el: _Element): BaseDistance {
    const value = $._decodeInteger(el);
    if (value < 0) {
        throw new ASN1OverflowError("BaseDistance violates INTEGER range");
    }
    return value;
}

export
const _encode_BaseDistance: $.ASN1Encoder<BaseDistance> = $._encodeInteger;

/* eslint-enable */
