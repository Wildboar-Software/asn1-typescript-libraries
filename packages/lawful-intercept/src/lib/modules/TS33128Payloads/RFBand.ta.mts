/* eslint-disable */
import {
    UTF8String
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary RFBand
 * @description
 * 
 * RFBand of reported cell.
 *
 * 3GPP TS 33.128, clause 7.3.2.2.
 * https://www.3gpp.org/DynaReport/33128.htm
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * RFBand  ::=  UTF8String
 * ```
 */
export
type RFBand = UTF8String; // UTF8String
export const _decode_RFBand: $.ASN1Decoder<RFBand> = $._decodeUTF8String;
export const _encode_RFBand: $.ASN1Encoder<RFBand> = $._encodeUTF8String;


/* eslint-enable */
