/* eslint-disable */
import { ASN1Element as _Element, BIT_STRING } from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";

/**
 * @summary Versions
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * Versions  ::=  BIT STRING {v1(0), v2(1)}
 * ```
 */
export type Versions = BIT_STRING;

/**
 * @summary Versions_v1
 * @constant
 */
export const Versions_v1: number = 0; /* LONG_NAMED_BIT */

/**
 * @summary v1
 * @constant
 */
export const v1: number = Versions_v1; /* SHORT_NAMED_BIT */

/**
 * @summary Versions_v2
 * @constant
 */
export const Versions_v2: number = 1; /* LONG_NAMED_BIT */

/**
 * @summary v2
 * @constant
 */
export const v2: number = Versions_v2; /* SHORT_NAMED_BIT */


export const _decode_Versions = $._decodeBitString;


export const _encode_Versions = $._encodeBitString;


/* eslint-enable */
