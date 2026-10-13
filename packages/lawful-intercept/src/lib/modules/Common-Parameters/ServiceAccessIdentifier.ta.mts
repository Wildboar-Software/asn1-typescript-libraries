/* eslint-disable */
import {
    UTF8String
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary ServiceAccessIdentifier
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ServiceAccessIdentifier  ::=  UTF8String
 * ```
 */
export
type ServiceAccessIdentifier = UTF8String; // UTF8String
export const _decode_ServiceAccessIdentifier: $.ASN1Decoder<ServiceAccessIdentifier> = $._decodeUTF8String;
export const _encode_ServiceAccessIdentifier: $.ASN1Encoder<ServiceAccessIdentifier> = $._encodeUTF8String;


/* eslint-enable */
