/* eslint-disable */
import {
    UTF8String
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";

/**
 * @summary GEOSatelliteID
 * @description
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
