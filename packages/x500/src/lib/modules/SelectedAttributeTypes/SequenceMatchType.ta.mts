/* eslint-disable */
import { ASN1Element as _Element, ENUMERATED } from "asn1-ts";
import * as $ from "asn1-ts/dist/functional.mjs";

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
 * @constant
 * @type {number}
 */
export const SequenceMatchType_sequenceExact: SequenceMatchType = 0; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary sequenceExact
 * @constant
 * @type {number}
 */
export const sequenceExact: SequenceMatchType = SequenceMatchType_sequenceExact; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary SequenceMatchType_sequenceDeletion
 * @constant
 * @type {number}
 */
export const SequenceMatchType_sequenceDeletion: SequenceMatchType = 1; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary sequenceDeletion
 * @constant
 * @type {number}
 */
export const sequenceDeletion: SequenceMatchType = SequenceMatchType_sequenceDeletion; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary SequenceMatchType_sequenceRestrictedDeletion
 * @constant
 * @type {number}
 */
export const SequenceMatchType_sequenceRestrictedDeletion: SequenceMatchType = 2; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary sequenceRestrictedDeletion
 * @constant
 * @type {number}
 */
export const sequenceRestrictedDeletion: SequenceMatchType = SequenceMatchType_sequenceRestrictedDeletion; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary SequenceMatchType_sequencePermutation
 * @constant
 * @type {number}
 */
export const SequenceMatchType_sequencePermutation: SequenceMatchType = 3; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary sequencePermutation
 * @constant
 * @type {number}
 */
export const sequencePermutation: SequenceMatchType = SequenceMatchType_sequencePermutation; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary SequenceMatchType_sequencePermutationAndDeletion
 * @constant
 * @type {number}
 */
export const SequenceMatchType_sequencePermutationAndDeletion: SequenceMatchType = 4; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary sequencePermutationAndDeletion
 * @constant
 * @type {number}
 */
export const sequencePermutationAndDeletion: SequenceMatchType = SequenceMatchType_sequencePermutationAndDeletion; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary SequenceMatchType_sequenceProviderDefined
 * @constant
 * @type {number}
 */
export const SequenceMatchType_sequenceProviderDefined: SequenceMatchType = 5; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary sequenceProviderDefined
 * @constant
 * @type {number}
 */
export const sequenceProviderDefined: SequenceMatchType = SequenceMatchType_sequenceProviderDefined; /* SHORT_NAMED_ENUMERATED_VALUE */


export const _decode_SequenceMatchType = $._decodeEnumerated;


export const _encode_SequenceMatchType = $._encodeEnumerated;


/* eslint-enable */
