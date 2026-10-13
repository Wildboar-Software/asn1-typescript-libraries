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
 * @summary BlockingTimeoutPeriod
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * BlockingTimeoutPeriod       ::=    INTEGER (100 .. 100000)
 * ```
 */
export
type BlockingTimeoutPeriod = INTEGER;
export function _decode_BlockingTimeoutPeriod (el: _Element): BlockingTimeoutPeriod {
    const _decoded = $._decodeInteger(el);
    if (!integerInRange(_decoded, 100n, 100000n)) {
        throw new ASN1OverflowError("BlockingTimeoutPeriod violates INTEGER (100..100000)");
    }
    return _decoded;
}
export const _encode_BlockingTimeoutPeriod: $.ASN1Encoder<BlockingTimeoutPeriod> = $._encodeInteger;


/* eslint-enable */
