/* eslint-disable */
import { ASN1Element as _Element, INTEGER } from "asn1-ts";
import * as $ from "asn1-ts/dist/functional.mjs";

/**
 * @summary Precedence
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * Precedence  ::=  INTEGER(0..255,...)
 * ```
 */
export type Precedence = INTEGER;


export const _decode_Precedence = $._decodeInteger;


export const _encode_Precedence = $._encodeInteger;


/* eslint-enable */
