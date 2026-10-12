/* eslint-disable */
import {
    UTF8String
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary AFID
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * AFID  ::=  UTF8String
 * ```
 */
export
type AFID = UTF8String; // UTF8String
export const _decode_AFID: $.ASN1Decoder<AFID> = $._decodeUTF8String;
export const _encode_AFID: $.ASN1Encoder<AFID> = $._encodeUTF8String;


/* eslint-enable */
