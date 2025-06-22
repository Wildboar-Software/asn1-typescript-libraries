/* eslint-disable */
import {
    INTEGER,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1Construction as _Construction,
    ASN1UniversalType as _UniversalType,
    ObjectIdentifier as _OID,
    External as _External,
    EmbeddedPDV as _PDV,
    ASN1ConstructionError as _ConstructionError,
} from 'asn1-ts';
import * as $ from '@wildboar/asn1/functional';

/**
 * @summary ExplicitRelationship
 * @description
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
export const ExplicitRelationship_unspecified: ExplicitRelationship = 0; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ExplicitRelationship_unspecified
 * @constant
 * @type {number}
 */
export const unspecified: ExplicitRelationship = ExplicitRelationship_unspecified; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ExplicitRelationship_new_file
 * @constant
 * @type {number}
 */
export const ExplicitRelationship_new_file: ExplicitRelationship = 1; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ExplicitRelationship_new_file
 * @constant
 * @type {number}
 */
export const new_file: ExplicitRelationship = ExplicitRelationship_new_file; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ExplicitRelationship_replacement
 * @constant
 * @type {number}
 */
export const ExplicitRelationship_replacement: ExplicitRelationship = 2; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ExplicitRelationship_replacement
 * @constant
 * @type {number}
 */
export const replacement: ExplicitRelationship = ExplicitRelationship_replacement; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ExplicitRelationship_extension
 * @constant
 * @type {number}
 */
export const ExplicitRelationship_extension: ExplicitRelationship = 3; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ExplicitRelationship_extension
 * @constant
 * @type {number}
 */
export const extension: ExplicitRelationship = ExplicitRelationship_extension; /* SHORT_NAMED_INTEGER_VALUE */


export const _decode_ExplicitRelationship = $._decodeInteger;


export const _encode_ExplicitRelationship = $._encodeInteger;


/* eslint-enable */
