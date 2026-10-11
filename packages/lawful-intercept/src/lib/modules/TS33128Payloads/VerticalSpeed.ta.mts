/* eslint-disable */
import {
    ASN1Element as _Element,
    UTF8String
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary VerticalSpeed
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * VerticalSpeed  ::=  UTF8String
 * ```
 */
export
type VerticalSpeed = UTF8String; // UTF8String

export const _decode_VerticalSpeed: $.ASN1Decoder<VerticalSpeed> = $._decodeUTF8String;

export const _encode_VerticalSpeed: $.ASN1Encoder<VerticalSpeed> = $._encodeUTF8String;


/* eslint-enable */
