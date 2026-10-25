/* eslint-disable */
import { ASN1Element as _Element, type ENUMERATED } from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";

export enum _enum_for_AVMP_error {
    noReason = 0,
    unknownAvlEntity = 1,
    unknownContentType = 2,
    unsupportedAVMPversion = 3,
    missingContent = 4,
    missingContentComponent = 5,
    invalidContentComponent = 6,
    sequenceError = 7,
    protocolError = 8,
    invalidAvlSignature = 9,
    duplicateAVL = 10,
    missingAvlComponent = 11,
    invalidAvlVersion = 12,
    notAllowedForConstrainedAVLEntity = 13,
    constrainedRequired = 14,
    nonConstrainedRequired = 15,
    unsupportedCriticalEntryExtension = 16,
    unsupportedCriticalExtension = 17,
    maxAVLsExceeded = 18,
    unknownCert = 19,
    unknownAVL = 20,
    unsupportedScopeRestriction = 21,
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
 *   unknownAvlEntity                   (1),
 *   unknownContentType                 (2),
 *   unsupportedAVMPversion             (3),
 *   missingContent                     (4),
 *   missingContentComponent            (5),
 *   invalidContentComponent            (6),
 *   sequenceError                      (7),
 *   protocolError                      (8),
 *   invalidAvlSignature                (9),
 *   duplicateAVL                       (10),
 *   missingAvlComponent                (11),
 *   invalidAvlVersion                  (12),
 *   notAllowedForConstrainedAVLEntity  (13),
 *   constrainedRequired                (14),
 *   nonConstrainedRequired             (15),
 *   unsupportedCriticalEntryExtension  (16),
 *   unsupportedCriticalExtension       (17),
 *   maxAVLsExceeded                    (18),
 *   unknownCert                        (19),
 *   unknownAVL                         (20),
 *   unsupportedScopeRestriction        (21),
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
export const AVMP_error_noReason = _enum_for_AVMP_error.noReason satisfies AVMP_error; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary noReason
 * @constant
 * @type {number}
 */
export const noReason = AVMP_error_noReason satisfies AVMP_error; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary AVMP_error_unknownAvlEntity
 * @constant
 * @type {number}
 */
export const AVMP_error_unknownAvlEntity = _enum_for_AVMP_error.unknownAvlEntity satisfies AVMP_error; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary unknownAvlEntity
 * @constant
 * @type {number}
 */
export const unknownAvlEntity = AVMP_error_unknownAvlEntity satisfies AVMP_error; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary AVMP_error_unknownContentType
 * @constant
 * @type {number}
 */
export const AVMP_error_unknownContentType = _enum_for_AVMP_error.unknownContentType satisfies AVMP_error; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary unknownContentType
 * @constant
 * @type {number}
 */
export const unknownContentType = AVMP_error_unknownContentType satisfies AVMP_error; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary AVMP_error_unsupportedAVMPversion
 * @constant
 * @type {number}
 */
export const AVMP_error_unsupportedAVMPversion = _enum_for_AVMP_error.unsupportedAVMPversion satisfies AVMP_error; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary unsupportedAVMPversion
 * @constant
 * @type {number}
 */
export const unsupportedAVMPversion = AVMP_error_unsupportedAVMPversion satisfies AVMP_error; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary AVMP_error_missingContent
 * @constant
 * @type {number}
 */
export const AVMP_error_missingContent = _enum_for_AVMP_error.missingContent satisfies AVMP_error; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary missingContent
 * @constant
 * @type {number}
 */
export const missingContent = AVMP_error_missingContent satisfies AVMP_error; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary AVMP_error_missingContentComponent
 * @constant
 * @type {number}
 */
export const AVMP_error_missingContentComponent = _enum_for_AVMP_error.missingContentComponent satisfies AVMP_error; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary missingContentComponent
 * @constant
 * @type {number}
 */
export const missingContentComponent = AVMP_error_missingContentComponent satisfies AVMP_error; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary AVMP_error_invalidContentComponent
 * @constant
 * @type {number}
 */
export const AVMP_error_invalidContentComponent = _enum_for_AVMP_error.invalidContentComponent satisfies AVMP_error; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary invalidContentComponent
 * @constant
 * @type {number}
 */
export const invalidContentComponent = AVMP_error_invalidContentComponent satisfies AVMP_error; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary AVMP_error_sequenceError
 * @constant
 * @type {number}
 */
export const AVMP_error_sequenceError = _enum_for_AVMP_error.sequenceError satisfies AVMP_error; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary sequenceError
 * @constant
 * @type {number}
 */
export const sequenceError = AVMP_error_sequenceError satisfies AVMP_error; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary AVMP_error_protocolError
 * @constant
 * @type {number}
 */
export const AVMP_error_protocolError = _enum_for_AVMP_error.protocolError satisfies AVMP_error; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary protocolError
 * @constant
 * @type {number}
 */
export const protocolError = AVMP_error_protocolError satisfies AVMP_error; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary AVMP_error_invalidAvlSignature
 * @constant
 * @type {number}
 */
export const AVMP_error_invalidAvlSignature = _enum_for_AVMP_error.invalidAvlSignature satisfies AVMP_error; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary invalidAvlSignature
 * @constant
 * @type {number}
 */
export const invalidAvlSignature = AVMP_error_invalidAvlSignature satisfies AVMP_error; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary AVMP_error_duplicateAVL
 * @constant
 * @type {number}
 */
export const AVMP_error_duplicateAVL = _enum_for_AVMP_error.duplicateAVL satisfies AVMP_error; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary duplicateAVL
 * @constant
 * @type {number}
 */
export const duplicateAVL = AVMP_error_duplicateAVL satisfies AVMP_error; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary AVMP_error_missingAvlComponent
 * @constant
 * @type {number}
 */
export const AVMP_error_missingAvlComponent = _enum_for_AVMP_error.missingAvlComponent satisfies AVMP_error; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary missingAvlComponent
 * @constant
 * @type {number}
 */
export const missingAvlComponent = AVMP_error_missingAvlComponent satisfies AVMP_error; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary AVMP_error_invalidAvlVersion
 * @constant
 * @type {number}
 */
export const AVMP_error_invalidAvlVersion = _enum_for_AVMP_error.invalidAvlVersion satisfies AVMP_error; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary invalidAvlVersion
 * @constant
 * @type {number}
 */
export const invalidAvlVersion = AVMP_error_invalidAvlVersion satisfies AVMP_error; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary AVMP_error_notAllowedForConstrainedAVLEntity
 * @constant
 * @type {number}
 */
export const AVMP_error_notAllowedForConstrainedAVLEntity = _enum_for_AVMP_error.notAllowedForConstrainedAVLEntity satisfies AVMP_error; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary notAllowedForConstrainedAVLEntity
 * @constant
 * @type {number}
 */
export const notAllowedForConstrainedAVLEntity = AVMP_error_notAllowedForConstrainedAVLEntity satisfies AVMP_error; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary AVMP_error_constrainedRequired
 * @constant
 * @type {number}
 */
export const AVMP_error_constrainedRequired = _enum_for_AVMP_error.constrainedRequired satisfies AVMP_error; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary constrainedRequired
 * @constant
 * @type {number}
 */
export const constrainedRequired = AVMP_error_constrainedRequired satisfies AVMP_error; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary AVMP_error_nonConstrainedRequired
 * @constant
 * @type {number}
 */
export const AVMP_error_nonConstrainedRequired = _enum_for_AVMP_error.nonConstrainedRequired satisfies AVMP_error; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary nonConstrainedRequired
 * @constant
 * @type {number}
 */
export const nonConstrainedRequired = AVMP_error_nonConstrainedRequired satisfies AVMP_error; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary AVMP_error_unsupportedCriticalEntryExtension
 * @constant
 * @type {number}
 */
export const AVMP_error_unsupportedCriticalEntryExtension = _enum_for_AVMP_error.unsupportedCriticalEntryExtension satisfies AVMP_error; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary unsupportedCriticalEntryExtension
 * @constant
 * @type {number}
 */
export const unsupportedCriticalEntryExtension = AVMP_error_unsupportedCriticalEntryExtension satisfies AVMP_error; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary AVMP_error_unsupportedCriticalExtension
 * @constant
 * @type {number}
 */
export const AVMP_error_unsupportedCriticalExtension = _enum_for_AVMP_error.unsupportedCriticalExtension satisfies AVMP_error; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary unsupportedCriticalExtension
 * @constant
 * @type {number}
 */
export const unsupportedCriticalExtension = AVMP_error_unsupportedCriticalExtension satisfies AVMP_error; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary AVMP_error_maxAVLsExceeded
 * @constant
 * @type {number}
 */
export const AVMP_error_maxAVLsExceeded = _enum_for_AVMP_error.maxAVLsExceeded satisfies AVMP_error; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary maxAVLsExceeded
 * @constant
 * @type {number}
 */
export const maxAVLsExceeded = AVMP_error_maxAVLsExceeded satisfies AVMP_error; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary AVMP_error_unknownCert
 * @constant
 * @type {number}
 */
export const AVMP_error_unknownCert = _enum_for_AVMP_error.unknownCert satisfies AVMP_error; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary unknownCert
 * @constant
 * @type {number}
 */
export const unknownCert = AVMP_error_unknownCert satisfies AVMP_error; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary AVMP_error_unknownAVL
 * @constant
 * @type {number}
 */
export const AVMP_error_unknownAVL = _enum_for_AVMP_error.unknownAVL satisfies AVMP_error; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary unknownAVL
 * @constant
 * @type {number}
 */
export const unknownAVL = AVMP_error_unknownAVL satisfies AVMP_error; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary AVMP_error_unsupportedScopeRestriction
 * @constant
 * @type {number}
 */
export const AVMP_error_unsupportedScopeRestriction = _enum_for_AVMP_error.unsupportedScopeRestriction satisfies AVMP_error; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary unsupportedScopeRestriction
 * @constant
 * @type {number}
 */
export const unsupportedScopeRestriction = AVMP_error_unsupportedScopeRestriction satisfies AVMP_error; /* SHORT_NAMED_ENUMERATED_VALUE */


export const _decode_AVMP_error = $._decodeEnumerated;


export const _encode_AVMP_error = $._encodeEnumerated;


/* eslint-enable */
