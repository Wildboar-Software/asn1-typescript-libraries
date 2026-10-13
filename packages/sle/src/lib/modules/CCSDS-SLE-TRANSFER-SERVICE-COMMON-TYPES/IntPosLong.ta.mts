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
 * @summary IntPosLong
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * IntPosLong              ::=     INTEGER (1 .. 4294967295)
 * ```
 */
export
type IntPosLong = INTEGER;
export function _decode_IntPosLong (el: _Element): IntPosLong {
    const _decoded = $._decodeInteger(el);
    if (!integerInRange(_decoded, 1n, 4294967295n)) {
        throw new ASN1OverflowError("IntPosLong violates INTEGER (1..4294967295)");
    }
    return _decoded;
}
export const _encode_IntPosLong: $.ASN1Encoder<IntPosLong> = $._encodeInteger;


/* eslint-enable */
