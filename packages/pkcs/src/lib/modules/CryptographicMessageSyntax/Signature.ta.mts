/* eslint-disable */
import { ASN1Element as _Element, BIT_STRING } from "asn1-ts";
import * as $ from "asn1-ts/dist/functional.mjs";


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
