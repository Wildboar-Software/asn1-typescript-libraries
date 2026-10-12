/* eslint-disable */
import {
    ASN1Element as _Element,
    BIT_STRING
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary SSIType
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SSIType  ::=  BIT STRING (SIZE (24))
 * ```
 */
export
type SSIType = BIT_STRING;
export const _decode_SSIType: $.ASN1Decoder<SSIType> = $._decodeBitString;
export const _encode_SSIType: $.ASN1Encoder<SSIType> = $._encodeBitString;


/* eslint-enable */
