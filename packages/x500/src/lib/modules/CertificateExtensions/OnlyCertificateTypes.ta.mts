/* eslint-disable */
import { ASN1Element as _Element, BIT_STRING } from "asn1-ts";
import * as $ from "asn1-ts/dist/functional.mjs";

/**
 * @summary OnlyCertificateTypes
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * OnlyCertificateTypes  ::=  BIT STRING {
 *   user      (0),
 *   authority (1),
 *   attribute (2)}
 * ```
 */
export type OnlyCertificateTypes = BIT_STRING;

/**
 * @summary OnlyCertificateTypes_user
 * @constant
 */
export const OnlyCertificateTypes_user: number = 0; /* LONG_NAMED_BIT */

/**
 * @summary user
 * @constant
 */
export const user: number = OnlyCertificateTypes_user; /* SHORT_NAMED_BIT */

/**
 * @summary OnlyCertificateTypes_authority
 * @constant
 */
export const OnlyCertificateTypes_authority: number = 1; /* LONG_NAMED_BIT */

/**
 * @summary authority
 * @constant
 */
export const authority: number = OnlyCertificateTypes_authority; /* SHORT_NAMED_BIT */

/**
 * @summary OnlyCertificateTypes_attribute
 * @constant
 */
export const OnlyCertificateTypes_attribute: number = 2; /* LONG_NAMED_BIT */

/**
 * @summary attribute
 * @constant
 */
export const attribute: number = OnlyCertificateTypes_attribute; /* SHORT_NAMED_BIT */


export const _decode_OnlyCertificateTypes = $._decodeBitString;


export const _encode_OnlyCertificateTypes = $._encodeBitString;


/* eslint-enable */
