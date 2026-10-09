/* eslint-disable */
import {
    ASN1Element as _Element,
    BIT_STRING
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary UniqueIdentifier
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * UniqueIdentifier   ::=   BIT STRING
 * ```
 */
export
type UniqueIdentifier = BIT_STRING;
export const _decode_UniqueIdentifier = $._decodeBitString;
export const _encode_UniqueIdentifier = $._encodeBitString;


/* eslint-enable */
