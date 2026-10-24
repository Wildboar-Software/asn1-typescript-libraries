/* eslint-disable */
import {
    type UTF8String
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary PINID
 * @description
 * 
 * Identifies the PIN, if available.
 *
 * 3GPP TS 33.128, clause 7.18.2.2.
 * https://www.3gpp.org/DynaReport/33128.htm
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * PINID  ::=  UTF8String
 * ```
 */
export
type PINID = UTF8String; // UTF8String
export const _decode_PINID: $.ASN1Decoder<PINID> = $._decodeUTF8String;
export const _encode_PINID: $.ASN1Encoder<PINID> = $._encodeUTF8String;


/* eslint-enable */
