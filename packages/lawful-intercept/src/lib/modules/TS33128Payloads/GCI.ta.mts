/* eslint-disable */
import {
    UTF8String
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary GCI
 * @description
 * 
 * Global Cable Identifier uniquely identifying the line connecting the 5G-BRG
 * or FN-BRG to the 5GS. See TS 23.003 [19] clause 28.15.4. See TS 29.571 [17]
 * table 5.4.2-1 for encoding.
 *
 * 3GPP TS 33.128, clause 7.3.3.2.1.
 * https://www.3gpp.org/DynaReport/33128.htm
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * GCI  ::=  UTF8String
 * ```
 */
export
type GCI = UTF8String; // UTF8String
export const _decode_GCI: $.ASN1Decoder<GCI> = $._decodeUTF8String;
export const _encode_GCI: $.ASN1Encoder<GCI> = $._encodeUTF8String;


/* eslint-enable */
