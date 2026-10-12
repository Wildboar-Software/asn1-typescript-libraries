/* eslint-disable */
import {
    ASN1Element as _Element,
    BIT_STRING
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary TEIType
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * TEIType  ::=  BIT STRING (SIZE (60))
 * ```
 */
export
type TEIType = BIT_STRING;
export const _decode_TEIType: $.ASN1Decoder<TEIType> = $._decodeBitString;
export const _encode_TEIType: $.ASN1Encoder<TEIType> = $._encodeBitString;


/* eslint-enable */
