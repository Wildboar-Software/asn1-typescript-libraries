/* eslint-disable */
import {
    ASN1Element as _Element,
    UTF8String
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary NEFID
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * NEFID  ::=  UTF8String
 * ```
 */
export
type NEFID = UTF8String; // UTF8String

export const _decode_NEFID: $.ASN1Decoder<NEFID> = $._decodeUTF8String;

export const _encode_NEFID: $.ASN1Encoder<NEFID> = $._encodeUTF8String;


/* eslint-enable */
