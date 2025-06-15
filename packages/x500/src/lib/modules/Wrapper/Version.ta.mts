/* eslint-disable */
import { ASN1Element as _Element, BIT_STRING } from "asn1-ts";
import * as $ from "asn1-ts/dist/functional.mjs";

/**
 * @summary Version
 * @description
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
 * @constant
 */
export const Version_v1: number = 0; /* LONG_NAMED_BIT */

/**
 * @summary v1
 * @constant
 */
export const v1: number = Version_v1; /* SHORT_NAMED_BIT */


export const _decode_Version = $._decodeBitString;


export const _encode_Version = $._encodeBitString;


/* eslint-enable */
