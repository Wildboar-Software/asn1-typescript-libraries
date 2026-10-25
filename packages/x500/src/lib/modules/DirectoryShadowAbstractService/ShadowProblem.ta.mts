/* eslint-disable */
import { ASN1Element as _Element, type INTEGER } from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";

/**
 * @summary ShadowProblem
 * @description
 *
 * INTEGER, not ENUMERATED (unknown values possible). No 0.
 * `invalidAgreementID` (1) = ID not known with that peer.
 * `inactiveAgreement` (2) = known but not yet active, or inactive and
 * still held. `invalidInformationReceived` (3) = consumer cannot serve
 * from the data (extraneous filtered entries/attrs are *not* this — ignore
 * them); not returned for coordinate or request. `unsupportedStrategy`
 * (4) = strategy not in the agreement or not supported; not returned for
 * `updateShadow`. `missedPrevious` (5) = `lastUpdate` later than the
 * consumer's last-update (coordinate only; may carry consumer
 * `lastUpdate`). `fullUpdateRequired` (6) = only a total refresh will
 * resync; not returned for `updateShadow`. `unwillingToPerform` (7) =
 * follow-up is unspecified. `unsuitableTiming` (8) = not now; may carry
 * `updateWindow`; not returned for `updateShadow`.
 * `updateAlreadyReceived` (9) = consumer's last-update is later than
 * received `lastUpdate` (coordinate only). `invalidSequencing` (10) =
 * consecutive coordinate/request without an intervening `updateShadow`
 * (or transport failure), or `updateShadow` with no prior
 * coordinate/request. `insufficientResources` (11).
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
export const ShadowProblem_invalidAgreementID: 1 = 1 satisfies ShadowProblem; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ShadowProblem_invalidAgreementID
 * @constant
 * @type {number}
 */
export const invalidAgreementID: 1 = ShadowProblem_invalidAgreementID; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ShadowProblem_inactiveAgreement
 * @constant
 * @type {number}
 */
export const ShadowProblem_inactiveAgreement: 2 = 2 satisfies ShadowProblem; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ShadowProblem_inactiveAgreement
 * @constant
 * @type {number}
 */
export const inactiveAgreement: 2 = ShadowProblem_inactiveAgreement; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ShadowProblem_invalidInformationReceived
 * @constant
 * @type {number}
 */
export const ShadowProblem_invalidInformationReceived: 3 = 3 satisfies ShadowProblem; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ShadowProblem_invalidInformationReceived
 * @constant
 * @type {number}
 */
export const invalidInformationReceived: 3 = ShadowProblem_invalidInformationReceived; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ShadowProblem_unsupportedStrategy
 * @constant
 * @type {number}
 */
export const ShadowProblem_unsupportedStrategy: 4 = 4 satisfies ShadowProblem; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ShadowProblem_unsupportedStrategy
 * @constant
 * @type {number}
 */
export const unsupportedStrategy: 4 = ShadowProblem_unsupportedStrategy; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ShadowProblem_missedPrevious
 * @constant
 * @type {number}
 */
export const ShadowProblem_missedPrevious: 5 = 5 satisfies ShadowProblem; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ShadowProblem_missedPrevious
 * @constant
 * @type {number}
 */
export const missedPrevious: 5 = ShadowProblem_missedPrevious; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ShadowProblem_fullUpdateRequired
 * @constant
 * @type {number}
 */
export const ShadowProblem_fullUpdateRequired: 6 = 6 satisfies ShadowProblem; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ShadowProblem_fullUpdateRequired
 * @constant
 * @type {number}
 */
export const fullUpdateRequired: 6 = ShadowProblem_fullUpdateRequired; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ShadowProblem_unwillingToPerform
 * @constant
 * @type {number}
 */
export const ShadowProblem_unwillingToPerform: 7 = 7 satisfies ShadowProblem; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ShadowProblem_unwillingToPerform
 * @constant
 * @type {number}
 */
export const unwillingToPerform: 7 = ShadowProblem_unwillingToPerform; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ShadowProblem_unsuitableTiming
 * @constant
 * @type {number}
 */
export const ShadowProblem_unsuitableTiming: 8 = 8 satisfies ShadowProblem; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ShadowProblem_unsuitableTiming
 * @constant
 * @type {number}
 */
export const unsuitableTiming: 8 = ShadowProblem_unsuitableTiming; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ShadowProblem_updateAlreadyReceived
 * @constant
 * @type {number}
 */
export const ShadowProblem_updateAlreadyReceived: 9 = 9 satisfies ShadowProblem; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ShadowProblem_updateAlreadyReceived
 * @constant
 * @type {number}
 */
export const updateAlreadyReceived: 9 = ShadowProblem_updateAlreadyReceived; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ShadowProblem_invalidSequencing
 * @constant
 * @type {number}
 */
export const ShadowProblem_invalidSequencing: 10 = 10 satisfies ShadowProblem; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ShadowProblem_invalidSequencing
 * @constant
 * @type {number}
 */
export const invalidSequencing: 10 = ShadowProblem_invalidSequencing; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ShadowProblem_insufficientResources
 * @constant
 * @type {number}
 */
export const ShadowProblem_insufficientResources: 11 = 11 satisfies ShadowProblem; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ShadowProblem_insufficientResources
 * @constant
 * @type {number}
 */
export const insufficientResources: 11 = ShadowProblem_insufficientResources; /* SHORT_NAMED_INTEGER_VALUE */


export const _decode_ShadowProblem: $.ASN1Decoder<INTEGER> = $._decodeInteger;


export const _encode_ShadowProblem: $.ASN1Encoder<INTEGER> = $._encodeInteger;


/* eslint-enable */
