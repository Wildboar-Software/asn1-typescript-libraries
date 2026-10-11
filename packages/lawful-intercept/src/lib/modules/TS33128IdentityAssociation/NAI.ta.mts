/* eslint-disable */
import {
    ASN1Element as _Element,
    UTF8String
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary NAI
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * NAI  ::=  UTF8String
 * ```
 */
export
type NAI = UTF8String; // UTF8String

export const _decode_NAI: $.ASN1Decoder<NAI> = $._decodeUTF8String;

export const _encode_NAI: $.ASN1Encoder<NAI> = $._encodeUTF8String;


/* eslint-enable */
