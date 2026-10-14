/* eslint-disable */
import {
    ASN1Element as _Element,
    INTEGER,
    ASN1OverflowError
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";




import { integerInRange } from "../../constraints.mjs";

/**
 * @summary IntPosShort
 * @description
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
