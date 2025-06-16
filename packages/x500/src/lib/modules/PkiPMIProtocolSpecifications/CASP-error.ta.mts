/* eslint-disable */
import { ASN1Element as _Element, ENUMERATED } from "asn1-ts";
import * as $ from "asn1-ts/dist/functional.mjs";

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
export const CASP_error_noReason: CASP_error = 0; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary noReason
 * @constant
 * @type {number}
 */
export const noReason: CASP_error = CASP_error_noReason; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary CASP_error_unknownContentType
 * @constant
 * @type {number}
 */
export const CASP_error_unknownContentType: CASP_error = 1; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary unknownContentType
 * @constant
 * @type {number}
 */
export const unknownContentType: CASP_error = CASP_error_unknownContentType; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary CASP_error_unsupportedWLMPversion
 * @constant
 * @type {number}
 */
export const CASP_error_unsupportedWLMPversion: CASP_error = 2; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary unsupportedWLMPversion
 * @constant
 * @type {number}
 */
export const unsupportedWLMPversion: CASP_error = CASP_error_unsupportedWLMPversion; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary CASP_error_missingContent
 * @constant
 * @type {number}
 */
export const CASP_error_missingContent: CASP_error = 3; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary missingContent
 * @constant
 * @type {number}
 */
export const missingContent: CASP_error = CASP_error_missingContent; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary CASP_error_missingContentComponent
 * @constant
 * @type {number}
 */
export const CASP_error_missingContentComponent: CASP_error = 4; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary missingContentComponent
 * @constant
 * @type {number}
 */
export const missingContentComponent: CASP_error = CASP_error_missingContentComponent; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary CASP_error_invalidContentComponent
 * @constant
 * @type {number}
 */
export const CASP_error_invalidContentComponent: CASP_error = 5; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary invalidContentComponent
 * @constant
 * @type {number}
 */
export const invalidContentComponent: CASP_error = CASP_error_invalidContentComponent; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary CASP_error_sequenceError
 * @constant
 * @type {number}
 */
export const CASP_error_sequenceError: CASP_error = 6; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary sequenceError
 * @constant
 * @type {number}
 */
export const sequenceError: CASP_error = CASP_error_sequenceError; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary CASP_error_unknownSubject
 * @constant
 * @type {number}
 */
export const CASP_error_unknownSubject: CASP_error = 7; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary unknownSubject
 * @constant
 * @type {number}
 */
export const unknownSubject: CASP_error = CASP_error_unknownSubject; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary CASP_error_unknownCert
 * @constant
 * @type {number}
 */
export const CASP_error_unknownCert: CASP_error = 8; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary unknownCert
 * @constant
 * @type {number}
 */
export const unknownCert: CASP_error = CASP_error_unknownCert; /* SHORT_NAMED_ENUMERATED_VALUE */


export const _decode_CASP_error = $._decodeEnumerated;


export const _encode_CASP_error = $._encodeEnumerated;


/* eslint-enable */
