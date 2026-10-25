/* eslint-disable */
import { ASN1Element as _Element, type ENUMERATED } from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";

export enum _enum_for_SequenceMatchType {
    sequenceExact = 0,
    sequenceDeletion = 1,
    sequenceRestrictedDeletion = 2,
    sequencePermutation = 3,
    sequencePermutationAndDeletion = 4,
    sequenceProviderDefined = 5,
}

/**
 * @summary SequenceMatchType
 * @description
 *
 * Control-attribute syntax for generalWordMatch. SINGLE VALUE; applies
 * to following initial/any/final. Default sequenceExact. Does not apply
 * to initial/final words.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * SequenceMatchType  ::=  ENUMERATED {
 *   sequenceExact                  (0),
 *   sequenceDeletion               (1),
 *   sequenceRestrictedDeletion     (2),
 *   sequencePermutation            (3),
 *   sequencePermutationAndDeletion (4),
 *   sequenceProviderDefined        (5),
 *   ... }
 * ```
 *
 * @enum {number}
 */
export type SequenceMatchType = _enum_for_SequenceMatchType | ENUMERATED;

/**
 * @summary SequenceMatchType_sequenceExact
 * @description
 *
 * Unchanged sequence. Default before first sequenceMatchType control.
 * Does not apply to initial/final words.
 *
 * @constant
 * @type {number}
 */
export const SequenceMatchType_sequenceExact = _enum_for_SequenceMatchType.sequenceExact; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary sequenceExact
 * @description
 *
 * Unchanged sequence. Default before first sequenceMatchType control.
 * Does not apply to initial/final words.
 *
 * @constant
 * @type {number}
 */
export const sequenceExact = SequenceMatchType_sequenceExact; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary SequenceMatchType_sequenceDeletion
 * @description
 *
 * Delete ≥0 words.
 *
 * @constant
 * @type {number}
 */
export const SequenceMatchType_sequenceDeletion = _enum_for_SequenceMatchType.sequenceDeletion; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary sequenceDeletion
 * @description
 *
 * Delete ≥0 words.
 *
 * @constant
 * @type {number}
 */
export const sequenceDeletion = SequenceMatchType_sequenceDeletion; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary SequenceMatchType_sequenceRestrictedDeletion
 * @description
 *
 * Delete ≥0 words but not the first remaining word.
 *
 * @constant
 * @type {number}
 */
export const SequenceMatchType_sequenceRestrictedDeletion = _enum_for_SequenceMatchType.sequenceRestrictedDeletion; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary sequenceRestrictedDeletion
 * @description
 *
 * Delete ≥0 words but not the first remaining word.
 *
 * @constant
 * @type {number}
 */
export const sequenceRestrictedDeletion = SequenceMatchType_sequenceRestrictedDeletion; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary SequenceMatchType_sequencePermutation
 * @description
 *
 * Permute ≥0 words.
 *
 * @constant
 * @type {number}
 */
export const SequenceMatchType_sequencePermutation = _enum_for_SequenceMatchType.sequencePermutation; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary sequencePermutation
 * @description
 *
 * Permute ≥0 words.
 *
 * @constant
 * @type {number}
 */
export const sequencePermutation = SequenceMatchType_sequencePermutation; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary SequenceMatchType_sequencePermutationAndDeletion
 * @description
 *
 * Delete ≥0 then permute remaining.
 *
 * @constant
 * @type {number}
 */
export const SequenceMatchType_sequencePermutationAndDeletion = _enum_for_SequenceMatchType.sequencePermutationAndDeletion; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary sequencePermutationAndDeletion
 * @description
 *
 * Delete ≥0 then permute remaining.
 *
 * @constant
 * @type {number}
 */
export const sequencePermutationAndDeletion = SequenceMatchType_sequencePermutationAndDeletion; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary SequenceMatchType_sequenceProviderDefined
 * @description
 *
 * Implementation-defined insert/delete/permute.
 *
 * @constant
 * @type {number}
 */
export const SequenceMatchType_sequenceProviderDefined = _enum_for_SequenceMatchType.sequenceProviderDefined; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary sequenceProviderDefined
 * @description
 *
 * Implementation-defined insert/delete/permute.
 *
 * @constant
 * @type {number}
 */
export const sequenceProviderDefined = SequenceMatchType_sequenceProviderDefined; /* SHORT_NAMED_ENUMERATED_VALUE */


export const _decode_SequenceMatchType = $._decodeEnumerated;


export const _encode_SequenceMatchType = $._encodeEnumerated;


/* eslint-enable */
