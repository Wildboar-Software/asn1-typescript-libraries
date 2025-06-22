/* eslint-disable */
import { ASN1Element as _Element, BIT_STRING } from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";

/**
 * @summary KeyUsage
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * KeyUsage  ::=  BIT STRING {
 *   digitalSignature  (0),
 *   contentCommitment (1),
 *   keyEncipherment   (2),
 *   dataEncipherment  (3),
 *   keyAgreement      (4),
 *   keyCertSign       (5),
 *   cRLSign           (6),
 *   encipherOnly      (7),
 *   decipherOnly      (8) }
 * ```
 */
export type KeyUsage = BIT_STRING;

/**
 * @summary KeyUsage_digitalSignature
 * @constant
 */
export const KeyUsage_digitalSignature: number = 0; /* LONG_NAMED_BIT */

/**
 * @summary digitalSignature
 * @constant
 */
export const digitalSignature: number = KeyUsage_digitalSignature; /* SHORT_NAMED_BIT */

/**
 * @summary KeyUsage_contentCommitment
 * @constant
 */
export const KeyUsage_contentCommitment: number = 1; /* LONG_NAMED_BIT */

/**
 * @summary contentCommitment
 * @constant
 */
export const contentCommitment: number = KeyUsage_contentCommitment; /* SHORT_NAMED_BIT */

/**
 * @summary KeyUsage_keyEncipherment
 * @constant
 */
export const KeyUsage_keyEncipherment: number = 2; /* LONG_NAMED_BIT */

/**
 * @summary keyEncipherment
 * @constant
 */
export const keyEncipherment: number = KeyUsage_keyEncipherment; /* SHORT_NAMED_BIT */

/**
 * @summary KeyUsage_dataEncipherment
 * @constant
 */
export const KeyUsage_dataEncipherment: number = 3; /* LONG_NAMED_BIT */

/**
 * @summary dataEncipherment
 * @constant
 */
export const dataEncipherment: number = KeyUsage_dataEncipherment; /* SHORT_NAMED_BIT */

/**
 * @summary KeyUsage_keyAgreement
 * @constant
 */
export const KeyUsage_keyAgreement: number = 4; /* LONG_NAMED_BIT */

/**
 * @summary keyAgreement
 * @constant
 */
export const keyAgreement: number = KeyUsage_keyAgreement; /* SHORT_NAMED_BIT */

/**
 * @summary KeyUsage_keyCertSign
 * @constant
 */
export const KeyUsage_keyCertSign: number = 5; /* LONG_NAMED_BIT */

/**
 * @summary keyCertSign
 * @constant
 */
export const keyCertSign: number = KeyUsage_keyCertSign; /* SHORT_NAMED_BIT */

/**
 * @summary KeyUsage_cRLSign
 * @constant
 */
export const KeyUsage_cRLSign: number = 6; /* LONG_NAMED_BIT */

/**
 * @summary cRLSign
 * @constant
 */
export const cRLSign: number = KeyUsage_cRLSign; /* SHORT_NAMED_BIT */

/**
 * @summary KeyUsage_encipherOnly
 * @constant
 */
export const KeyUsage_encipherOnly: number = 7; /* LONG_NAMED_BIT */

/**
 * @summary encipherOnly
 * @constant
 */
export const encipherOnly: number = KeyUsage_encipherOnly; /* SHORT_NAMED_BIT */

/**
 * @summary KeyUsage_decipherOnly
 * @constant
 */
export const KeyUsage_decipherOnly: number = 8; /* LONG_NAMED_BIT */

/**
 * @summary decipherOnly
 * @constant
 */
export const decipherOnly: number = KeyUsage_decipherOnly; /* SHORT_NAMED_BIT */


export const _decode_KeyUsage = $._decodeBitString;


export const _encode_KeyUsage = $._encodeBitString;


/* eslint-enable */
