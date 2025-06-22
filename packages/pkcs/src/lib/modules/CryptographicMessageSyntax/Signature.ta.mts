/* eslint-disable */
import { ASN1Element as _Element, BIT_STRING } from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";


/**
 * @summary Signature
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * Signature  ::=  BIT STRING
 * ```
 */
export type Signature = BIT_STRING;




export const _decode_Signature = $._decodeBitString;




export const _encode_Signature = $._encodeBitString;


/* eslint-enable */
