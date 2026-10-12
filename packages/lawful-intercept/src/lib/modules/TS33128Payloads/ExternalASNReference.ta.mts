/* eslint-disable */
import {
    ASN1Element as _Element,
    UTF8String
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary ExternalASNReference
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ExternalASNReference  ::=  UTF8String
 * ```
 */
export
type ExternalASNReference = UTF8String; // UTF8String
export const _decode_ExternalASNReference: $.ASN1Decoder<ExternalASNReference> = $._decodeUTF8String;
export const _encode_ExternalASNReference: $.ASN1Encoder<ExternalASNReference> = $._encodeUTF8String;


/* eslint-enable */
