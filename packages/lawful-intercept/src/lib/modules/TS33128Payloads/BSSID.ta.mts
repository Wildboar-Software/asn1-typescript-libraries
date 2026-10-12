/* eslint-disable */
import {
    ASN1Element as _Element,
    UTF8String
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary BSSID
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * BSSID  ::=  UTF8String
 * ```
 */
export
type BSSID = UTF8String; // UTF8String
export const _decode_BSSID: $.ASN1Decoder<BSSID> = $._decodeUTF8String;
export const _encode_BSSID: $.ASN1Encoder<BSSID> = $._encodeUTF8String;


/* eslint-enable */
