/* eslint-disable */
import { ASN1Element as _Element } from "asn1-ts";
import * as $ from "asn1-ts/dist/functional.mjs";


/**
 * @summary OCSPResponseStatus
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * OCSPResponseStatus  ::=  ENUMERATED {
 * successful            (0), -- Response has valid confirmations
 * malformedRequest      (1), -- Illegal confirmation request
 * internalError         (2), -- Internal error in issuer
 * tryLater              (3), -- Try again later
 *                             -- (4) is not used
 * sigRequired           (5), -- Must sign the request
 * unauthorized          (6)  -- Request unauthorized
 * }
 * ```
 *
 * @enum {number}
 */
export enum _enum_for_OCSPResponseStatus {
    successful = 0,
    malformedRequest = 1,
    internalError = 2,
    tryLater = 3,
    sigRequired = 5,
    unauthorized = 6,
}


/**
 * @summary OCSPResponseStatus
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * OCSPResponseStatus  ::=  ENUMERATED {
 * successful            (0), -- Response has valid confirmations
 * malformedRequest      (1), -- Illegal confirmation request
 * internalError         (2), -- Internal error in issuer
 * tryLater              (3), -- Try again later
 *                             -- (4) is not used
 * sigRequired           (5), -- Must sign the request
 * unauthorized          (6)  -- Request unauthorized
 * }
 * ```
 *
 * @enum {number}
 */
export type OCSPResponseStatus = _enum_for_OCSPResponseStatus;


/**
 * @summary OCSPResponseStatus
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * OCSPResponseStatus  ::=  ENUMERATED {
 * successful            (0), -- Response has valid confirmations
 * malformedRequest      (1), -- Illegal confirmation request
 * internalError         (2), -- Internal error in issuer
 * tryLater              (3), -- Try again later
 *                             -- (4) is not used
 * sigRequired           (5), -- Must sign the request
 * unauthorized          (6)  -- Request unauthorized
 * }
 * ```
 *
 * @enum {number}
 */
export const OCSPResponseStatus = _enum_for_OCSPResponseStatus;


/**
 * @summary OCSPResponseStatus_successful
 * @constant
 * @type {number}
 */
export const OCSPResponseStatus_successful: OCSPResponseStatus =
    OCSPResponseStatus.successful; /* LONG_NAMED_ENUMERATED_VALUE */


/**
 * @summary successful
 * @constant
 * @type {number}
 */
export const successful: OCSPResponseStatus =
    OCSPResponseStatus.successful; /* SHORT_NAMED_ENUMERATED_VALUE */


/**
 * @summary OCSPResponseStatus_malformedRequest
 * @constant
 * @type {number}
 */
export const OCSPResponseStatus_malformedRequest: OCSPResponseStatus =
    OCSPResponseStatus.malformedRequest; /* LONG_NAMED_ENUMERATED_VALUE */


/**
 * @summary malformedRequest
 * @constant
 * @type {number}
 */
export const malformedRequest: OCSPResponseStatus =
    OCSPResponseStatus.malformedRequest; /* SHORT_NAMED_ENUMERATED_VALUE */


/**
 * @summary OCSPResponseStatus_internalError
 * @constant
 * @type {number}
 */
export const OCSPResponseStatus_internalError: OCSPResponseStatus =
    OCSPResponseStatus.internalError; /* LONG_NAMED_ENUMERATED_VALUE */


/**
 * @summary internalError
 * @constant
 * @type {number}
 */
export const internalError: OCSPResponseStatus =
    OCSPResponseStatus.internalError; /* SHORT_NAMED_ENUMERATED_VALUE */


/**
 * @summary OCSPResponseStatus_tryLater
 * @constant
 * @type {number}
 */
export const OCSPResponseStatus_tryLater: OCSPResponseStatus =
    OCSPResponseStatus.tryLater; /* LONG_NAMED_ENUMERATED_VALUE */


/**
 * @summary tryLater
 * @constant
 * @type {number}
 */
export const tryLater: OCSPResponseStatus =
    OCSPResponseStatus.tryLater; /* SHORT_NAMED_ENUMERATED_VALUE */


/**
 * @summary OCSPResponseStatus_sigRequired
 * @constant
 * @type {number}
 */
export const OCSPResponseStatus_sigRequired: OCSPResponseStatus =
    OCSPResponseStatus.sigRequired; /* LONG_NAMED_ENUMERATED_VALUE */


/**
 * @summary sigRequired
 * @constant
 * @type {number}
 */
export const sigRequired: OCSPResponseStatus =
    OCSPResponseStatus.sigRequired; /* SHORT_NAMED_ENUMERATED_VALUE */


/**
 * @summary OCSPResponseStatus_unauthorized
 * @constant
 * @type {number}
 */
export const OCSPResponseStatus_unauthorized: OCSPResponseStatus =
    OCSPResponseStatus.unauthorized; /* LONG_NAMED_ENUMERATED_VALUE */


/**
 * @summary unauthorized
 * @constant
 * @type {number}
 */
export const unauthorized: OCSPResponseStatus =
    OCSPResponseStatus.unauthorized; /* SHORT_NAMED_ENUMERATED_VALUE */




export const _decode_OCSPResponseStatus = $._decodeEnumerated;




export const _encode_OCSPResponseStatus = $._encodeEnumerated;


/* eslint-enable */
