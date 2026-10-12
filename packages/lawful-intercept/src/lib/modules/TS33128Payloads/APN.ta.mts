/* eslint-disable */
import {
    UTF8String
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary APN
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * APN  ::=  UTF8String
 * ```
 */
export
type APN = UTF8String; // UTF8String
export const _decode_APN: $.ASN1Decoder<APN> = $._decodeUTF8String;
export const _encode_APN: $.ASN1Encoder<APN> = $._encodeUTF8String;


/* eslint-enable */
