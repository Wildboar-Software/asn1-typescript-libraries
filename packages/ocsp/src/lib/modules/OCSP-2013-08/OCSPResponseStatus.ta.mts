/* eslint-disable */
import { ASN1Element as _Element } from "asn1-ts";
import * as $ from "asn1-ts/dist/functional.mjs";

/* START_OF_SYMBOL_DEFINITION _enum_for_OCSPResponseStatus */
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
 * ```@enum {number}
 */
export enum _enum_for_OCSPResponseStatus {
    successful = 0,
    malformedRequest = 1,
    internalError = 2,
    tryLater = 3,
    sigRequired = 5,
    unauthorized = 6,
}
/* END_OF_SYMBOL_DEFINITION _enum_for_OCSPResponseStatus */

/* START_OF_SYMBOL_DEFINITION OCSPResponseStatus */
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
 * ```@enum {number}
 */
export type OCSPResponseStatus = _enum_for_OCSPResponseStatus;
/* END_OF_SYMBOL_DEFINITION OCSPResponseStatus */

/* START_OF_SYMBOL_DEFINITION OCSPResponseStatus */
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
 * ```@enum {number}
 */
export const OCSPResponseStatus = _enum_for_OCSPResponseStatus;
/* END_OF_SYMBOL_DEFINITION OCSPResponseStatus */

/* START_OF_SYMBOL_DEFINITION OCSPResponseStatus_successful */
/**
 * @summary OCSPResponseStatus_successful
 * @constant
 * @type {number}
 */
export const OCSPResponseStatus_successful: OCSPResponseStatus =
    OCSPResponseStatus.successful; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION OCSPResponseStatus_successful */

/* START_OF_SYMBOL_DEFINITION successful */
/**
 * @summary successful
 * @constant
 * @type {number}
 */
export const successful: OCSPResponseStatus =
    OCSPResponseStatus.successful; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION successful */

/* START_OF_SYMBOL_DEFINITION OCSPResponseStatus_malformedRequest */
/**
 * @summary OCSPResponseStatus_malformedRequest
 * @constant
 * @type {number}
 */
export const OCSPResponseStatus_malformedRequest: OCSPResponseStatus =
    OCSPResponseStatus.malformedRequest; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION OCSPResponseStatus_malformedRequest */

/* START_OF_SYMBOL_DEFINITION malformedRequest */
/**
 * @summary malformedRequest
 * @constant
 * @type {number}
 */
export const malformedRequest: OCSPResponseStatus =
    OCSPResponseStatus.malformedRequest; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION malformedRequest */

/* START_OF_SYMBOL_DEFINITION OCSPResponseStatus_internalError */
/**
 * @summary OCSPResponseStatus_internalError
 * @constant
 * @type {number}
 */
export const OCSPResponseStatus_internalError: OCSPResponseStatus =
    OCSPResponseStatus.internalError; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION OCSPResponseStatus_internalError */

/* START_OF_SYMBOL_DEFINITION internalError */
/**
 * @summary internalError
 * @constant
 * @type {number}
 */
export const internalError: OCSPResponseStatus =
    OCSPResponseStatus.internalError; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION internalError */

/* START_OF_SYMBOL_DEFINITION OCSPResponseStatus_tryLater */
/**
 * @summary OCSPResponseStatus_tryLater
 * @constant
 * @type {number}
 */
export const OCSPResponseStatus_tryLater: OCSPResponseStatus =
    OCSPResponseStatus.tryLater; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION OCSPResponseStatus_tryLater */

/* START_OF_SYMBOL_DEFINITION tryLater */
/**
 * @summary tryLater
 * @constant
 * @type {number}
 */
export const tryLater: OCSPResponseStatus =
    OCSPResponseStatus.tryLater; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION tryLater */

/* START_OF_SYMBOL_DEFINITION OCSPResponseStatus_sigRequired */
/**
 * @summary OCSPResponseStatus_sigRequired
 * @constant
 * @type {number}
 */
export const OCSPResponseStatus_sigRequired: OCSPResponseStatus =
    OCSPResponseStatus.sigRequired; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION OCSPResponseStatus_sigRequired */

/* START_OF_SYMBOL_DEFINITION sigRequired */
/**
 * @summary sigRequired
 * @constant
 * @type {number}
 */
export const sigRequired: OCSPResponseStatus =
    OCSPResponseStatus.sigRequired; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION sigRequired */

/* START_OF_SYMBOL_DEFINITION OCSPResponseStatus_unauthorized */
/**
 * @summary OCSPResponseStatus_unauthorized
 * @constant
 * @type {number}
 */
export const OCSPResponseStatus_unauthorized: OCSPResponseStatus =
    OCSPResponseStatus.unauthorized; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION OCSPResponseStatus_unauthorized */

/* START_OF_SYMBOL_DEFINITION unauthorized */
/**
 * @summary unauthorized
 * @constant
 * @type {number}
 */
export const unauthorized: OCSPResponseStatus =
    OCSPResponseStatus.unauthorized; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION unauthorized */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_OCSPResponseStatus */
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_OCSPResponseStatus */

/* START_OF_SYMBOL_DEFINITION _decode_OCSPResponseStatus */
export const _decode_OCSPResponseStatus = $._decodeEnumerated;
/* END_OF_SYMBOL_DEFINITION _decode_OCSPResponseStatus */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_OCSPResponseStatus */
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_OCSPResponseStatus */

/* START_OF_SYMBOL_DEFINITION _encode_OCSPResponseStatus */
export const _encode_OCSPResponseStatus = $._encodeEnumerated;

/* END_OF_SYMBOL_DEFINITION _encode_OCSPResponseStatus */

/* eslint-enable */
