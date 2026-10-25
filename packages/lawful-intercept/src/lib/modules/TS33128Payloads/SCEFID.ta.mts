/* eslint-disable */
import {
    type UTF8String
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary SCEFID
 * @description
 * 
 * SCEF identity handling the EPS Bearer.
 *
 * 3GPP TS 33.128, clause 7.8.2.1.2.
 * https://www.3gpp.org/DynaReport/33128.htm
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
