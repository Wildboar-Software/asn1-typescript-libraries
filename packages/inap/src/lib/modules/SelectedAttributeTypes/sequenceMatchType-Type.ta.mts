/* eslint-disable */
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary sequenceMatchType_Type
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * sequenceMatchType-Type ::= ENUMERATED { -- REMOVED_FROM_UNNESTING -- }
 * ```
 * 
 * @enum {number}
 */
export
enum _enum_for_sequenceMatchType_Type {
    sequenceExact = 0,
    sequenceDeletion = 1,
    sequenceRestrictedDeletion = 2,
    sequencePermutation = 3,
    sequencePermutationAndDeletion = 4,
    sequenceProviderDefined = 5,
}

/**
 * @summary sequenceMatchType_Type
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * sequenceMatchType-Type ::= ENUMERATED { -- REMOVED_FROM_UNNESTING -- }
 * ```
 * 
 * @enum {number}
 */
export
type sequenceMatchType_Type = _enum_for_sequenceMatchType_Type;

/**
 * @summary sequenceMatchType_Type
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * sequenceMatchType-Type ::= ENUMERATED { -- REMOVED_FROM_UNNESTING -- }
 * ```
 * 
 * @enum {number}
 */
export
const sequenceMatchType_Type = _enum_for_sequenceMatchType_Type;

/**
 * @summary sequenceMatchType_Type_sequenceExact
 * @constant
 * @type {number}
 */
export
const sequenceMatchType_Type_sequenceExact: sequenceMatchType_Type = sequenceMatchType_Type.sequenceExact; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary sequenceExact
 * @constant
 * @type {number}
 */
export
const sequenceExact: sequenceMatchType_Type = sequenceMatchType_Type.sequenceExact; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary sequenceMatchType_Type_sequenceDeletion
 * @constant
 * @type {number}
 */
export
const sequenceMatchType_Type_sequenceDeletion: sequenceMatchType_Type = sequenceMatchType_Type.sequenceDeletion; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary sequenceDeletion
 * @constant
 * @type {number}
 */
export
const sequenceDeletion: sequenceMatchType_Type = sequenceMatchType_Type.sequenceDeletion; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary sequenceMatchType_Type_sequenceRestrictedDeletion
 * @constant
 * @type {number}
 */
export
const sequenceMatchType_Type_sequenceRestrictedDeletion: sequenceMatchType_Type = sequenceMatchType_Type.sequenceRestrictedDeletion; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary sequenceRestrictedDeletion
 * @constant
 * @type {number}
 */
export
const sequenceRestrictedDeletion: sequenceMatchType_Type = sequenceMatchType_Type.sequenceRestrictedDeletion; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary sequenceMatchType_Type_sequencePermutation
 * @constant
 * @type {number}
 */
export
const sequenceMatchType_Type_sequencePermutation: sequenceMatchType_Type = sequenceMatchType_Type.sequencePermutation; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary sequencePermutation
 * @constant
 * @type {number}
 */
export
const sequencePermutation: sequenceMatchType_Type = sequenceMatchType_Type.sequencePermutation; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary sequenceMatchType_Type_sequencePermutationAndDeletion
 * @constant
 * @type {number}
 */
export
const sequenceMatchType_Type_sequencePermutationAndDeletion: sequenceMatchType_Type = sequenceMatchType_Type.sequencePermutationAndDeletion; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary sequencePermutationAndDeletion
 * @constant
 * @type {number}
 */
export
const sequencePermutationAndDeletion: sequenceMatchType_Type = sequenceMatchType_Type.sequencePermutationAndDeletion; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary sequenceMatchType_Type_sequenceProviderDefined
 * @constant
 * @type {number}
 */
export
const sequenceMatchType_Type_sequenceProviderDefined: sequenceMatchType_Type = sequenceMatchType_Type.sequenceProviderDefined; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary sequenceProviderDefined
 * @constant
 * @type {number}
 */
export
const sequenceProviderDefined: sequenceMatchType_Type = sequenceMatchType_Type.sequenceProviderDefined; /* SHORT_NAMED_ENUMERATED_VALUE */

export
const _decode_sequenceMatchType_Type: $.ASN1Decoder<sequenceMatchType_Type> = $._decodeEnumerated;

export
const _encode_sequenceMatchType_Type: $.ASN1Encoder<sequenceMatchType_Type> = $._encodeEnumerated;

/* eslint-enable */
