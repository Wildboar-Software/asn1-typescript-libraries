/* eslint-disable */
import {
    ASN1Element as _Element,
    UTF8String
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary Reason
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * Reason  ::=  UTF8String
 * ```
 */
export
type Reason = UTF8String; // UTF8String
export const _decode_Reason: $.ASN1Decoder<Reason> = $._decodeUTF8String;
export const _encode_Reason: $.ASN1Encoder<Reason> = $._encodeUTF8String;


/* eslint-enable */
