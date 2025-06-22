/* eslint-disable */
import { ASN1Element as _Element, ENUMERATED } from "asn1-ts";
import * as $ from "@wildboar/asn1/functional";

export enum _enum_for_AVMP_error {
    noReason = 0,
    protocolError = 1,
    duplicateAVL = 2,
    missingAvlComponent = 3,
    invalidAvlVersion = 4,
    notAllowedForConstrainedAVLEntity = 5,
    constrainedRequired = 6,
    nonConstrainedRequired = 7,
    unsupportedCriticalEntryExtenssion = 8,
    unsupportedCriticalExtenssion = 9,
    maxAVLsExceeded = 10,
    unknownAVL = 11,
}

/**
 * @summary AVMP_error
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * AVMP-error  ::=  ENUMERATED {
 *   noReason                           (0),
 *   protocolError                      (1),
 *   duplicateAVL                       (2),
 *   missingAvlComponent                (3),
 *   invalidAvlVersion                  (4),
 *   notAllowedForConstrainedAVLEntity  (5),
 *   constrainedRequired                (6),
 *   nonConstrainedRequired             (7),
 *   unsupportedCriticalEntryExtenssion (8),
 *   unsupportedCriticalExtenssion      (9),
 *   maxAVLsExceeded                    (10),
 *   unknownAVL                         (11),
 *   ... }
 * ```
 *
 * @enum {number}
 */
export type AVMP_error = _enum_for_AVMP_error | ENUMERATED;

/**
 * @summary AVMP_error_noReason
 * @constant
 * @type {number}
 */
export const AVMP_error_noReason: AVMP_error = 0; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary noReason
 * @constant
 * @type {number}
 */
export const noReason: AVMP_error = AVMP_error_noReason; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary AVMP_error_protocolError
 * @constant
 * @type {number}
 */
export const AVMP_error_protocolError: AVMP_error = 1; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary protocolError
 * @constant
 * @type {number}
 */
export const protocolError: AVMP_error = AVMP_error_protocolError; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary AVMP_error_duplicateAVL
 * @constant
 * @type {number}
 */
export const AVMP_error_duplicateAVL: AVMP_error = 2; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary duplicateAVL
 * @constant
 * @type {number}
 */
export const duplicateAVL: AVMP_error = AVMP_error_duplicateAVL; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary AVMP_error_missingAvlComponent
 * @constant
 * @type {number}
 */
export const AVMP_error_missingAvlComponent: AVMP_error = 3; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary missingAvlComponent
 * @constant
 * @type {number}
 */
export const missingAvlComponent: AVMP_error = AVMP_error_missingAvlComponent; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary AVMP_error_invalidAvlVersion
 * @constant
 * @type {number}
 */
export const AVMP_error_invalidAvlVersion: AVMP_error = 4; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary invalidAvlVersion
 * @constant
 * @type {number}
 */
export const invalidAvlVersion: AVMP_error = AVMP_error_invalidAvlVersion; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary AVMP_error_notAllowedForConstrainedAVLEntity
 * @constant
 * @type {number}
 */
export const AVMP_error_notAllowedForConstrainedAVLEntity: AVMP_error = 5; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary notAllowedForConstrainedAVLEntity
 * @constant
 * @type {number}
 */
export const notAllowedForConstrainedAVLEntity: AVMP_error = AVMP_error_notAllowedForConstrainedAVLEntity; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary AVMP_error_constrainedRequired
 * @constant
 * @type {number}
 */
export const AVMP_error_constrainedRequired: AVMP_error = 6; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary constrainedRequired
 * @constant
 * @type {number}
 */
export const constrainedRequired: AVMP_error = AVMP_error_constrainedRequired; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary AVMP_error_nonConstrainedRequired
 * @constant
 * @type {number}
 */
export const AVMP_error_nonConstrainedRequired: AVMP_error = 7; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary nonConstrainedRequired
 * @constant
 * @type {number}
 */
export const nonConstrainedRequired: AVMP_error = AVMP_error_nonConstrainedRequired; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary AVMP_error_unsupportedCriticalEntryExtenssion
 * @constant
 * @type {number}
 */
export const AVMP_error_unsupportedCriticalEntryExtenssion: AVMP_error = 8; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary unsupportedCriticalEntryExtenssion
 * @constant
 * @type {number}
 */
export const unsupportedCriticalEntryExtenssion: AVMP_error = AVMP_error_unsupportedCriticalEntryExtenssion; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary AVMP_error_unsupportedCriticalExtenssion
 * @constant
 * @type {number}
 */
export const AVMP_error_unsupportedCriticalExtenssion: AVMP_error = 9; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary unsupportedCriticalExtenssion
 * @constant
 * @type {number}
 */
export const unsupportedCriticalExtenssion: AVMP_error = AVMP_error_unsupportedCriticalExtenssion; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary AVMP_error_maxAVLsExceeded
 * @constant
 * @type {number}
 */
export const AVMP_error_maxAVLsExceeded: AVMP_error = 10; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary maxAVLsExceeded
 * @constant
 * @type {number}
 */
export const maxAVLsExceeded: AVMP_error = AVMP_error_maxAVLsExceeded; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary AVMP_error_unknownAVL
 * @constant
 * @type {number}
 */
export const AVMP_error_unknownAVL: AVMP_error = 11; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary unknownAVL
 * @constant
 * @type {number}
 */
export const unknownAVL: AVMP_error = AVMP_error_unknownAVL; /* SHORT_NAMED_ENUMERATED_VALUE */


export const _decode_AVMP_error = $._decodeEnumerated;


export const _encode_AVMP_error = $._encodeEnumerated;


/* eslint-enable */
