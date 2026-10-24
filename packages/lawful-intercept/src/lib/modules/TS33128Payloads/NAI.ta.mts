/* eslint-disable */
import {
    type UTF8String
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary NAI
 * @description
 * 
 * A network access identifier as defined in TS 23.003 [19] clause 2.8.7.
 *
 * 3GPP TS 33.128, clause 8.3.3.
 * https://www.3gpp.org/DynaReport/33128.htm
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * NAI  ::=  UTF8String
 * ```
 */
export
type NAI = UTF8String; // UTF8String
export const _decode_NAI: $.ASN1Decoder<NAI> = $._decodeUTF8String;
export const _encode_NAI: $.ASN1Encoder<NAI> = $._encodeUTF8String;


/* eslint-enable */
