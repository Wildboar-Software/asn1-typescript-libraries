/* eslint-disable */
import {
    ASN1Element as _Element,
    UTF8String
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary NID
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * NID  ::=  UTF8String (SIZE(11))
 * ```
 */
export
type NID = UTF8String; // UTF8String
export const _decode_NID: $.ASN1Decoder<NID> = $._decodeUTF8String;
export const _encode_NID: $.ASN1Encoder<NID> = $._encodeUTF8String;


/* eslint-enable */
