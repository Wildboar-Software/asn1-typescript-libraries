/* eslint-disable */
import { ASN1Element as _Element, INTEGER } from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";

/**
 * @summary Trinomial
 * @description
 *
 * Integer `k` for the irreducible trinomial `x^m + x^k + 1` over
 * F2 (`1 ≤ k ≤ m-1`). Prefer the smallest such k (Annex C Table
 * C-2). ANSI X9.62-1998 §6.1 note 4, §4.1.2.1.
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
