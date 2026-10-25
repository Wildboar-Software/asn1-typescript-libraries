/* eslint-disable */
import {
    type UTF8String
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary TimeZone
 * @description
 * 
 * String containing the contents defined in TS 29.571 [17] table 5.2.2-1.
 *
 * 3GPP TS 33.128, clause 8.2.
 * https://www.3gpp.org/DynaReport/33128.htm
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
