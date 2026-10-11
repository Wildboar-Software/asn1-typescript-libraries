/* eslint-disable */
import {
    ASN1Element as _Element,
    UTF8String
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary SIPAccessInfo
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SIPAccessInfo  ::=  UTF8String
 * ```
 */
export
type SIPAccessInfo = UTF8String; // UTF8String

export const _decode_SIPAccessInfo: $.ASN1Decoder<SIPAccessInfo> = $._decodeUTF8String;

export const _encode_SIPAccessInfo: $.ASN1Encoder<SIPAccessInfo> = $._encodeUTF8String;


/* eslint-enable */
