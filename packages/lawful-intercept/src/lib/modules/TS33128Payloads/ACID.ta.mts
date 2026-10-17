/* eslint-disable */
import {
    UTF8String
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary ACID
 * @description
 * 
 * Identifier of the AC, if available.
 *
 * 3GPP TS 33.128, clause 7.14.2.6.
 * https://www.3gpp.org/DynaReport/33128.htm
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ACID  ::=  UTF8String
 * ```
 */
export
type ACID = UTF8String; // UTF8String
export const _decode_ACID: $.ASN1Decoder<ACID> = $._decodeUTF8String;
export const _encode_ACID: $.ASN1Encoder<ACID> = $._encodeUTF8String;


/* eslint-enable */
