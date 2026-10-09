/* eslint-disable */
import {
    ASN1Element as _Element,
    BIT_STRING
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary ForwardedEncryptedData
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ForwardedEncryptedData  ::=  BIT STRING
 * ```
 */
export
type ForwardedEncryptedData = BIT_STRING;
export const _decode_ForwardedEncryptedData = $._decodeBitString;
export const _encode_ForwardedEncryptedData = $._encodeBitString;


/* eslint-enable */
