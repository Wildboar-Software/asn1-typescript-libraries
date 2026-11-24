/* eslint-disable */
import {
    type UTF8String
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary Creator
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * Creator  ::=  UTF8String
 * ```
 */
export
type Creator = UTF8String; // UTF8String

export
const _decode_Creator: $.ASN1Decoder<Creator> = $._decodeUTF8String;

export
const _encode_Creator: $.ASN1Encoder<Creator> = $._encodeUTF8String;

/* eslint-enable */
