/* eslint-disable */
import {
    ASN1Element as _Element,
    UTF8String
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary XMLValue
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * XMLValue  ::=  UTF8String
 * ```
 */
export
type XMLValue = UTF8String; // UTF8String
export const _decode_XMLValue: $.ASN1Decoder<XMLValue> = $._decodeUTF8String;
export const _encode_XMLValue: $.ASN1Encoder<XMLValue> = $._encodeUTF8String;


/* eslint-enable */
