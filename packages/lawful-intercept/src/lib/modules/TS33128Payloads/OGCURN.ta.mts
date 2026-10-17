/* eslint-disable */
import {
    UTF8String
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary OGCURN
 * @description
 * 
 * Open Geospatial Consortium URN, reference datum used for a latitude and
 * longitude. The reference datum identity shall be specified as an Open
 * Geospatial Consortium URN, as defined in OGC 05-010 [35].
 *
 * 3GPP TS 33.128, clause 7.3.3.2.1.
 * https://www.3gpp.org/DynaReport/33128.htm
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * OGCURN  ::=  UTF8String
 * ```
 */
export
type OGCURN = UTF8String; // UTF8String
export const _decode_OGCURN: $.ASN1Decoder<OGCURN> = $._decodeUTF8String;
export const _encode_OGCURN: $.ASN1Encoder<OGCURN> = $._encodeUTF8String;


/* eslint-enable */
