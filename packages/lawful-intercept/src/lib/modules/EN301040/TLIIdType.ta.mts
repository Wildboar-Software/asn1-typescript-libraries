/* eslint-disable */
import {
    ASN1Element as _Element,
    BIT_STRING
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary TLIIdType
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * TLIIdType  ::=  BIT STRING (SIZE (16))
 * ```
 */
export
type TLIIdType = BIT_STRING;
export const _decode_TLIIdType: $.ASN1Decoder<TLIIdType> = $._decodeBitString;
export const _encode_TLIIdType: $.ASN1Encoder<TLIIdType> = $._encodeBitString;


/* eslint-enable */
