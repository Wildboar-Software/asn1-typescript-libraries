/* eslint-disable */
import {
    type INTEGER,
    type ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1Construction as _Construction,
    ASN1UniversalType as _UniversalType,
    ObjectIdentifier as _OID,
    External as _External,
    EmbeddedPDV as _PDV,
    ASN1ConstructionError as _ConstructionError,
} from '@wildboar/asn1';
import * as $ from '@wildboar/asn1/functional';

/**
 * @summary ExplicitRelationship
 * @description
 *
 * Defined in ITU-T X.420 (1999) (Annex C).
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ExplicitRelationship  ::=  INTEGER {
 *   unspecified(0), new-file(1), replacement(2), extension(3)}
 * ```
 */
export type ExplicitRelationship = INTEGER;

/**
 * @summary ExplicitRelationship_unspecified
 * @constant
 * @type {number}
 */
export const ExplicitRelationship_unspecified = 0 satisfies ExplicitRelationship; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ExplicitRelationship_unspecified
 * @constant
 * @type {number}
 */
export const unspecified = ExplicitRelationship_unspecified satisfies ExplicitRelationship; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ExplicitRelationship_new_file
 * @constant
 * @type {number}
 */
export const ExplicitRelationship_new_file = 1 satisfies ExplicitRelationship; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ExplicitRelationship_new_file
 * @constant
 * @type {number}
 */
export const new_file = ExplicitRelationship_new_file satisfies ExplicitRelationship; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ExplicitRelationship_replacement
 * @constant
 * @type {number}
 */
export const ExplicitRelationship_replacement = 2 satisfies ExplicitRelationship; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ExplicitRelationship_replacement
 * @constant
 * @type {number}
 */
export const replacement = ExplicitRelationship_replacement satisfies ExplicitRelationship; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ExplicitRelationship_extension
 * @constant
 * @type {number}
 */
export const ExplicitRelationship_extension = 3 satisfies ExplicitRelationship; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ExplicitRelationship_extension
 * @constant
 * @type {number}
 */
export const extension = ExplicitRelationship_extension satisfies ExplicitRelationship; /* SHORT_NAMED_INTEGER_VALUE */


export const _decode_ExplicitRelationship = $._decodeInteger;


export const _encode_ExplicitRelationship = $._encodeInteger;


/* eslint-enable */
