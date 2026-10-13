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
 * @summary IntUnsignedShort
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * IntUnsignedShort        ::=     INTEGER (0 .. 65535)
 * ```
 */
export
type IntUnsignedShort = INTEGER;
export function _decode_IntUnsignedShort (el: _Element): IntUnsignedShort {
    const _decoded = $._decodeInteger(el);
    if (!integerInRange(_decoded, 0n, 65535n)) {
        throw new ASN1OverflowError("IntUnsignedShort violates INTEGER (0..65535)");
    }
    return _decoded;
}
export const _encode_IntUnsignedShort: $.ASN1Encoder<IntUnsignedShort> = $._encodeInteger;


/* eslint-enable */
