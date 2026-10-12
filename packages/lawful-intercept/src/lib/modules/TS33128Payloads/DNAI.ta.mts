/* eslint-disable */
import {
    ASN1Element as _Element,
    UTF8String
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary DNAI
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * DNAI  ::=  UTF8String
 * ```
 */
export
type DNAI = UTF8String; // UTF8String
export const _decode_DNAI: $.ASN1Decoder<DNAI> = $._decodeUTF8String;
export const _encode_DNAI: $.ASN1Encoder<DNAI> = $._encodeUTF8String;


/* eslint-enable */
