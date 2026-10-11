/* eslint-disable */
import {
    ASN1Element as _Element,
    UTF8String
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary ACID
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ACID  ::=  UTF8String
 * ```
 */
export
type ACID = UTF8String; // UTF8String

export const _decode_ACID: $.ASN1Decoder<ACID> = $._decodeUTF8String;

export const _encode_ACID: $.ASN1Encoder<ACID> = $._encodeUTF8String;


/* eslint-enable */
