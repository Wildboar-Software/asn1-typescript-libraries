/* eslint-disable */
import { ASN1Element as _Element, BIT_STRING } from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";

/**
 * @summary Version
 * @description
 *
 * BIT STRING `{ v1 (0) }`. Client may set **multiple** bits; server shall
 * set **exactly one** among those offered (highest should be chosen).
 * DEFAULT `{v1}` means bit 0 set if omitted. Current version is v1.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * Version  ::=  BIT STRING {
 *   v1 (0)  -- version 1
 *   }
 * ```
 */
export type Version = BIT_STRING;

/**
 * @summary Version_v1
 * @description Bit 0. Wrapper version 1 (the only version defined at publication).
 * @constant
 */
export const Version_v1: number = 0; /* LONG_NAMED_BIT */

/**
 * @summary v1
 * @description Bit 0. Wrapper version 1 (the only version defined at publication).
 * @constant
 */
export const v1: number = Version_v1; /* SHORT_NAMED_BIT */


export const _decode_Version = $._decodeBitString;


export const _encode_Version = $._encodeBitString;


/* eslint-enable */
