/* eslint-disable */
import {
    type UTF8String
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary VerticalSpeed
 * @description
 * 
 * Contains the string representation of the vertical speed being reported,
 * expressed in kilometres per hour. See TS 29.572 [24] table 6.1.6.3.2-1.
 *
 * 3GPP TS 33.128, clause 7.3.3.2.1.
 * https://www.3gpp.org/DynaReport/33128.htm
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * VerticalSpeed  ::=  UTF8String
 * ```
 */
export
type VerticalSpeed = UTF8String; // UTF8String
export const _decode_VerticalSpeed: $.ASN1Decoder<VerticalSpeed> = $._decodeUTF8String;
export const _encode_VerticalSpeed: $.ASN1Encoder<VerticalSpeed> = $._encodeUTF8String;


/* eslint-enable */
