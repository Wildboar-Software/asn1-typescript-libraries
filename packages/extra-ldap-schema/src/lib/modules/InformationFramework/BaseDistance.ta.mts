/* eslint-disable */
import {
    type ASN1Element as _Element,
    ASN1OverflowError,
    type INTEGER
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

export
function _decode_BaseDistance (el: _Element): BaseDistance {
    const value = $._decodeInteger(el);
    if (typeof value === "bigint" ? value < 0n : value < 0) {
        throw new ASN1OverflowError("BaseDistance violates INTEGER constraint");
    }
    return value;
}

export
const _encode_BaseDistance: $.ASN1Encoder<BaseDistance> = $._encodeInteger;

/* eslint-enable */
