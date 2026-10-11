/* eslint-disable */
import {
    ASN1Element as _Element,
    UTF8String
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary SSID
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SSID  ::=  UTF8String
 * ```
 */
export
type SSID = UTF8String; // UTF8String

export const _decode_SSID: $.ASN1Decoder<SSID> = $._decodeUTF8String;

export const _encode_SSID: $.ASN1Encoder<SSID> = $._encodeUTF8String;


/* eslint-enable */
