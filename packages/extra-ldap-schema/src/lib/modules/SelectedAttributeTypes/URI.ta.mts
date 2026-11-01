/* eslint-disable */
import {
    type UTF8String
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary URI
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * URI  ::=  UTF8String
 * ```
 */
export
type URI = UTF8String; // UTF8String

export
const _decode_URI: $.ASN1Decoder<URI> = $._decodeUTF8String;

export
const _encode_URI: $.ASN1Encoder<URI> = $._encodeUTF8String;

/* eslint-enable */
