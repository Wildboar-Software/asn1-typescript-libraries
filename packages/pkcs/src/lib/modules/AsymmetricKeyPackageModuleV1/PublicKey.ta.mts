/* eslint-disable */
import { ASN1Element as _Element, BIT_STRING } from "asn1-ts";
import * as $ from "@wildboar/asn1/functional";


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
