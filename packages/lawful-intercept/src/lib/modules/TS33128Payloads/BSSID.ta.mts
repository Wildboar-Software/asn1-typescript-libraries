/* eslint-disable */
import {
    type UTF8String
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary BSSID
 * @description
 * 
 * The BSSID of the access point being reported.
 *
 * 3GPP TS 33.128, clause 7.3.3.2.1.
 * https://www.3gpp.org/DynaReport/33128.htm
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
