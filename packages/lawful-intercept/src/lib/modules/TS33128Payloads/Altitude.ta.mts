/* eslint-disable */
import {
    ASN1Element as _Element,
    UTF8String
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary Altitude
 * @description
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
