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
 * Whole-message CASP error. Use TS names: `unsupportedWLMPversion`(2)
 * not unsupportedCASPversion; `unknownSubject`(7) and `unknownCert`(8)
 * (14.16 prose lists unknownCertStatus). `sequenceError`(6): 14.16 says
 * first request seq=1, then +1 same direction, response seq matches
 * request; wrapper SequenceNumber normally starts at 0 (8.5).
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
 * @description
 *
 * No other code applies.
 * @constant
 * @type {number}
 */
export const CASP_error_noReason = _enum_for_CASP_error.noReason; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary noReason
 * @description
 *
 * No other code applies.
 * @constant
 * @type {number}
 */
export const noReason = CASP_error_noReason; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary CASP_error_unknownContentType
 * @description
 *
 * Content type unknown to the receiver.
 * @constant
 * @type {number}
 */
export const CASP_error_unknownContentType = _enum_for_CASP_error.unknownContentType; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary unknownContentType
 * @description
 *
 * Content type unknown to the receiver.
 * @constant
 * @type {number}
 */
export const unknownContentType = CASP_error_unknownContentType; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary CASP_error_unsupportedWLMPversion
 * @description
 *
 * Request or response specified an unsupported CASP version. ASN.1 leftover
 * WLMP name; 14.16 prose says unsupportedCASPversion.
 * @constant
 * @type {number}
 */
export const CASP_error_unsupportedWLMPversion = _enum_for_CASP_error.unsupportedWLMPversion; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary unsupportedWLMPversion
 * @description
 *
 * Request or response specified an unsupported CASP version. ASN.1 leftover
 * WLMP name; 14.16 prose says unsupportedCASPversion.
 * @constant
 * @type {number}
 */
export const unsupportedWLMPversion = CASP_error_unsupportedWLMPversion; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary CASP_error_missingContent
 * @description
 *
 * Request or response had no content.
 * @constant
 * @type {number}
 */
export const CASP_error_missingContent = _enum_for_CASP_error.missingContent; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary missingContent
 * @description
 *
 * Request or response had no content.
 * @constant
 * @type {number}
 */
export const missingContent = CASP_error_missingContent; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary CASP_error_missingContentComponent
 * @description
 *
 * A mandatory component was missing.
 * @constant
 * @type {number}
 */
export const CASP_error_missingContentComponent = _enum_for_CASP_error.missingContentComponent; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary missingContentComponent
 * @description
 *
 * A mandatory component was missing.
 * @constant
 * @type {number}
 */
export const missingContentComponent = CASP_error_missingContentComponent; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary CASP_error_invalidContentComponent
 * @description
 *
 * An unexpected component was included.
 * @constant
 * @type {number}
 */
export const CASP_error_invalidContentComponent = _enum_for_CASP_error.invalidContentComponent; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary invalidContentComponent
 * @description
 *
 * An unexpected component was included.
 * @constant
 * @type {number}
 */
export const invalidContentComponent = CASP_error_invalidContentComponent; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary CASP_error_sequenceError
 * @description
 *
 * First request seq not 1 (14.16; wrapper 8.5 starts at 0); or not
 * previous+1 same direction; or response seq ≠ request seq.
 * @constant
 * @type {number}
 */
export const CASP_error_sequenceError = _enum_for_CASP_error.sequenceError; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary sequenceError
 * @description
 *
 * First request seq not 1 (14.16; wrapper 8.5 starts at 0); or not
 * previous+1 same direction; or response seq ≠ request seq.
 * @constant
 * @type {number}
 */
export const sequenceError = CASP_error_sequenceError; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary CASP_error_unknownSubject
 * @description
 *
 * Subject unknown (CertUpdateReq whole-message, 14.13). In ASN.1; 14.16
 * prose lists unknownCertStatus here.
 * @constant
 * @type {number}
 */
export const CASP_error_unknownSubject = _enum_for_CASP_error.unknownSubject; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary unknownSubject
 * @description
 *
 * Subject unknown (CertUpdateReq whole-message, 14.13). In ASN.1; 14.16
 * prose lists unknownCertStatus here.
 * @constant
 * @type {number}
 */
export const unknownSubject = CASP_error_unknownSubject; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary CASP_error_unknownCert
 * @description
 *
 * Serial unknown (CertUpdateReq whole-message, 14.13). In ASN.1; 14.16
 * prose lists unknownCertStatus instead of this and `unknownSubject`.
 * @constant
 * @type {number}
 */
export const CASP_error_unknownCert = _enum_for_CASP_error.unknownCert; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary unknownCert
 * @description
 *
 * Serial unknown (CertUpdateReq whole-message, 14.13). In ASN.1; 14.16
 * prose lists unknownCertStatus instead of this and `unknownSubject`.
 * @constant
 * @type {number}
 */
export const unknownCert = CASP_error_unknownCert; /* SHORT_NAMED_ENUMERATED_VALUE */


export const _decode_CASP_error = $._decodeEnumerated;


export const _encode_CASP_error = $._encodeEnumerated;


/* eslint-enable */
