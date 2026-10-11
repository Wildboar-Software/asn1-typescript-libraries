/* eslint-disable */
import {
    ASN1Element as _Element,
    UTF8String
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary MCID
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * MCID  ::=  UTF8String
 * ```
 */
export
type MCID = UTF8String; // UTF8String

export const _decode_MCID: $.ASN1Decoder<MCID> = $._decodeUTF8String;

export const _encode_MCID: $.ASN1Encoder<MCID> = $._encodeUTF8String;


/* eslint-enable */
