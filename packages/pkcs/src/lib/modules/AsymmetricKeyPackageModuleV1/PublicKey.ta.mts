/* eslint-disable */
import { ASN1Element as _Element, BIT_STRING } from "asn1-ts";
import * as $ from "asn1-ts/dist/functional.mjs";


/**
 * @summary PublicKey
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * PublicKey  ::=  BIT STRING
 * ```
 */
export type PublicKey = BIT_STRING;




export const _decode_PublicKey = $._decodeBitString;




export const _encode_PublicKey = $._encodeBitString;


/* eslint-enable */
