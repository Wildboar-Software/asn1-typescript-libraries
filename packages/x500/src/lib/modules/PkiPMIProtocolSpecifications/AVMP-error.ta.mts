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
export const AVMP_error_noReason: _enum_for_AVMP_error.noReason = _enum_for_AVMP_error.noReason; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary noReason
 * @constant
 * @type {number}
 */
export const noReason: _enum_for_AVMP_error.noReason = AVMP_error_noReason; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary AVMP_error_unknownAvlEntity
 * @constant
 * @type {number}
 */
export const AVMP_error_unknownAvlEntity: _enum_for_AVMP_error.unknownAvlEntity = _enum_for_AVMP_error.unknownAvlEntity; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary unknownAvlEntity
 * @constant
 * @type {number}
 */
export const unknownAvlEntity: _enum_for_AVMP_error.unknownAvlEntity = AVMP_error_unknownAvlEntity; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary AVMP_error_unknownContentType
 * @constant
 * @type {number}
 */
export const AVMP_error_unknownContentType: _enum_for_AVMP_error.unknownContentType = _enum_for_AVMP_error.unknownContentType; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary unknownContentType
 * @constant
 * @type {number}
 */
export const unknownContentType: _enum_for_AVMP_error.unknownContentType = AVMP_error_unknownContentType; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary AVMP_error_unsupportedAVMPversion
 * @constant
 * @type {number}
 */
export const AVMP_error_unsupportedAVMPversion: _enum_for_AVMP_error.unsupportedAVMPversion = _enum_for_AVMP_error.unsupportedAVMPversion; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary unsupportedAVMPversion
 * @constant
 * @type {number}
 */
export const unsupportedAVMPversion: _enum_for_AVMP_error.unsupportedAVMPversion = AVMP_error_unsupportedAVMPversion; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary AVMP_error_missingContent
 * @constant
 * @type {number}
 */
export const AVMP_error_missingContent: _enum_for_AVMP_error.missingContent = _enum_for_AVMP_error.missingContent; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary missingContent
 * @constant
 * @type {number}
 */
export const missingContent: _enum_for_AVMP_error.missingContent = AVMP_error_missingContent; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary AVMP_error_missingContentComponent
 * @constant
 * @type {number}
 */
export const AVMP_error_missingContentComponent: _enum_for_AVMP_error.missingContentComponent = _enum_for_AVMP_error.missingContentComponent; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary missingContentComponent
 * @constant
 * @type {number}
 */
export const missingContentComponent: _enum_for_AVMP_error.missingContentComponent = AVMP_error_missingContentComponent; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary AVMP_error_invalidContentComponent
 * @constant
 * @type {number}
 */
export const AVMP_error_invalidContentComponent: _enum_for_AVMP_error.invalidContentComponent = _enum_for_AVMP_error.invalidContentComponent; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary invalidContentComponent
 * @constant
 * @type {number}
 */
export const invalidContentComponent: _enum_for_AVMP_error.invalidContentComponent = AVMP_error_invalidContentComponent; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary AVMP_error_sequenceError
 * @constant
 * @type {number}
 */
export const AVMP_error_sequenceError: _enum_for_AVMP_error.sequenceError = _enum_for_AVMP_error.sequenceError; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary sequenceError
 * @constant
 * @type {number}
 */
export const sequenceError: _enum_for_AVMP_error.sequenceError = AVMP_error_sequenceError; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary AVMP_error_protocolError
 * @constant
 * @type {number}
 */
export const AVMP_error_protocolError: _enum_for_AVMP_error.protocolError = _enum_for_AVMP_error.protocolError; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary protocolError
 * @constant
 * @type {number}
 */
export const protocolError: _enum_for_AVMP_error.protocolError = AVMP_error_protocolError; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary AVMP_error_invalidAvlSignature
 * @constant
 * @type {number}
 */
export const AVMP_error_invalidAvlSignature: _enum_for_AVMP_error.invalidAvlSignature = _enum_for_AVMP_error.invalidAvlSignature; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary invalidAvlSignature
 * @constant
 * @type {number}
 */
export const invalidAvlSignature: _enum_for_AVMP_error.invalidAvlSignature = AVMP_error_invalidAvlSignature; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary AVMP_error_duplicateAVL
 * @constant
 * @type {number}
 */
export const AVMP_error_duplicateAVL: _enum_for_AVMP_error.duplicateAVL = _enum_for_AVMP_error.duplicateAVL; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary duplicateAVL
 * @constant
 * @type {number}
 */
export const duplicateAVL: _enum_for_AVMP_error.duplicateAVL = AVMP_error_duplicateAVL; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary AVMP_error_missingAvlComponent
 * @constant
 * @type {number}
 */
export const AVMP_error_missingAvlComponent: _enum_for_AVMP_error.missingAvlComponent = _enum_for_AVMP_error.missingAvlComponent; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary missingAvlComponent
 * @constant
 * @type {number}
 */
export const missingAvlComponent: _enum_for_AVMP_error.missingAvlComponent = AVMP_error_missingAvlComponent; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary AVMP_error_invalidAvlVersion
 * @constant
 * @type {number}
 */
export const AVMP_error_invalidAvlVersion: _enum_for_AVMP_error.invalidAvlVersion = _enum_for_AVMP_error.invalidAvlVersion; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary invalidAvlVersion
 * @constant
 * @type {number}
 */
export const invalidAvlVersion: _enum_for_AVMP_error.invalidAvlVersion = AVMP_error_invalidAvlVersion; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary AVMP_error_notAllowedForConstrainedAVLEntity
 * @constant
 * @type {number}
 */
export const AVMP_error_notAllowedForConstrainedAVLEntity: _enum_for_AVMP_error.notAllowedForConstrainedAVLEntity = _enum_for_AVMP_error.notAllowedForConstrainedAVLEntity; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary notAllowedForConstrainedAVLEntity
 * @constant
 * @type {number}
 */
export const notAllowedForConstrainedAVLEntity: _enum_for_AVMP_error.notAllowedForConstrainedAVLEntity = AVMP_error_notAllowedForConstrainedAVLEntity; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary AVMP_error_constrainedRequired
 * @constant
 * @type {number}
 */
export const AVMP_error_constrainedRequired: _enum_for_AVMP_error.constrainedRequired = _enum_for_AVMP_error.constrainedRequired; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary constrainedRequired
 * @constant
 * @type {number}
 */
export const constrainedRequired: _enum_for_AVMP_error.constrainedRequired = AVMP_error_constrainedRequired; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary AVMP_error_nonConstrainedRequired
 * @constant
 * @type {number}
 */
export const AVMP_error_nonConstrainedRequired: _enum_for_AVMP_error.nonConstrainedRequired = _enum_for_AVMP_error.nonConstrainedRequired; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary nonConstrainedRequired
 * @constant
 * @type {number}
 */
export const nonConstrainedRequired: _enum_for_AVMP_error.nonConstrainedRequired = AVMP_error_nonConstrainedRequired; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary AVMP_error_unsupportedCriticalEntryExtension
 * @constant
 * @type {number}
 */
export const AVMP_error_unsupportedCriticalEntryExtension: _enum_for_AVMP_error.unsupportedCriticalEntryExtension = _enum_for_AVMP_error.unsupportedCriticalEntryExtension; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary unsupportedCriticalEntryExtension
 * @constant
 * @type {number}
 */
export const unsupportedCriticalEntryExtension: _enum_for_AVMP_error.unsupportedCriticalEntryExtension = AVMP_error_unsupportedCriticalEntryExtension; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary AVMP_error_unsupportedCriticalExtension
 * @constant
 * @type {number}
 */
export const AVMP_error_unsupportedCriticalExtension: _enum_for_AVMP_error.unsupportedCriticalExtension = _enum_for_AVMP_error.unsupportedCriticalExtension; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary unsupportedCriticalExtension
 * @constant
 * @type {number}
 */
export const unsupportedCriticalExtension: _enum_for_AVMP_error.unsupportedCriticalExtension = AVMP_error_unsupportedCriticalExtension; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary AVMP_error_maxAVLsExceeded
 * @constant
 * @type {number}
 */
export const AVMP_error_maxAVLsExceeded: _enum_for_AVMP_error.maxAVLsExceeded = _enum_for_AVMP_error.maxAVLsExceeded; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary maxAVLsExceeded
 * @constant
 * @type {number}
 */
export const maxAVLsExceeded: _enum_for_AVMP_error.maxAVLsExceeded = AVMP_error_maxAVLsExceeded; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary AVMP_error_unknownCert
 * @constant
 * @type {number}
 */
export const AVMP_error_unknownCert: _enum_for_AVMP_error.unknownCert = _enum_for_AVMP_error.unknownCert; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary unknownCert
 * @constant
 * @type {number}
 */
export const unknownCert: _enum_for_AVMP_error.unknownCert = AVMP_error_unknownCert; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary AVMP_error_unknownAVL
 * @constant
 * @type {number}
 */
export const AVMP_error_unknownAVL: _enum_for_AVMP_error.unknownAVL = _enum_for_AVMP_error.unknownAVL; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary unknownAVL
 * @constant
 * @type {number}
 */
export const unknownAVL: _enum_for_AVMP_error.unknownAVL = AVMP_error_unknownAVL; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary AVMP_error_unsupportedScopeRestriction
 * @constant
 * @type {number}
 */
export const AVMP_error_unsupportedScopeRestriction: _enum_for_AVMP_error.unsupportedScopeRestriction = _enum_for_AVMP_error.unsupportedScopeRestriction; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary unsupportedScopeRestriction
 * @constant
 * @type {number}
 */
export const unsupportedScopeRestriction: _enum_for_AVMP_error.unsupportedScopeRestriction = AVMP_error_unsupportedScopeRestriction; /* SHORT_NAMED_ENUMERATED_VALUE */


export const _decode_AVMP_error: $.ASN1Decoder<number> = $._decodeEnumerated;


export const _encode_AVMP_error: $.ASN1Encoder<number> = $._encodeEnumerated;


/* eslint-enable */
