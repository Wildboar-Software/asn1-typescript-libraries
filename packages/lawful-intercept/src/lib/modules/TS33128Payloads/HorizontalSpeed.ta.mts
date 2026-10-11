/* eslint-disable */
import {
    UTF8String
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";

/**
 * @summary HorizontalSpeed
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * HorizontalSpeed  ::=  UTF8String
 * ```
 */
export
type HorizontalSpeed = UTF8String; // UTF8String

export const _decode_HorizontalSpeed: $.ASN1Decoder<HorizontalSpeed> = $._decodeUTF8String;

export const _encode_HorizontalSpeed: $.ASN1Encoder<HorizontalSpeed> = $._encodeUTF8String;

/* eslint-enable */
