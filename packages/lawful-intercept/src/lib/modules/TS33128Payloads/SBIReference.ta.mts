/* eslint-disable */
import {
    ASN1Element as _Element,
    UTF8String
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary SBIReference
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SBIReference  ::=  UTF8String
 * ```
 */
export
type SBIReference = UTF8String; // UTF8String
export const _decode_SBIReference: $.ASN1Decoder<SBIReference> = $._decodeUTF8String;
export const _encode_SBIReference: $.ASN1Encoder<SBIReference> = $._encodeUTF8String;


/* eslint-enable */
