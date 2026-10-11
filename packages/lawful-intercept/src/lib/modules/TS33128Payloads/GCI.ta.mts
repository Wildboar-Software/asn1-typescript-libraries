/* eslint-disable */
import {
    UTF8String
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";

/**
 * @summary GCI
 * @description
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
