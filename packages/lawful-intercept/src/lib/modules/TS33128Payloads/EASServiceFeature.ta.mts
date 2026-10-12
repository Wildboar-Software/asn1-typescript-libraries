/* eslint-disable */
import {
    UTF8String
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary EASServiceFeature
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * EASServiceFeature  ::=  UTF8String
 * ```
 */
export
type EASServiceFeature = UTF8String; // UTF8String
export const _decode_EASServiceFeature: $.ASN1Decoder<EASServiceFeature> = $._decodeUTF8String;
export const _encode_EASServiceFeature: $.ASN1Encoder<EASServiceFeature> = $._encodeUTF8String;


/* eslint-enable */
