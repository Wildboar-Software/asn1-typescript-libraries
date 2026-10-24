/* eslint-disable */
import {
    type UTF8String
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary GEOSatelliteID
 * @description
 * 
 * Encoded according to TS 29.571 [17] clause 5.4.2.
 *
 * 3GPP TS 33.128, clause 6.2.3.2.2.
 * https://www.3gpp.org/DynaReport/33128.htm
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * GEOSatelliteID  ::=  UTF8String
 * ```
 */
export
type GEOSatelliteID = UTF8String; // UTF8String
export const _decode_GEOSatelliteID: $.ASN1Decoder<GEOSatelliteID> = $._decodeUTF8String;
export const _encode_GEOSatelliteID: $.ASN1Encoder<GEOSatelliteID> = $._encodeUTF8String;


/* eslint-enable */
