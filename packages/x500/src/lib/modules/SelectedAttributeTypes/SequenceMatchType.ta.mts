/* eslint-disable */
import { ASN1Element as _Element, ENUMERATED } from "@wildboar/asn1";
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
export const SequenceMatchType_sequenceExact: SequenceMatchType = 0; /* LONG_NAMED_ENUMERATED_VALUE */

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
export const sequenceExact: SequenceMatchType = SequenceMatchType_sequenceExact; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary SequenceMatchType_sequenceDeletion
 * @description
 *
 * Delete ≥0 words.
 *
 * @constant
 * @type {number}
 */
export const SequenceMatchType_sequenceDeletion: SequenceMatchType = 1; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary sequenceDeletion
 * @description
 *
 * Delete ≥0 words.
 *
 * @constant
 * @type {number}
 */
export const sequenceDeletion: SequenceMatchType = SequenceMatchType_sequenceDeletion; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary SequenceMatchType_sequenceRestrictedDeletion
 * @description
 *
 * Delete ≥0 words but not the first remaining word.
 *
 * @constant
 * @type {number}
 */
export const SequenceMatchType_sequenceRestrictedDeletion: SequenceMatchType = 2; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary sequenceRestrictedDeletion
 * @description
 *
 * Delete ≥0 words but not the first remaining word.
 *
 * @constant
 * @type {number}
 */
export const sequenceRestrictedDeletion: SequenceMatchType = SequenceMatchType_sequenceRestrictedDeletion; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary SequenceMatchType_sequencePermutation
 * @description
 *
 * Permute ≥0 words.
 *
 * @constant
 * @type {number}
 */
export const SequenceMatchType_sequencePermutation: SequenceMatchType = 3; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary sequencePermutation
 * @description
 *
 * Permute ≥0 words.
 *
 * @constant
 * @type {number}
 */
export const sequencePermutation: SequenceMatchType = SequenceMatchType_sequencePermutation; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary SequenceMatchType_sequencePermutationAndDeletion
 * @description
 *
 * Delete ≥0 then permute remaining.
 *
 * @constant
 * @type {number}
 */
export const SequenceMatchType_sequencePermutationAndDeletion: SequenceMatchType = 4; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary sequencePermutationAndDeletion
 * @description
 *
 * Delete ≥0 then permute remaining.
 *
 * @constant
 * @type {number}
 */
export const sequencePermutationAndDeletion: SequenceMatchType = SequenceMatchType_sequencePermutationAndDeletion; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary SequenceMatchType_sequenceProviderDefined
 * @description
 *
 * Implementation-defined insert/delete/permute.
 *
 * @constant
 * @type {number}
 */
export const SequenceMatchType_sequenceProviderDefined: SequenceMatchType = 5; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary sequenceProviderDefined
 * @description
 *
 * Implementation-defined insert/delete/permute.
 *
 * @constant
 * @type {number}
 */
export const sequenceProviderDefined: SequenceMatchType = SequenceMatchType_sequenceProviderDefined; /* SHORT_NAMED_ENUMERATED_VALUE */


export const _decode_SequenceMatchType = $._decodeEnumerated;


export const _encode_SequenceMatchType = $._encodeEnumerated;


/* eslint-enable */
