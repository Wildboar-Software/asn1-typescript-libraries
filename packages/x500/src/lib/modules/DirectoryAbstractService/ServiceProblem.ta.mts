/* eslint-disable */
import { ASN1Element as _Element, INTEGER } from "asn1-ts";
import * as $ from "@wildboar/asn1/functional";

/**
 * @summary ServiceProblem
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ServiceProblem  ::=  INTEGER {
 *   busy                         (1),
 *   unavailable                  (2),
 *   unwillingToPerform           (3),
 *   chainingRequired             (4),
 *   unableToProceed              (5),
 *   invalidReference             (6),
 *   timeLimitExceeded            (7),
 *   administrativeLimitExceeded  (8),
 *   loopDetected                 (9),
 *   unavailableCriticalExtension (10),
 *   outOfScope                   (11),
 *   ditError                     (12),
 *   invalidQueryReference        (13),
 *   requestedServiceNotAvailable (14),
 *   unsupportedMatchingUse       (15),
 *   ambiguousKeyAttributes       (16),
 *   saslBindInProgress           (17),
 *   notSupportedByLDAP           (18) }
 * ```
 */
export type ServiceProblem = INTEGER;

/**
 * @summary ServiceProblem_busy
 * @constant
 * @type {number}
 */
export const ServiceProblem_busy: ServiceProblem = 1; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ServiceProblem_busy
 * @constant
 * @type {number}
 */
export const busy: ServiceProblem = ServiceProblem_busy; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ServiceProblem_unavailable
 * @constant
 * @type {number}
 */
export const ServiceProblem_unavailable: ServiceProblem = 2; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ServiceProblem_unavailable
 * @constant
 * @type {number}
 */
export const unavailable: ServiceProblem = ServiceProblem_unavailable; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ServiceProblem_unwillingToPerform
 * @constant
 * @type {number}
 */
export const ServiceProblem_unwillingToPerform: ServiceProblem = 3; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ServiceProblem_unwillingToPerform
 * @constant
 * @type {number}
 */
export const unwillingToPerform: ServiceProblem = ServiceProblem_unwillingToPerform; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ServiceProblem_chainingRequired
 * @constant
 * @type {number}
 */
export const ServiceProblem_chainingRequired: ServiceProblem = 4; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ServiceProblem_chainingRequired
 * @constant
 * @type {number}
 */
export const chainingRequired: ServiceProblem = ServiceProblem_chainingRequired; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ServiceProblem_unableToProceed
 * @constant
 * @type {number}
 */
export const ServiceProblem_unableToProceed: ServiceProblem = 5; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ServiceProblem_unableToProceed
 * @constant
 * @type {number}
 */
export const unableToProceed: ServiceProblem = ServiceProblem_unableToProceed; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ServiceProblem_invalidReference
 * @constant
 * @type {number}
 */
export const ServiceProblem_invalidReference: ServiceProblem = 6; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ServiceProblem_invalidReference
 * @constant
 * @type {number}
 */
export const invalidReference: ServiceProblem = ServiceProblem_invalidReference; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ServiceProblem_timeLimitExceeded
 * @constant
 * @type {number}
 */
export const ServiceProblem_timeLimitExceeded: ServiceProblem = 7; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ServiceProblem_timeLimitExceeded
 * @constant
 * @type {number}
 */
export const timeLimitExceeded: ServiceProblem = ServiceProblem_timeLimitExceeded; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ServiceProblem_administrativeLimitExceeded
 * @constant
 * @type {number}
 */
export const ServiceProblem_administrativeLimitExceeded: ServiceProblem = 8; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ServiceProblem_administrativeLimitExceeded
 * @constant
 * @type {number}
 */
export const administrativeLimitExceeded: ServiceProblem = ServiceProblem_administrativeLimitExceeded; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ServiceProblem_loopDetected
 * @constant
 * @type {number}
 */
export const ServiceProblem_loopDetected: ServiceProblem = 9; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ServiceProblem_loopDetected
 * @constant
 * @type {number}
 */
export const loopDetected: ServiceProblem = ServiceProblem_loopDetected; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ServiceProblem_unavailableCriticalExtension
 * @constant
 * @type {number}
 */
export const ServiceProblem_unavailableCriticalExtension: ServiceProblem = 10; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ServiceProblem_unavailableCriticalExtension
 * @constant
 * @type {number}
 */
export const unavailableCriticalExtension: ServiceProblem = ServiceProblem_unavailableCriticalExtension; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ServiceProblem_outOfScope
 * @constant
 * @type {number}
 */
export const ServiceProblem_outOfScope: ServiceProblem = 11; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ServiceProblem_outOfScope
 * @constant
 * @type {number}
 */
export const outOfScope: ServiceProblem = ServiceProblem_outOfScope; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ServiceProblem_ditError
 * @constant
 * @type {number}
 */
export const ServiceProblem_ditError: ServiceProblem = 12; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ServiceProblem_ditError
 * @constant
 * @type {number}
 */
export const ditError: ServiceProblem = ServiceProblem_ditError; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ServiceProblem_invalidQueryReference
 * @constant
 * @type {number}
 */
export const ServiceProblem_invalidQueryReference: ServiceProblem = 13; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ServiceProblem_invalidQueryReference
 * @constant
 * @type {number}
 */
export const invalidQueryReference: ServiceProblem = ServiceProblem_invalidQueryReference; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ServiceProblem_requestedServiceNotAvailable
 * @constant
 * @type {number}
 */
export const ServiceProblem_requestedServiceNotAvailable: ServiceProblem = 14; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ServiceProblem_requestedServiceNotAvailable
 * @constant
 * @type {number}
 */
export const requestedServiceNotAvailable: ServiceProblem = ServiceProblem_requestedServiceNotAvailable; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ServiceProblem_unsupportedMatchingUse
 * @constant
 * @type {number}
 */
export const ServiceProblem_unsupportedMatchingUse: ServiceProblem = 15; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ServiceProblem_unsupportedMatchingUse
 * @constant
 * @type {number}
 */
export const unsupportedMatchingUse: ServiceProblem = ServiceProblem_unsupportedMatchingUse; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ServiceProblem_ambiguousKeyAttributes
 * @constant
 * @type {number}
 */
export const ServiceProblem_ambiguousKeyAttributes: ServiceProblem = 16; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ServiceProblem_ambiguousKeyAttributes
 * @constant
 * @type {number}
 */
export const ambiguousKeyAttributes: ServiceProblem = ServiceProblem_ambiguousKeyAttributes; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ServiceProblem_saslBindInProgress
 * @constant
 * @type {number}
 */
export const ServiceProblem_saslBindInProgress: ServiceProblem = 17; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ServiceProblem_saslBindInProgress
 * @constant
 * @type {number}
 */
export const saslBindInProgress: ServiceProblem = ServiceProblem_saslBindInProgress; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ServiceProblem_notSupportedByLDAP
 * @constant
 * @type {number}
 */
export const ServiceProblem_notSupportedByLDAP: ServiceProblem = 18; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ServiceProblem_notSupportedByLDAP
 * @constant
 * @type {number}
 */
export const notSupportedByLDAP: ServiceProblem = ServiceProblem_notSupportedByLDAP; /* SHORT_NAMED_INTEGER_VALUE */


export const _decode_ServiceProblem = $._decodeInteger;


export const _encode_ServiceProblem = $._encodeInteger;


/* eslint-enable */
