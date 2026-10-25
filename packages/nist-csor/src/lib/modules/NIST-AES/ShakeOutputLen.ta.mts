/* eslint-disable */
import { type INTEGER } from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary ShakeOutputLen
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ShakeOutputLen  ::=  INTEGER
 * ```
 */
export
type ShakeOutputLen = INTEGER;

export const _decode_ShakeOutputLen: $.ASN1Decoder<INTEGER> = $._decodeInteger;
export const _encode_ShakeOutputLen: $.ASN1Encoder<INTEGER> = $._encodeInteger;


/* eslint-enable */
