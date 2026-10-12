/* eslint-disable */
import {
    ASN1Element as _Element,
    UTF8String
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary EncapsulatedMSRP
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * EncapsulatedMSRP  ::=  UTF8String
 * ```
 */
export
type EncapsulatedMSRP = UTF8String; // UTF8String
export const _decode_EncapsulatedMSRP: $.ASN1Decoder<EncapsulatedMSRP> = $._decodeUTF8String;
export const _encode_EncapsulatedMSRP: $.ASN1Encoder<EncapsulatedMSRP> = $._encodeUTF8String;


/* eslint-enable */
