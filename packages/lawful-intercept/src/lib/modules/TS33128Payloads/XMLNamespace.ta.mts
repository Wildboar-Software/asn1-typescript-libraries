/* eslint-disable */
import {
    ASN1Element as _Element,
    UTF8String
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary XMLNamespace
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * XMLNamespace  ::=  UTF8String
 * ```
 */
export
type XMLNamespace = UTF8String; // UTF8String

export const _decode_XMLNamespace: $.ASN1Decoder<XMLNamespace> = $._decodeUTF8String;

export const _encode_XMLNamespace: $.ASN1Encoder<XMLNamespace> = $._encodeUTF8String;


/* eslint-enable */
