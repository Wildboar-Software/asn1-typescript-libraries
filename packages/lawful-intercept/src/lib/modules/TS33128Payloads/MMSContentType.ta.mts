/* eslint-disable */
import {
    UTF8String
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";

/**
 * @summary MMSContentType
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * MMSContentType  ::=  UTF8String
 * ```
 */
export
type MMSContentType = UTF8String; // UTF8String

export const _decode_MMSContentType: $.ASN1Decoder<MMSContentType> = $._decodeUTF8String;

export const _encode_MMSContentType: $.ASN1Encoder<MMSContentType> = $._encodeUTF8String;

/* eslint-enable */
