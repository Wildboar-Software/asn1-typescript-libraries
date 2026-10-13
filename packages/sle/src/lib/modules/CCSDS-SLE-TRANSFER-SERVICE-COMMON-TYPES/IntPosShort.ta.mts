/* eslint-disable */
import {
    ASN1Element as _Element,
    INTEGER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



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
export const _decode_IntPosShort: $.ASN1Decoder<IntPosShort> = $._decodeInteger;
export const _encode_IntPosShort: $.ASN1Encoder<IntPosShort> = $._encodeInteger;


/* eslint-enable */
