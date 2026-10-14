/* eslint-disable */
import {
    ASN1Element as _Element,
    INTEGER,
    ASN1OverflowError
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";




import { integerInRange } from "../../constraints.mjs";

/**
 * @summary TimeoutPeriod
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * TimeoutPeriod                    ::=  INTEGER (1 .. 600)
 * ```
 */
export
type TimeoutPeriod = INTEGER;
export function _decode_TimeoutPeriod (el: _Element): TimeoutPeriod {
    const _decoded = $._decodeInteger(el);
    if (!integerInRange(_decoded, 1, 600)) {
        throw new ASN1OverflowError("TimeoutPeriod violates INTEGER (1..600)");
    }
    return _decoded;
}
export const _encode_TimeoutPeriod: $.ASN1Encoder<TimeoutPeriod> = $._encodeInteger;


/* eslint-enable */
