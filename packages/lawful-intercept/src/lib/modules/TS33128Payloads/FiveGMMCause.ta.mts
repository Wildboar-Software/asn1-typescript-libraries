/* eslint-disable */
import {
    ASN1Element as _Element,
    INTEGER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary FiveGMMCause
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * FiveGMMCause  ::=  INTEGER (0..255)
 * ```
 */
export
type FiveGMMCause = INTEGER;
export const _decode_FiveGMMCause: $.ASN1Decoder<FiveGMMCause> = $._decodeInteger;
export const _encode_FiveGMMCause: $.ASN1Encoder<FiveGMMCause> = $._encodeInteger;


/* eslint-enable */
