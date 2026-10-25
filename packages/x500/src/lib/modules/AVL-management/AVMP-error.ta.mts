/* eslint-disable */
import { ASN1Element as _Element, type ENUMERATED } from "@wildboar/asn1";
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
 * AVL-entity request errors and authorizer `AbortAVL` reasons. Alerts (possible adversary), e.g. invalid AVL signature, use `noReason` and omit wrapper `diag`. Keep spec typos `Extenssion`. `constrainedRequired` / `nonConstrainedRequired`: names + 13.7(f) (entity capabilities vs AVL `constrained`); 13.14 g/h wording looks swapped.
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
 * @description
 *
 * No other code applies; also used for **alerts** (invalid AVL signature) when aborting without wrapper `diag`.
 *
 * @constant
 * @type {number}
 */
export const AVMP_error_noReason = _enum_for_AVMP_error.noReason satisfies AVMP_error; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary noReason
 * @description
 *
 * No other code applies; also used for **alerts** (invalid AVL signature) when aborting without wrapper `diag`.
 *
 * @constant
 * @type {number}
 */
export const noReason = AVMP_error_noReason satisfies AVMP_error; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary AVMP_error_protocolError
 * @description
 *
 * Invalid CHOICE alternative (e.g. `idType` or `certIdentifier`).
 *
 * @constant
 * @type {number}
 */
export const AVMP_error_protocolError = _enum_for_AVMP_error.protocolError satisfies AVMP_error; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary protocolError
 * @description
 *
 * Invalid CHOICE alternative (e.g. `idType` or `certIdentifier`).
 *
 * @constant
 * @type {number}
 */
export const protocolError = AVMP_error_protocolError satisfies AVMP_error; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary AVMP_error_duplicateAVL
 * @description
 *
 * An AVL with the same serial already exists; also if **both** the new AVL and an existing one have **absent** `serialNumber`.
 *
 * @constant
 * @type {number}
 */
export const AVMP_error_duplicateAVL = _enum_for_AVMP_error.duplicateAVL satisfies AVMP_error; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary duplicateAVL
 * @description
 *
 * An AVL with the same serial already exists; also if **both** the new AVL and an existing one have **absent** `serialNumber`.
 *
 * @constant
 * @type {number}
 */
export const duplicateAVL = AVMP_error_duplicateAVL satisfies AVMP_error; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary AVMP_error_missingAvlComponent
 * @description
 *
 * A mandatory AVL component is missing.
 *
 * @constant
 * @type {number}
 */
export const AVMP_error_missingAvlComponent = _enum_for_AVMP_error.missingAvlComponent satisfies AVMP_error; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary missingAvlComponent
 * @description
 *
 * A mandatory AVL component is missing.
 *
 * @constant
 * @type {number}
 */
export const missingAvlComponent = AVMP_error_missingAvlComponent satisfies AVMP_error; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary AVMP_error_invalidAvlVersion
 * @description
 *
 * AVL version is not supported.
 *
 * @constant
 * @type {number}
 */
export const AVMP_error_invalidAvlVersion = _enum_for_AVMP_error.invalidAvlVersion satisfies AVMP_error; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary invalidAvlVersion
 * @description
 *
 * AVL version is not supported.
 *
 * @constant
 * @type {number}
 */
export const invalidAvlVersion = AVMP_error_invalidAvlVersion satisfies AVMP_error; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary AVMP_error_notAllowedForConstrainedAVLEntity
 * @description
 *
 * `entityGroup` was used while AVL `constrained` is TRUE.
 *
 * @constant
 * @type {number}
 */
export const AVMP_error_notAllowedForConstrainedAVLEntity = _enum_for_AVMP_error.notAllowedForConstrainedAVLEntity satisfies AVMP_error; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary notAllowedForConstrainedAVLEntity
 * @description
 *
 * `entityGroup` was used while AVL `constrained` is TRUE.
 *
 * @constant
 * @type {number}
 */
export const notAllowedForConstrainedAVLEntity = AVMP_error_notAllowedForConstrainedAVLEntity satisfies AVMP_error; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary AVMP_error_constrainedRequired
 * @description
 *
 * AVL `constrained` does not match entity capabilities; the entity requires a constrained AVL (13.7(f); 13.14 g/h wording looks swapped).
 *
 * @constant
 * @type {number}
 */
export const AVMP_error_constrainedRequired = _enum_for_AVMP_error.constrainedRequired satisfies AVMP_error; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary constrainedRequired
 * @description
 *
 * AVL `constrained` does not match entity capabilities; the entity requires a constrained AVL (13.7(f); 13.14 g/h wording looks swapped).
 *
 * @constant
 * @type {number}
 */
export const constrainedRequired = AVMP_error_constrainedRequired satisfies AVMP_error; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary AVMP_error_nonConstrainedRequired
 * @description
 *
 * AVL `constrained` does not match entity capabilities; the entity requires a non-constrained AVL (13.7(f); 13.14 g/h wording looks swapped).
 *
 * @constant
 * @type {number}
 */
export const AVMP_error_nonConstrainedRequired = _enum_for_AVMP_error.nonConstrainedRequired satisfies AVMP_error; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary nonConstrainedRequired
 * @description
 *
 * AVL `constrained` does not match entity capabilities; the entity requires a non-constrained AVL (13.7(f); 13.14 g/h wording looks swapped).
 *
 * @constant
 * @type {number}
 */
export const nonConstrainedRequired = AVMP_error_nonConstrainedRequired satisfies AVMP_error; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary AVMP_error_unsupportedCriticalEntryExtenssion
 * @description
 *
 * Unsupported critical **entry** extension. Spec spelling `Extenssion` (typo) — keep the TS name.
 *
 * @constant
 * @type {number}
 */
export const AVMP_error_unsupportedCriticalEntryExtenssion = _enum_for_AVMP_error.unsupportedCriticalEntryExtenssion satisfies AVMP_error; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary unsupportedCriticalEntryExtenssion
 * @description
 *
 * Unsupported critical **entry** extension. Spec spelling `Extenssion` (typo) — keep the TS name.
 *
 * @constant
 * @type {number}
 */
export const unsupportedCriticalEntryExtenssion = AVMP_error_unsupportedCriticalEntryExtenssion satisfies AVMP_error; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary AVMP_error_unsupportedCriticalExtenssion
 * @description
 *
 * Unsupported critical **AVL** extension. Spec spelling `Extenssion` (typo) — keep the TS name.
 *
 * @constant
 * @type {number}
 */
export const AVMP_error_unsupportedCriticalExtenssion = _enum_for_AVMP_error.unsupportedCriticalExtenssion satisfies AVMP_error; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary unsupportedCriticalExtenssion
 * @description
 *
 * Unsupported critical **AVL** extension. Spec spelling `Extenssion` (typo) — keep the TS name.
 *
 * @constant
 * @type {number}
 */
export const unsupportedCriticalExtenssion = AVMP_error_unsupportedCriticalExtenssion satisfies AVMP_error; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary AVMP_error_maxAVLsExceeded
 * @description
 *
 * Adding the AVL would exceed the local maximum; that limit may be **one**.
 *
 * @constant
 * @type {number}
 */
export const AVMP_error_maxAVLsExceeded = _enum_for_AVMP_error.maxAVLsExceeded satisfies AVMP_error; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary maxAVLsExceeded
 * @description
 *
 * Adding the AVL would exceed the local maximum; that limit may be **one**.
 *
 * @constant
 * @type {number}
 */
export const maxAVLsExceeded = AVMP_error_maxAVLsExceeded satisfies AVMP_error; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary AVMP_error_unknownAVL
 * @description
 *
 * Serial did not match any local AVL; if `old` / `avl-Id` is absent, there is not exactly one local AVL with no `serialNumber`.
 *
 * @constant
 * @type {number}
 */
export const AVMP_error_unknownAVL = _enum_for_AVMP_error.unknownAVL satisfies AVMP_error; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary unknownAVL
 * @description
 *
 * Serial did not match any local AVL; if `old` / `avl-Id` is absent, there is not exactly one local AVL with no `serialNumber`.
 *
 * @constant
 * @type {number}
 */
export const unknownAVL = AVMP_error_unknownAVL satisfies AVMP_error; /* SHORT_NAMED_ENUMERATED_VALUE */


export const _decode_AVMP_error = $._decodeEnumerated;


export const _encode_AVMP_error = $._encodeEnumerated;


/* eslint-enable */
