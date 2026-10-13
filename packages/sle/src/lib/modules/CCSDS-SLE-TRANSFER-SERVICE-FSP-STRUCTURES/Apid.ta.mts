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
 * @summary Apid
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * Apid                     ::=    INTEGER (0 .. 2047)
 * ```
 */
export
type Apid = INTEGER;
export function _decode_Apid (el: _Element): Apid {
    const _decoded = $._decodeInteger(el);
    if (!integerInRange(_decoded, 0n, 2047n)) {
        throw new ASN1OverflowError("Apid violates INTEGER (0..2047)");
    }
    return _decoded;
}
export const _encode_Apid: $.ASN1Encoder<Apid> = $._encodeInteger;


/* eslint-enable */
