/* eslint-disable */
import {
    type ASN1Element as _Element,
    type INTEGER,
    ASN1OverflowError
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";




import { integerInRange } from "../../constraints.mjs";

/**
 * @summary IntPosLong
 * @description
 * 
 * Positive integer from 1 through 4294967295, that is 1 through (2^32)-1.
 * 
 * CCSDS 911.1-B-5, annex A2.1.
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
    if (!integerInRange(_decoded, 1, 4294967295)) {
        throw new ASN1OverflowError("IntPosLong violates INTEGER (1..4294967295)");
    }
    return _decoded;
}
export const _encode_IntPosLong: $.ASN1Encoder<IntPosLong> = $._encodeInteger;


/* eslint-enable */
