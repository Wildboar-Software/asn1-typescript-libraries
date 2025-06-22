/* eslint-disable */
import { ASN1Element as _Element, BIT_STRING } from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";


/**
 * @summary Operations
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * Operations  ::=  BIT STRING {
 *     compute-checksum (0), -- H/W computation of checksum
 *     compute-signature (1), -- H/W computation of signature
 *     verify-checksum   (2), -- H/W verification of checksum
 *     verify-signature  (3), -- H/W verification of signature
 *     encipher   (4), -- H/W encryption of data
 *     decipher   (5), -- H/W decryption of data
 *     hash   (6), -- H/W hashing
 *     generate-key  (7)  -- H/W key generation
 * }
 * ```
 */
export type Operations = BIT_STRING;


/**
 * @summary Operations_compute_checksum
 * @constant
 */
export const Operations_compute_checksum: number = 0; /* LONG_NAMED_BIT */


/**
 * @summary compute_checksum
 * @constant
 */
export const compute_checksum: number = Operations_compute_checksum; /* SHORT_NAMED_BIT */


/**
 * @summary Operations_compute_signature
 * @constant
 */
export const Operations_compute_signature: number = 1; /* LONG_NAMED_BIT */


/**
 * @summary compute_signature
 * @constant
 */
export const compute_signature: number = Operations_compute_signature; /* SHORT_NAMED_BIT */


/**
 * @summary Operations_verify_checksum
 * @constant
 */
export const Operations_verify_checksum: number = 2; /* LONG_NAMED_BIT */


/**
 * @summary verify_checksum
 * @constant
 */
export const verify_checksum: number = Operations_verify_checksum; /* SHORT_NAMED_BIT */


/**
 * @summary Operations_verify_signature
 * @constant
 */
export const Operations_verify_signature: number = 3; /* LONG_NAMED_BIT */


/**
 * @summary verify_signature
 * @constant
 */
export const verify_signature: number = Operations_verify_signature; /* SHORT_NAMED_BIT */


/**
 * @summary Operations_encipher
 * @constant
 */
export const Operations_encipher: number = 4; /* LONG_NAMED_BIT */


/**
 * @summary encipher
 * @constant
 */
export const encipher: number = Operations_encipher; /* SHORT_NAMED_BIT */


/**
 * @summary Operations_decipher
 * @constant
 */
export const Operations_decipher: number = 5; /* LONG_NAMED_BIT */


/**
 * @summary decipher
 * @constant
 */
export const decipher: number = Operations_decipher; /* SHORT_NAMED_BIT */


/**
 * @summary Operations_hash
 * @constant
 */
export const Operations_hash: number = 6; /* LONG_NAMED_BIT */


/**
 * @summary hash
 * @constant
 */
export const hash: number = Operations_hash; /* SHORT_NAMED_BIT */


/**
 * @summary Operations_generate_key
 * @constant
 */
export const Operations_generate_key: number = 7; /* LONG_NAMED_BIT */


/**
 * @summary generate_key
 * @constant
 */
export const generate_key: number = Operations_generate_key; /* SHORT_NAMED_BIT */




export const _decode_Operations = $._decodeBitString;




export const _encode_Operations = $._encodeBitString;


/* eslint-enable */
