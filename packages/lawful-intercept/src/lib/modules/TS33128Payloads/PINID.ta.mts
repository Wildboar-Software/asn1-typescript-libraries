/* eslint-disable */
import {
    ASN1Element as _Element,
    UTF8String
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary PINID
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * PINID  ::=  UTF8String
 * ```
 */
export
type PINID = UTF8String; // UTF8String

export const _decode_PINID: $.ASN1Decoder<PINID> = $._decodeUTF8String;

export const _encode_PINID: $.ASN1Encoder<PINID> = $._encodeUTF8String;


/* eslint-enable */
