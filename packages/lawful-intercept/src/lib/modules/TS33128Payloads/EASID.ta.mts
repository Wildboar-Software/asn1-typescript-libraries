/* eslint-disable */
import {
    UTF8String
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary EASID
 * @description
 * 
 * Identifier of the EAS, if available.
 *
 * 3GPP TS 33.128, clause 7.14.2.6.
 * https://www.3gpp.org/DynaReport/33128.htm
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * EASID  ::=  UTF8String
 * ```
 */
export
type EASID = UTF8String; // UTF8String
export const _decode_EASID: $.ASN1Decoder<EASID> = $._decodeUTF8String;
export const _encode_EASID: $.ASN1Encoder<EASID> = $._encodeUTF8String;


/* eslint-enable */
