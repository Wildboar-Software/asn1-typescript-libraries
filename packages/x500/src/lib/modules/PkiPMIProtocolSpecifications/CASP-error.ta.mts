/* eslint-disable */
import { ASN1Element as _Element, type ENUMERATED } from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";

export enum _enum_for_CASP_error {
    noReason = 0,
    unknownContentType = 1,
    unsupportedWLMPversion = 2,
    missingContent = 3,
    missingContentComponent = 4,
    invalidContentComponent = 5,
    sequenceError = 6,
    unknownSubject = 7,
    unknownCert = 8,
}

/**
 * @summary CASP_error
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * CASP-error  ::=  ENUMERATED {
 *   noReason                      (0),
 *   unknownContentType            (1),
 *   unsupportedWLMPversion        (2),
 *   missingContent                (3),
 *   missingContentComponent       (4),
 *   invalidContentComponent       (5),
 *   sequenceError                 (6),
 *   unknownSubject                (7),
 *   unknownCert                   (8),
 *   ... }
 * ```
 *
 * @enum {number}
 */
export type CASP_error = _enum_for_CASP_error | ENUMERATED;

/**
 * @summary CASP_error_noReason
 * @constant
 * @type {number}
 */
export const CASP_error_noReason = _enum_for_CASP_error.noReason satisfies CASP_error; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary noReason
 * @constant
 * @type {number}
 */
export const noReason = CASP_error_noReason satisfies CASP_error; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary CASP_error_unknownContentType
 * @constant
 * @type {number}
 */
export const CASP_error_unknownContentType = _enum_for_CASP_error.unknownContentType satisfies CASP_error; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary unknownContentType
 * @constant
 * @type {number}
 */
export const unknownContentType = CASP_error_unknownContentType satisfies CASP_error; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary CASP_error_unsupportedWLMPversion
 * @constant
 * @type {number}
 */
export const CASP_error_unsupportedWLMPversion = _enum_for_CASP_error.unsupportedWLMPversion satisfies CASP_error; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary unsupportedWLMPversion
 * @constant
 * @type {number}
 */
export const unsupportedWLMPversion = CASP_error_unsupportedWLMPversion satisfies CASP_error; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary CASP_error_missingContent
 * @constant
 * @type {number}
 */
export const CASP_error_missingContent = _enum_for_CASP_error.missingContent satisfies CASP_error; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary missingContent
 * @constant
 * @type {number}
 */
export const missingContent = CASP_error_missingContent satisfies CASP_error; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary CASP_error_missingContentComponent
 * @constant
 * @type {number}
 */
export const CASP_error_missingContentComponent = _enum_for_CASP_error.missingContentComponent satisfies CASP_error; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary missingContentComponent
 * @constant
 * @type {number}
 */
export const missingContentComponent = CASP_error_missingContentComponent satisfies CASP_error; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary CASP_error_invalidContentComponent
 * @constant
 * @type {number}
 */
export const CASP_error_invalidContentComponent = _enum_for_CASP_error.invalidContentComponent satisfies CASP_error; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary invalidContentComponent
 * @constant
 * @type {number}
 */
export const invalidContentComponent = CASP_error_invalidContentComponent satisfies CASP_error; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary CASP_error_sequenceError
 * @constant
 * @type {number}
 */
export const CASP_error_sequenceError = _enum_for_CASP_error.sequenceError satisfies CASP_error; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary sequenceError
 * @constant
 * @type {number}
 */
export const sequenceError = CASP_error_sequenceError satisfies CASP_error; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary CASP_error_unknownSubject
 * @constant
 * @type {number}
 */
export const CASP_error_unknownSubject = _enum_for_CASP_error.unknownSubject satisfies CASP_error; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary unknownSubject
 * @constant
 * @type {number}
 */
export const unknownSubject = CASP_error_unknownSubject satisfies CASP_error; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary CASP_error_unknownCert
 * @constant
 * @type {number}
 */
export const CASP_error_unknownCert = _enum_for_CASP_error.unknownCert satisfies CASP_error; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary unknownCert
 * @constant
 * @type {number}
 */
export const unknownCert = CASP_error_unknownCert satisfies CASP_error; /* SHORT_NAMED_ENUMERATED_VALUE */


export const _decode_CASP_error = $._decodeEnumerated;


export const _encode_CASP_error = $._encodeEnumerated;


/* eslint-enable */
