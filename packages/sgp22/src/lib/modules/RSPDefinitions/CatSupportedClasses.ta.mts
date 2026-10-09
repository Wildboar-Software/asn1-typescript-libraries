/* eslint-disable */
import {
    ASN1Element as _Element,
    BIT_STRING
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary CatSupportedClasses
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * CatSupportedClasses  ::=  BIT STRING
 * ```
 */
export
type CatSupportedClasses = BIT_STRING;
export const _decode_CatSupportedClasses = $._decodeBitString;
export const _encode_CatSupportedClasses = $._encodeBitString;


/* eslint-enable */
