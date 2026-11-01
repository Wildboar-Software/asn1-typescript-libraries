/* eslint-disable */
import {
    type ASN1Element as _Element,
    ASN1OverflowError,
    type INTEGER
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

export
function _decode_TTL (el: _Element): TTL {
    const value = $._decodeInteger(el);
    const below = typeof value === "bigint" ? value < 0n : value < 0;
    const above = typeof value === "bigint" ? value > 4294967295n : value > 4294967295;
    if (below || above) {
        throw new ASN1OverflowError("TTL violates INTEGER constraint");
    }
    return value;
}

export
const _encode_TTL: $.ASN1Encoder<TTL> = $._encodeInteger;

/* eslint-enable */
