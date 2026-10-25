/* eslint-disable */
import {
    type ASN1Element as _Element,
    type INTEGER,
    ASN1OverflowError
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";




import { integerInRange } from "../../constraints.mjs";

/**
 * @summary IntPosShort
 * @description
 * 
 * Positive integer from 1 through 65535, that is 1 through (2^16)-1. Version
 * numbers use this range.
 * 
 * CCSDS 911.1-B-5, annex A2.1.
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * IntPosShort             ::=     INTEGER (1 .. 65535)
 * ```
 */
export
type IntPosShort = INTEGER;
export function _decode_IntPosShort (el: _Element): IntPosShort {
    const _decoded = $._decodeInteger(el);
    if (!integerInRange(_decoded, 1, 65535)) {
        throw new ASN1OverflowError("IntPosShort violates INTEGER (1..65535)");
    }
    return _decoded;
}
export const _encode_IntPosShort: $.ASN1Encoder<IntPosShort> = $._encodeInteger;


/* eslint-enable */
