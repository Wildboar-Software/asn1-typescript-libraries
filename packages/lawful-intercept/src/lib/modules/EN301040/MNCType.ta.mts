/* eslint-disable */
import {
    ASN1Element as _Element,
    BIT_STRING
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary MNCType
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * MNCType  ::=  BIT STRING (SIZE (14))
 * ```
 */
export
type MNCType = BIT_STRING;
export const _decode_MNCType: $.ASN1Decoder<MNCType> = $._decodeBitString;
export const _encode_MNCType: $.ASN1Encoder<MNCType> = $._encodeBitString;


/* eslint-enable */
