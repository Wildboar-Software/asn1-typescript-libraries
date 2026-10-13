/* eslint-disable */
import {
    ASN1Element as _Element,
    INTEGER,
    ASN1OverflowError
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



function integerInRange (value: number | bigint, min: bigint, max: bigint): boolean {
    const n = typeof value === "bigint" ? value : BigInt(value);
    return n >= min && n <= max;
}

/**
 * @summary BufferSize
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * BufferSize            ::=    INTEGER (7 .. 66560)
 * ```
 */
export
type BufferSize = INTEGER;
export function _decode_BufferSize (el: _Element): BufferSize {
    const _decoded = $._decodeInteger(el);
    if (!integerInRange(_decoded, 7n, 66560n)) {
        throw new ASN1OverflowError("BufferSize violates INTEGER (7..66560)");
    }
    return _decoded;
}
export const _encode_BufferSize: $.ASN1Encoder<BufferSize> = $._encodeInteger;


/* eslint-enable */
