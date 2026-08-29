/* eslint-disable */
import { ASN1Element as _Element, INTEGER } from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";

/**
 * @summary Prime_p
 * @description
 *
 * Odd prime p > 3 defining Fp. Field elements are integers in
 * `[0, p-1]`. ANSI X9.62-1998 §6.1, §4.1.1, §5.1.1.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * Prime-p  ::=  INTEGER
 * ```
 */
export type Prime_p = INTEGER;


export const _decode_Prime_p = $._decodeInteger;


export const _encode_Prime_p = $._encodeInteger;


/* eslint-enable */
