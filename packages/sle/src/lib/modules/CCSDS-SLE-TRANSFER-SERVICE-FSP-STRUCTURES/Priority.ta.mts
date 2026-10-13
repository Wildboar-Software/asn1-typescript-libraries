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
 * @summary Priority
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * Priority                 ::=  INTEGER (1 .. 64)
 * ```
 */
export
type Priority = INTEGER;
export function _decode_Priority (el: _Element): Priority {
    const _decoded = $._decodeInteger(el);
    if (!integerInRange(_decoded, 1n, 64n)) {
        throw new ASN1OverflowError("Priority violates INTEGER (1..64)");
    }
    return _decoded;
}
export const _encode_Priority: $.ASN1Encoder<Priority> = $._encodeInteger;


/* eslint-enable */
