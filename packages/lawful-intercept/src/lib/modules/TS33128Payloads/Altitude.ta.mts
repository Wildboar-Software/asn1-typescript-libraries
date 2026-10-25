/* eslint-disable */
import {
    type UTF8String
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary Altitude
 * @description
 * 
 * Contains a string representation of the altitude reported in meters.
 *
 * 3GPP TS 33.128, clause 7.3.3.2.1.
 * https://www.3gpp.org/DynaReport/33128.htm
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * Altitude  ::=  UTF8String
 * ```
 */
export
type Altitude = UTF8String; // UTF8String
export const _decode_Altitude: $.ASN1Decoder<Altitude> = $._decodeUTF8String;
export const _encode_Altitude: $.ASN1Encoder<Altitude> = $._encodeUTF8String;


/* eslint-enable */
