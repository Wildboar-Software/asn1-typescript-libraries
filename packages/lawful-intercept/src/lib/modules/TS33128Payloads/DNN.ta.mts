/* eslint-disable */
import {
    UTF8String
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary DNN
 * @description
 * 
 * Data Network Name associated with the target traffic, if available. Shall be
 * given in dotted-label presentation format as described in TS 23.003 [19]
 * clause 9.1.
 *
 * 3GPP TS 33.128, clause 7.7.2.1.5.
 * https://www.3gpp.org/DynaReport/33128.htm
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * DNN  ::=  UTF8String
 * ```
 */
export
type DNN = UTF8String; // UTF8String
export const _decode_DNN: $.ASN1Decoder<DNN> = $._decodeUTF8String;
export const _encode_DNN: $.ASN1Encoder<DNN> = $._encodeUTF8String;


/* eslint-enable */
