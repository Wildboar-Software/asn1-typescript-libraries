/* eslint-disable */
import {
    UTF8String
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary SBIValue
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SBIValue  ::=  UTF8String
 * ```
 */
export
type SBIValue = UTF8String; // UTF8String
export const _decode_SBIValue: $.ASN1Decoder<SBIValue> = $._decodeUTF8String;
export const _encode_SBIValue: $.ASN1Encoder<SBIValue> = $._encodeUTF8String;


/* eslint-enable */
