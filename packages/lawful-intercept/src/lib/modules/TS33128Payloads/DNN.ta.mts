/* eslint-disable */
import {
    ASN1Element as _Element,
    UTF8String
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary DNN
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * DNN  ::=  UTF8String
 * ```
 */
export
type DNN = UTF8String; // UTF8String
export const _decode_DNN: $.ASN1Decoder<DNN> = $._decodeUTF8String;
export const _encode_DNN: $.ASN1Encoder<DNN> = $._encodeUTF8String;


/* eslint-enable */
