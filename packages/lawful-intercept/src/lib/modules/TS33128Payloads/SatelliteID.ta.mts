/* eslint-disable */
import {
    UTF8String,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";

/**
 * @summary SatelliteID
 * @description
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
