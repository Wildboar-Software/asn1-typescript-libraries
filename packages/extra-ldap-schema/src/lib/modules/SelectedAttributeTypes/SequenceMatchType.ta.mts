/* eslint-disable */
import {
    type ENUMERATED
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



export
const _enum_for_SequenceMatchType: {
    readonly sequenceExact: 0;
    readonly sequenceDeletion: 1;
    readonly sequenceRestrictedDeletion: 2;
    readonly sequencePermutation: 3;
    readonly sequencePermutationAndDeletion: 4;
    readonly sequenceProviderDefined: 5;
} = {
    sequenceExact: 0,
    sequenceDeletion: 1,
    sequenceRestrictedDeletion: 2,
    sequencePermutation: 3,
    sequencePermutationAndDeletion: 4,
    sequenceProviderDefined: 5,
};

export
type _enum_for_SequenceMatchType = ENUMERATED;

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
export
type SequenceMatchType = _enum_for_SequenceMatchType | ENUMERATED;

/**
 * @summary SequenceMatchType_sequenceExact
 * @constant
 * @type {number}
 */
export
const SequenceMatchType_sequenceExact: number = 0 satisfies SequenceMatchType; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary sequenceExact
 * @constant
 * @type {number}
 */
export
const sequenceExact: number = SequenceMatchType_sequenceExact; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary SequenceMatchType_sequenceDeletion
 * @constant
 * @type {number}
 */
export
const SequenceMatchType_sequenceDeletion: number = 1 satisfies SequenceMatchType; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary sequenceDeletion
 * @constant
 * @type {number}
 */
export
const sequenceDeletion: number = SequenceMatchType_sequenceDeletion; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary SequenceMatchType_sequenceRestrictedDeletion
 * @constant
 * @type {number}
 */
export
const SequenceMatchType_sequenceRestrictedDeletion: number = 2 satisfies SequenceMatchType; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary sequenceRestrictedDeletion
 * @constant
 * @type {number}
 */
export
const sequenceRestrictedDeletion: number = SequenceMatchType_sequenceRestrictedDeletion; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary SequenceMatchType_sequencePermutation
 * @constant
 * @type {number}
 */
export
const SequenceMatchType_sequencePermutation: number = 3 satisfies SequenceMatchType; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary sequencePermutation
 * @constant
 * @type {number}
 */
export
const sequencePermutation: number = SequenceMatchType_sequencePermutation; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary SequenceMatchType_sequencePermutationAndDeletion
 * @constant
 * @type {number}
 */
export
const SequenceMatchType_sequencePermutationAndDeletion: number = 4 satisfies SequenceMatchType; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary sequencePermutationAndDeletion
 * @constant
 * @type {number}
 */
export
const sequencePermutationAndDeletion: number = SequenceMatchType_sequencePermutationAndDeletion; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary SequenceMatchType_sequenceProviderDefined
 * @constant
 * @type {number}
 */
export
const SequenceMatchType_sequenceProviderDefined: number = 5 satisfies SequenceMatchType; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary sequenceProviderDefined
 * @constant
 * @type {number}
 */
export
const sequenceProviderDefined: number = SequenceMatchType_sequenceProviderDefined; /* SHORT_NAMED_ENUMERATED_VALUE */

export
const _decode_SequenceMatchType: $.ASN1Decoder<SequenceMatchType> = $._decodeEnumerated;

export
const _encode_SequenceMatchType: $.ASN1Encoder<SequenceMatchType> = $._encodeEnumerated;

/* eslint-enable */
