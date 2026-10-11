/* eslint-disable */
import {
    UTF8String
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";

/**
 * @summary MMStatusText
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * MMStatusText  ::=  UTF8String
 * ```
 */
export
type MMStatusText = UTF8String; // UTF8String

export const _decode_MMStatusText: $.ASN1Decoder<MMStatusText> = $._decodeUTF8String;

export const _encode_MMStatusText: $.ASN1Encoder<MMStatusText> = $._encodeUTF8String;

/* eslint-enable */
