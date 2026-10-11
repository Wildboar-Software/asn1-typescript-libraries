/* eslint-disable */
import {
    ASN1Element as _Element,
    UTF8String
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary SCEFID
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SCEFID  ::=  UTF8String
 * ```
 */
export
type SCEFID = UTF8String; // UTF8String

export const _decode_SCEFID: $.ASN1Decoder<SCEFID> = $._decodeUTF8String;

export const _encode_SCEFID: $.ASN1Encoder<SCEFID> = $._encodeUTF8String;


/* eslint-enable */
