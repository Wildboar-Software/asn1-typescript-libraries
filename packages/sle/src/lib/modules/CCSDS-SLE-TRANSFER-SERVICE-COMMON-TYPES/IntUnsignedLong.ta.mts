/* eslint-disable */
import {
    ASN1Element as _Element,
    INTEGER,
    ASN1OverflowError
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";




import { integerInRange } from "../../constraints.mjs";

/**
 * @summary IntUnsignedLong
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * IntUnsignedLong         ::=     INTEGER (0 .. 4294967295)
 * ```
 */
export
type IntUnsignedLong = INTEGER;
export function _decode_IntUnsignedLong (el: _Element): IntUnsignedLong {
    const _decoded = $._decodeInteger(el);
    if (!integerInRange(_decoded, 0, 4294967295)) {
        throw new ASN1OverflowError("IntUnsignedLong violates INTEGER (0..4294967295)");
    }
    return _decoded;
}
export const _encode_IntUnsignedLong: $.ASN1Encoder<IntUnsignedLong> = $._encodeInteger;


/* eslint-enable */
