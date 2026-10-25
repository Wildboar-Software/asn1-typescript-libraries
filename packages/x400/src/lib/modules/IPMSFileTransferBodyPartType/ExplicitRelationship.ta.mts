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
export const ExplicitRelationship_unspecified: 0 = 0 satisfies ExplicitRelationship; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ExplicitRelationship_unspecified
 * @constant
 * @type {number}
 */
export const unspecified: 0 = ExplicitRelationship_unspecified; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ExplicitRelationship_new_file
 * @constant
 * @type {number}
 */
export const ExplicitRelationship_new_file: 1 = 1 satisfies ExplicitRelationship; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ExplicitRelationship_new_file
 * @constant
 * @type {number}
 */
export const new_file: 1 = ExplicitRelationship_new_file; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ExplicitRelationship_replacement
 * @constant
 * @type {number}
 */
export const ExplicitRelationship_replacement: 2 = 2 satisfies ExplicitRelationship; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ExplicitRelationship_replacement
 * @constant
 * @type {number}
 */
export const replacement: 2 = ExplicitRelationship_replacement; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ExplicitRelationship_extension
 * @constant
 * @type {number}
 */
export const ExplicitRelationship_extension: 3 = 3 satisfies ExplicitRelationship; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ExplicitRelationship_extension
 * @constant
 * @type {number}
 */
export const extension: 3 = ExplicitRelationship_extension; /* SHORT_NAMED_INTEGER_VALUE */


export const _decode_ExplicitRelationship: $.ASN1Decoder<INTEGER> = $._decodeInteger;


export const _encode_ExplicitRelationship: $.ASN1Encoder<INTEGER> = $._encodeInteger;


/* eslint-enable */
