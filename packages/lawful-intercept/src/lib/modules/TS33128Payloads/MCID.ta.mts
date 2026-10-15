/* eslint-disable */
import {
    UTF8String
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary MCID
 * @description
 * 
 * MC ID of the target user.
 *
 * 3GPP TS 33.128, clause 7.20.2.4.2.
 * https://www.3gpp.org/DynaReport/33128.htm
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
