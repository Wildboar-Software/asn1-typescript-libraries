/* eslint-disable */
import { ASN1Element as _Element, INTEGER } from "asn1-ts";
import * as $ from "asn1-ts/dist/functional.mjs";

/**
 * @summary Trinomial
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * Trinomial  ::=  INTEGER
 * ```
 */
export type Trinomial = INTEGER;


export const _decode_Trinomial = $._decodeInteger;


export const _encode_Trinomial = $._encodeInteger;


/* eslint-enable */
