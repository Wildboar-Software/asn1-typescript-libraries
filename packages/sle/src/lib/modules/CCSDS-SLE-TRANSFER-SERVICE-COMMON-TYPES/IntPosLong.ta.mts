/* eslint-disable */
import {
    ASN1Element as _Element,
    INTEGER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary IntPosLong
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * IntPosLong              ::=     INTEGER (1 .. 4294967295)
 * ```
 */
export
type IntPosLong = INTEGER;
export const _decode_IntPosLong: $.ASN1Decoder<IntPosLong> = $._decodeInteger;
export const _encode_IntPosLong: $.ASN1Encoder<IntPosLong> = $._encodeInteger;


/* eslint-enable */
