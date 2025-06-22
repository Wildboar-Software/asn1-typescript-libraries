/* eslint-disable */
import { ASN1Element as _Element, INTEGER } from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";

/**
 * @summary ShadowProblem
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ShadowProblem  ::=  INTEGER {
 *   invalidAgreementID         (1),
 *   inactiveAgreement          (2),
 *   invalidInformationReceived (3),
 *   unsupportedStrategy        (4),
 *   missedPrevious             (5),
 *   fullUpdateRequired         (6),
 *   unwillingToPerform         (7),
 *   unsuitableTiming           (8),
 *   updateAlreadyReceived      (9),
 *   invalidSequencing          (10),
 *   insufficientResources      (11) }
 * ```
 */
export type ShadowProblem = INTEGER;

/**
 * @summary ShadowProblem_invalidAgreementID
 * @constant
 * @type {number}
 */
export const ShadowProblem_invalidAgreementID: ShadowProblem = 1; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ShadowProblem_invalidAgreementID
 * @constant
 * @type {number}
 */
export const invalidAgreementID: ShadowProblem = ShadowProblem_invalidAgreementID; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ShadowProblem_inactiveAgreement
 * @constant
 * @type {number}
 */
export const ShadowProblem_inactiveAgreement: ShadowProblem = 2; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ShadowProblem_inactiveAgreement
 * @constant
 * @type {number}
 */
export const inactiveAgreement: ShadowProblem = ShadowProblem_inactiveAgreement; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ShadowProblem_invalidInformationReceived
 * @constant
 * @type {number}
 */
export const ShadowProblem_invalidInformationReceived: ShadowProblem = 3; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ShadowProblem_invalidInformationReceived
 * @constant
 * @type {number}
 */
export const invalidInformationReceived: ShadowProblem = ShadowProblem_invalidInformationReceived; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ShadowProblem_unsupportedStrategy
 * @constant
 * @type {number}
 */
export const ShadowProblem_unsupportedStrategy: ShadowProblem = 4; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ShadowProblem_unsupportedStrategy
 * @constant
 * @type {number}
 */
export const unsupportedStrategy: ShadowProblem = ShadowProblem_unsupportedStrategy; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ShadowProblem_missedPrevious
 * @constant
 * @type {number}
 */
export const ShadowProblem_missedPrevious: ShadowProblem = 5; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ShadowProblem_missedPrevious
 * @constant
 * @type {number}
 */
export const missedPrevious: ShadowProblem = ShadowProblem_missedPrevious; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ShadowProblem_fullUpdateRequired
 * @constant
 * @type {number}
 */
export const ShadowProblem_fullUpdateRequired: ShadowProblem = 6; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ShadowProblem_fullUpdateRequired
 * @constant
 * @type {number}
 */
export const fullUpdateRequired: ShadowProblem = ShadowProblem_fullUpdateRequired; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ShadowProblem_unwillingToPerform
 * @constant
 * @type {number}
 */
export const ShadowProblem_unwillingToPerform: ShadowProblem = 7; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ShadowProblem_unwillingToPerform
 * @constant
 * @type {number}
 */
export const unwillingToPerform: ShadowProblem = ShadowProblem_unwillingToPerform; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ShadowProblem_unsuitableTiming
 * @constant
 * @type {number}
 */
export const ShadowProblem_unsuitableTiming: ShadowProblem = 8; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ShadowProblem_unsuitableTiming
 * @constant
 * @type {number}
 */
export const unsuitableTiming: ShadowProblem = ShadowProblem_unsuitableTiming; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ShadowProblem_updateAlreadyReceived
 * @constant
 * @type {number}
 */
export const ShadowProblem_updateAlreadyReceived: ShadowProblem = 9; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ShadowProblem_updateAlreadyReceived
 * @constant
 * @type {number}
 */
export const updateAlreadyReceived: ShadowProblem = ShadowProblem_updateAlreadyReceived; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ShadowProblem_invalidSequencing
 * @constant
 * @type {number}
 */
export const ShadowProblem_invalidSequencing: ShadowProblem = 10; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ShadowProblem_invalidSequencing
 * @constant
 * @type {number}
 */
export const invalidSequencing: ShadowProblem = ShadowProblem_invalidSequencing; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ShadowProblem_insufficientResources
 * @constant
 * @type {number}
 */
export const ShadowProblem_insufficientResources: ShadowProblem = 11; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ShadowProblem_insufficientResources
 * @constant
 * @type {number}
 */
export const insufficientResources: ShadowProblem = ShadowProblem_insufficientResources; /* SHORT_NAMED_INTEGER_VALUE */


export const _decode_ShadowProblem = $._decodeInteger;


export const _encode_ShadowProblem = $._encodeInteger;


/* eslint-enable */
