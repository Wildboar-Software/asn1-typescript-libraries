/* eslint-disable */
import {
    UTF8String
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";

/**
 * @summary MMSReadStatusText
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * MMSReadStatusText  ::=  UTF8String
 * ```
 */
export
type MMSReadStatusText = UTF8String; // UTF8String

export const _decode_MMSReadStatusText: $.ASN1Decoder<MMSReadStatusText> = $._decodeUTF8String;

export const _encode_MMSReadStatusText: $.ASN1Encoder<MMSReadStatusText> = $._encodeUTF8String;

/* eslint-enable */
