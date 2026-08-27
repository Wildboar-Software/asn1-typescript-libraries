/* eslint-disable */
import { ASN1Element as _Element } from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";


/**
 * @summary OCSPResponseStatus
 * @description
 *
 * Processing status of an OCSP request
 * ([RFC 6960 §4.2.1](https://datatracker.ietf.org/doc/html/rfc6960#section-4.2.1)).
 * Values other than `successful`(0) are unsigned error responses
 * ([§2.3](https://datatracker.ietf.org/doc/html/rfc6960#section-2.3)).
 * Enumerated value (4) is not used.
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
 * Processing status of an OCSP request
 * ([RFC 6960 §4.2.1](https://datatracker.ietf.org/doc/html/rfc6960#section-4.2.1)).
 * Values other than `successful`(0) are unsigned error responses
 * ([§2.3](https://datatracker.ietf.org/doc/html/rfc6960#section-2.3)).
 * Enumerated value (4) is not used.
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
 * Processing status of an OCSP request
 * ([RFC 6960 §4.2.1](https://datatracker.ietf.org/doc/html/rfc6960#section-4.2.1)).
 * Values other than `successful`(0) are unsigned error responses
 * ([§2.3](https://datatracker.ietf.org/doc/html/rfc6960#section-2.3)).
 * Enumerated value (4) is not used.
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
 * @description
 *
 * `successful`(0): response has valid confirmations
 * ([RFC 6960 §4.2.1](https://datatracker.ietf.org/doc/html/rfc6960#section-4.2.1)).
 *
 * @constant
 * @type {number}
 */
export const OCSPResponseStatus_successful: OCSPResponseStatus =
    OCSPResponseStatus.successful; /* LONG_NAMED_ENUMERATED_VALUE */


/**
 * @summary successful
 * @description
 *
 * `successful`(0): response has valid confirmations
 * ([RFC 6960 §4.2.1](https://datatracker.ietf.org/doc/html/rfc6960#section-4.2.1)).
 *
 * @constant
 * @type {number}
 */
export const successful: OCSPResponseStatus =
    OCSPResponseStatus.successful; /* SHORT_NAMED_ENUMERATED_VALUE */


/**
 * @summary OCSPResponseStatus_malformedRequest
 * @description
 *
 * `malformedRequest`(1): request does not conform to OCSP syntax
 * ([RFC 6960 §2.3](https://datatracker.ietf.org/doc/html/rfc6960#section-2.3),
 * [§4.2.1](https://datatracker.ietf.org/doc/html/rfc6960#section-4.2.1)).
 *
 * @constant
 * @type {number}
 */
export const OCSPResponseStatus_malformedRequest: OCSPResponseStatus =
    OCSPResponseStatus.malformedRequest; /* LONG_NAMED_ENUMERATED_VALUE */


/**
 * @summary malformedRequest
 * @description
 *
 * `malformedRequest`(1): request does not conform to OCSP syntax
 * ([RFC 6960 §2.3](https://datatracker.ietf.org/doc/html/rfc6960#section-2.3),
 * [§4.2.1](https://datatracker.ietf.org/doc/html/rfc6960#section-4.2.1)).
 *
 * @constant
 * @type {number}
 */
export const malformedRequest: OCSPResponseStatus =
    OCSPResponseStatus.malformedRequest; /* SHORT_NAMED_ENUMERATED_VALUE */


/**
 * @summary OCSPResponseStatus_internalError
 * @description
 *
 * `internalError`(2): OCSP responder reached an inconsistent internal
 * state; the query should be retried, potentially with another
 * responder
 * ([RFC 6960 §2.3](https://datatracker.ietf.org/doc/html/rfc6960#section-2.3)).
 *
 * @constant
 * @type {number}
 */
export const OCSPResponseStatus_internalError: OCSPResponseStatus =
    OCSPResponseStatus.internalError; /* LONG_NAMED_ENUMERATED_VALUE */


/**
 * @summary internalError
 * @description
 *
 * `internalError`(2): OCSP responder reached an inconsistent internal
 * state; the query should be retried, potentially with another
 * responder
 * ([RFC 6960 §2.3](https://datatracker.ietf.org/doc/html/rfc6960#section-2.3)).
 *
 * @constant
 * @type {number}
 */
export const internalError: OCSPResponseStatus =
    OCSPResponseStatus.internalError; /* SHORT_NAMED_ENUMERATED_VALUE */


/**
 * @summary OCSPResponseStatus_tryLater
 * @description
 *
 * `tryLater`(3): service exists but is temporarily unable to return
 * a status for the requested certificate
 * ([RFC 6960 §2.3](https://datatracker.ietf.org/doc/html/rfc6960#section-2.3)).
 *
 * @constant
 * @type {number}
 */
export const OCSPResponseStatus_tryLater: OCSPResponseStatus =
    OCSPResponseStatus.tryLater; /* LONG_NAMED_ENUMERATED_VALUE */


/**
 * @summary tryLater
 * @description
 *
 * `tryLater`(3): service exists but is temporarily unable to return
 * a status for the requested certificate
 * ([RFC 6960 §2.3](https://datatracker.ietf.org/doc/html/rfc6960#section-2.3)).
 *
 * @constant
 * @type {number}
 */
export const tryLater: OCSPResponseStatus =
    OCSPResponseStatus.tryLater; /* SHORT_NAMED_ENUMERATED_VALUE */


/**
 * @summary OCSPResponseStatus_sigRequired
 * @description
 *
 * `sigRequired`(5): server requires that the client sign the request
 * ([RFC 6960 §2.3](https://datatracker.ietf.org/doc/html/rfc6960#section-2.3)).
 *
 * @constant
 * @type {number}
 */
export const OCSPResponseStatus_sigRequired: OCSPResponseStatus =
    OCSPResponseStatus.sigRequired; /* LONG_NAMED_ENUMERATED_VALUE */


/**
 * @summary sigRequired
 * @description
 *
 * `sigRequired`(5): server requires that the client sign the request
 * ([RFC 6960 §2.3](https://datatracker.ietf.org/doc/html/rfc6960#section-2.3)).
 *
 * @constant
 * @type {number}
 */
export const sigRequired: OCSPResponseStatus =
    OCSPResponseStatus.sigRequired; /* SHORT_NAMED_ENUMERATED_VALUE */


/**
 * @summary OCSPResponseStatus_unauthorized
 * @description
 *
 * `unauthorized`(6): client is not authorized to make this query to
 * this server, or the server is not capable of responding
 * authoritatively (cf. [RFC 5019](https://datatracker.ietf.org/doc/html/rfc5019)
 * §2.2.3)
 * ([RFC 6960 §2.3](https://datatracker.ietf.org/doc/html/rfc6960#section-2.3)).
 *
 * @constant
 * @type {number}
 */
export const OCSPResponseStatus_unauthorized: OCSPResponseStatus =
    OCSPResponseStatus.unauthorized; /* LONG_NAMED_ENUMERATED_VALUE */


/**
 * @summary unauthorized
 * @description
 *
 * `unauthorized`(6): client is not authorized to make this query to
 * this server, or the server is not capable of responding
 * authoritatively (cf. [RFC 5019](https://datatracker.ietf.org/doc/html/rfc5019)
 * §2.2.3)
 * ([RFC 6960 §2.3](https://datatracker.ietf.org/doc/html/rfc6960#section-2.3)).
 *
 * @constant
 * @type {number}
 */
export const unauthorized: OCSPResponseStatus =
    OCSPResponseStatus.unauthorized; /* SHORT_NAMED_ENUMERATED_VALUE */



export const _decode_OCSPResponseStatus = $._decodeEnumerated;




export const _encode_OCSPResponseStatus = $._encodeEnumerated;


/* eslint-enable */
