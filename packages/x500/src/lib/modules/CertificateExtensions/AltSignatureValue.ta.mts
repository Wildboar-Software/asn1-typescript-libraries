/* eslint-disable */
import { ASN1Element as _Element, BIT_STRING } from "asn1-ts";
import * as $ from "@wildboar/asn1/functional";

/**
 * @summary AltSignatureValue
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * AltSignatureValue  ::=  BIT STRING
 * ```
 */
export type AltSignatureValue = BIT_STRING;


export const _decode_AltSignatureValue = $._decodeBitString;


export const _encode_AltSignatureValue = $._encodeBitString;


/* eslint-enable */
