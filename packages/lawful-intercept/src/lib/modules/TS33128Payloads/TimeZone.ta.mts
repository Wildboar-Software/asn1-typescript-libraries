/* eslint-disable */
import {
    ASN1Element as _Element,
    UTF8String
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary TimeZone
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * TimeZone  ::=  UTF8String
 * ```
 */
export
type TimeZone = UTF8String; // UTF8String

export const _decode_TimeZone: $.ASN1Decoder<TimeZone> = $._decodeUTF8String;

export const _encode_TimeZone: $.ASN1Encoder<TimeZone> = $._encodeUTF8String;


/* eslint-enable */
