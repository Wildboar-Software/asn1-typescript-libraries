/* eslint-disable */
import {
    ASN1Element as _Element,
    UTF8String
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary OGCURN
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * OGCURN  ::=  UTF8String
 * ```
 */
export
type OGCURN = UTF8String; // UTF8String

export const _decode_OGCURN: $.ASN1Decoder<OGCURN> = $._decodeUTF8String;

export const _encode_OGCURN: $.ASN1Encoder<OGCURN> = $._encodeUTF8String;


/* eslint-enable */
