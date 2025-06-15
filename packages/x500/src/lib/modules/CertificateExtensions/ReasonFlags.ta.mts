/* eslint-disable */
import { ASN1Element as _Element, BIT_STRING } from "asn1-ts";
import * as $ from "asn1-ts/dist/functional.mjs";

/**
 * @summary ReasonFlags
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ReasonFlags  ::=  BIT STRING {
 *   unused                (0),
 *   keyCompromise         (1),
 *   cACompromise          (2),
 *   affiliationChanged    (3),
 *   superseded            (4),
 *   cessationOfOperation  (5),
 *   certificateHold       (6),
 *   privilegeWithdrawn    (7),
 *   aACompromise          (8),
 *   weakAlgorithmOrKey    (9) }
 * ```
 */
export type ReasonFlags = BIT_STRING;

/**
 * @summary ReasonFlags_unused
 * @constant
 */
export const ReasonFlags_unused: number = 0; /* LONG_NAMED_BIT */

/**
 * @summary unused
 * @constant
 */
export const unused: number = ReasonFlags_unused; /* SHORT_NAMED_BIT */

/**
 * @summary ReasonFlags_keyCompromise
 * @constant
 */
export const ReasonFlags_keyCompromise: number = 1; /* LONG_NAMED_BIT */

/**
 * @summary keyCompromise
 * @constant
 */
export const keyCompromise: number = ReasonFlags_keyCompromise; /* SHORT_NAMED_BIT */

/**
 * @summary ReasonFlags_cACompromise
 * @constant
 */
export const ReasonFlags_cACompromise: number = 2; /* LONG_NAMED_BIT */

/**
 * @summary cACompromise
 * @constant
 */
export const cACompromise: number = ReasonFlags_cACompromise; /* SHORT_NAMED_BIT */

/**
 * @summary ReasonFlags_affiliationChanged
 * @constant
 */
export const ReasonFlags_affiliationChanged: number = 3; /* LONG_NAMED_BIT */

/**
 * @summary affiliationChanged
 * @constant
 */
export const affiliationChanged: number = ReasonFlags_affiliationChanged; /* SHORT_NAMED_BIT */

/**
 * @summary ReasonFlags_superseded
 * @constant
 */
export const ReasonFlags_superseded: number = 4; /* LONG_NAMED_BIT */

/**
 * @summary superseded
 * @constant
 */
export const superseded: number = ReasonFlags_superseded; /* SHORT_NAMED_BIT */

/**
 * @summary ReasonFlags_cessationOfOperation
 * @constant
 */
export const ReasonFlags_cessationOfOperation: number = 5; /* LONG_NAMED_BIT */

/**
 * @summary cessationOfOperation
 * @constant
 */
export const cessationOfOperation: number = ReasonFlags_cessationOfOperation; /* SHORT_NAMED_BIT */

/**
 * @summary ReasonFlags_certificateHold
 * @constant
 */
export const ReasonFlags_certificateHold: number = 6; /* LONG_NAMED_BIT */

/**
 * @summary certificateHold
 * @constant
 */
export const certificateHold: number = ReasonFlags_certificateHold; /* SHORT_NAMED_BIT */

/**
 * @summary ReasonFlags_privilegeWithdrawn
 * @constant
 */
export const ReasonFlags_privilegeWithdrawn: number = 7; /* LONG_NAMED_BIT */

/**
 * @summary privilegeWithdrawn
 * @constant
 */
export const privilegeWithdrawn: number = ReasonFlags_privilegeWithdrawn; /* SHORT_NAMED_BIT */

/**
 * @summary ReasonFlags_aACompromise
 * @constant
 */
export const ReasonFlags_aACompromise: number = 8; /* LONG_NAMED_BIT */

/**
 * @summary aACompromise
 * @constant
 */
export const aACompromise: number = ReasonFlags_aACompromise; /* SHORT_NAMED_BIT */

/**
 * @summary ReasonFlags_weakAlgorithmOrKey
 * @constant
 */
export const ReasonFlags_weakAlgorithmOrKey: number = 9; /* LONG_NAMED_BIT */

/**
 * @summary weakAlgorithmOrKey
 * @constant
 */
export const weakAlgorithmOrKey: number = ReasonFlags_weakAlgorithmOrKey; /* SHORT_NAMED_BIT */


export const _decode_ReasonFlags = $._decodeBitString;


export const _encode_ReasonFlags = $._encodeBitString;


/* eslint-enable */
