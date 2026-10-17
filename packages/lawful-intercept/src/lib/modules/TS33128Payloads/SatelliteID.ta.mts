/* eslint-disable */
import {
    UTF8String
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary SatelliteID
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
 * SatelliteID  ::=  UTF8String
 * ```
 */
export
type SatelliteID = UTF8String; // UTF8String
export const _decode_SatelliteID: $.ASN1Decoder<SatelliteID> = $._decodeUTF8String;
export const _encode_SatelliteID: $.ASN1Encoder<SatelliteID> = $._encodeUTF8String;


/* eslint-enable */
