/* eslint-disable */
import { ASN1Element as _Element, type INTEGER } from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";

/**
 * @summary ServiceProblem
 * @description
 *
 * `timeLimitExceeded` / `administrativeLimitExceeded` return NO partial
 * results (unlike List/Search POQ).
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
 * @description
 *
 * Try shortly; Directory or some part is too busy now.
 *
 * @constant
 * @type {number}
 */
export const ServiceProblem_busy = 1 satisfies ServiceProblem; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ServiceProblem_busy
 * @description
 *
 * Try shortly; Directory or some part is too busy now.
 *
 * @constant
 * @type {number}
 */
export const busy = ServiceProblem_busy; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ServiceProblem_unavailable
 * @description
 *
 * Directory or some part of it is currently unavailable.
 *
 * @constant
 * @type {number}
 */
export const ServiceProblem_unavailable = 2 satisfies ServiceProblem; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ServiceProblem_unavailable
 * @description
 *
 * Directory or some part of it is currently unavailable.
 *
 * @constant
 * @type {number}
 */
export const unavailable = ServiceProblem_unavailable; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ServiceProblem_unwillingToPerform
 * @description
 *
 * Resources or policy; Directory is not prepared to execute this request.
 *
 * @constant
 * @type {number}
 */
export const ServiceProblem_unwillingToPerform = 3 satisfies ServiceProblem; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ServiceProblem_unwillingToPerform
 * @description
 *
 * Resources or policy; Directory is not prepared to execute this request.
 *
 * @constant
 * @type {number}
 */
export const unwillingToPerform = ServiceProblem_unwillingToPerform; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ServiceProblem_chainingRequired
 * @description
 *
 * Only chaining would work, but `chainingProhibited` is SET.
 *
 * @constant
 * @type {number}
 */
export const ServiceProblem_chainingRequired = 4 satisfies ServiceProblem; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ServiceProblem_chainingRequired
 * @description
 *
 * Only chaining would work, but `chainingProhibited` is SET.
 *
 * @constant
 * @type {number}
 */
export const chainingRequired = ServiceProblem_chainingRequired; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ServiceProblem_unableToProceed
 * @description
 *
 * DSA is not administrative authority for the naming context; cannot
 * participate in name resolution.
 *
 * @constant
 * @type {number}
 */
export const ServiceProblem_unableToProceed = 5 satisfies ServiceProblem; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ServiceProblem_unableToProceed
 * @description
 *
 * DSA is not administrative authority for the naming context; cannot
 * participate in name resolution.
 *
 * @constant
 * @type {number}
 */
export const unableToProceed = ServiceProblem_unableToProceed; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ServiceProblem_invalidReference
 * @description
 *
 * DUA-directed `operationProgress` / referral is invalid.
 *
 * @constant
 * @type {number}
 */
export const ServiceProblem_invalidReference = 6 satisfies ServiceProblem; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ServiceProblem_invalidReference
 * @description
 *
 * DUA-directed `operationProgress` / referral is invalid.
 *
 * @constant
 * @type {number}
 */
export const invalidReference = ServiceProblem_invalidReference; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ServiceProblem_timeLimitExceeded
 * @description
 *
 * User `timeLimit` reached. NO partial results (unlike List/Search POQ).
 *
 * @constant
 * @type {number}
 */
export const ServiceProblem_timeLimitExceeded = 7 satisfies ServiceProblem; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ServiceProblem_timeLimitExceeded
 * @description
 *
 * User `timeLimit` reached. NO partial results (unlike List/Search POQ).
 *
 * @constant
 * @type {number}
 */
export const timeLimitExceeded = ServiceProblem_timeLimitExceeded; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ServiceProblem_administrativeLimitExceeded
 * @description
 *
 * Administrative limit reached. NO partial results (unlike List/Search
 * POQ).
 *
 * @constant
 * @type {number}
 */
export const ServiceProblem_administrativeLimitExceeded = 8 satisfies ServiceProblem; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ServiceProblem_administrativeLimitExceeded
 * @description
 *
 * Administrative limit reached. NO partial results (unlike List/Search
 * POQ).
 *
 * @constant
 * @type {number}
 */
export const administrativeLimitExceeded = ServiceProblem_administrativeLimitExceeded; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ServiceProblem_loopDetected
 * @description
 *
 * Internal loop; Directory cannot accomplish the request.
 *
 * @constant
 * @type {number}
 */
export const ServiceProblem_loopDetected = 9 satisfies ServiceProblem; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ServiceProblem_loopDetected
 * @description
 *
 * Internal loop; Directory cannot accomplish the request.
 *
 * @constant
 * @type {number}
 */
export const loopDetected = ServiceProblem_loopDetected; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ServiceProblem_unavailableCriticalExtension
 * @description
 *
 * One or more critical extensions were not available.
 *
 * @constant
 * @type {number}
 */
export const ServiceProblem_unavailableCriticalExtension = 10 satisfies ServiceProblem; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ServiceProblem_unavailableCriticalExtension
 * @description
 *
 * One or more critical extensions were not available.
 *
 * @constant
 * @type {number}
 */
export const unavailableCriticalExtension = ServiceProblem_unavailableCriticalExtension; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ServiceProblem_outOfScope
 * @description
 *
 * No referrals within the requested `scopeOfReferral`.
 *
 * @constant
 * @type {number}
 */
export const ServiceProblem_outOfScope = 11 satisfies ServiceProblem; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ServiceProblem_outOfScope
 * @description
 *
 * No referrals within the requested `scopeOfReferral`.
 *
 * @constant
 * @type {number}
 */
export const outOfScope = ServiceProblem_outOfScope; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ServiceProblem_ditError
 * @description
 *
 * DIT consistency problem.
 *
 * @constant
 * @type {number}
 */
export const ServiceProblem_ditError = 12 satisfies ServiceProblem; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ServiceProblem_ditError
 * @description
 *
 * DIT consistency problem.
 *
 * @constant
 * @type {number}
 */
export const ditError = ServiceProblem_ditError; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ServiceProblem_invalidQueryReference
 * @description
 *
 * Paged `queryReference` is invalid. Not in 1988 implementations.
 *
 * @constant
 * @type {number}
 */
export const ServiceProblem_invalidQueryReference = 13 satisfies ServiceProblem; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ServiceProblem_invalidQueryReference
 * @description
 *
 * Paged `queryReference` is invalid. Not in 1988 implementations.
 *
 * @constant
 * @type {number}
 */
export const invalidQueryReference = ServiceProblem_invalidQueryReference; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ServiceProblem_requestedServiceNotAvailable
 * @description
 *
 * Service-specific area: no search-rule or search violated one; extra
 * diagnostics in X.511 clause 14.
 *
 * @constant
 * @type {number}
 */
export const ServiceProblem_requestedServiceNotAvailable = 14 satisfies ServiceProblem; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ServiceProblem_requestedServiceNotAvailable
 * @description
 *
 * Service-specific area: no search-rule or search violated one; extra
 * diagnostics in X.511 clause 14.
 *
 * @constant
 * @type {number}
 */
export const requestedServiceNotAvailable = ServiceProblem_requestedServiceNotAvailable; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ServiceProblem_unsupportedMatchingUse
 * @description
 *
 * `performExactly` SET and the matching rule is unsupported.
 *
 * @constant
 * @type {number}
 */
export const ServiceProblem_unsupportedMatchingUse = 15 satisfies ServiceProblem; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ServiceProblem_unsupportedMatchingUse
 * @description
 *
 * `performExactly` SET and the matching rule is unsupported.
 *
 * @constant
 * @type {number}
 */
export const unsupportedMatchingUse = ServiceProblem_unsupportedMatchingUse; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ServiceProblem_ambiguousKeyAttributes
 * @description
 *
 * Mapping-based MR: multiple mapping-table hits; accompanied by a
 * notification attribute.
 *
 * @constant
 * @type {number}
 */
export const ServiceProblem_ambiguousKeyAttributes = 16 satisfies ServiceProblem; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ServiceProblem_ambiguousKeyAttributes
 * @description
 *
 * Mapping-based MR: multiple mapping-table hits; accompanied by a
 * notification attribute.
 *
 * @constant
 * @type {number}
 */
export const ambiguousKeyAttributes = ServiceProblem_ambiguousKeyAttributes; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ServiceProblem_saslBindInProgress
 * @description
 *
 * Continue bind with the same SASL mechanism; abort with `saslAbort`
 * TRUE.
 *
 * @constant
 * @type {number}
 */
export const ServiceProblem_saslBindInProgress = 17 satisfies ServiceProblem; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ServiceProblem_saslBindInProgress
 * @description
 *
 * Continue bind with the same SASL mechanism; abort with `saslAbort`
 * TRUE.
 *
 * @constant
 * @type {number}
 */
export const saslBindInProgress = ServiceProblem_saslBindInProgress; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ServiceProblem_notSupportedByLDAP
 * @description
 *
 * DAP→LDAP conversion is impossible.
 *
 * @constant
 * @type {number}
 */
export const ServiceProblem_notSupportedByLDAP = 18 satisfies ServiceProblem; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ServiceProblem_notSupportedByLDAP
 * @description
 *
 * DAP→LDAP conversion is impossible.
 *
 * @constant
 * @type {number}
 */
export const notSupportedByLDAP = ServiceProblem_notSupportedByLDAP; /* SHORT_NAMED_INTEGER_VALUE */


export const _decode_ServiceProblem = $._decodeInteger;


export const _encode_ServiceProblem = $._encodeInteger;


/* eslint-enable */
