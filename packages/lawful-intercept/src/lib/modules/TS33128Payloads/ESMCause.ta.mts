/* eslint-disable */
import {
    ASN1Element as _Element,
    INTEGER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary ESMCause
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ESMCause  ::=  INTEGER (0..255)
 * ```
 */
export
type ESMCause = INTEGER;
export const _decode_ESMCause: $.ASN1Decoder<ESMCause> = $._decodeInteger;
export const _encode_ESMCause: $.ASN1Encoder<ESMCause> = $._encodeInteger;


/* eslint-enable */
