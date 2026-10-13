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
 * @summary VcOrMapId
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * VcOrMapId                ::=    INTEGER (0 .. 63)
 * ```
 */
export
type VcOrMapId = INTEGER;
export function _decode_VcOrMapId (el: _Element): VcOrMapId {
    const _decoded = $._decodeInteger(el);
    if (!integerInRange(_decoded, 0n, 63n)) {
        throw new ASN1OverflowError("VcOrMapId violates INTEGER (0..63)");
    }
    return _decoded;
}
export const _encode_VcOrMapId: $.ASN1Encoder<VcOrMapId> = $._encodeInteger;


/* eslint-enable */
