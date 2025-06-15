/* eslint-disable */
import { ASN1Element as _Element, BIT_STRING } from "asn1-ts";
import * as $ from "asn1-ts/dist/functional.mjs";

/**
 * @summary Random_Integer
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * Random-Integer  ::=  BIT STRING
 * ```
 */
export type Random_Integer = BIT_STRING;


export const _decode_Random_Integer = $._decodeBitString;


export const _encode_Random_Integer = $._encodeBitString;


/* eslint-enable */
