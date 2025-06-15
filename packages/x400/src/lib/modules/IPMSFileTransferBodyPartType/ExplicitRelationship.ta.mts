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
import * as $ from 'asn1-ts/dist/functional.mjs';

/* START_OF_SYMBOL_DEFINITION ExplicitRelationship */
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
/* END_OF_SYMBOL_DEFINITION ExplicitRelationship */

/* START_OF_SYMBOL_DEFINITION ExplicitRelationship_unspecified */
/**
 * @summary ExplicitRelationship_unspecified
 * @constant
 * @type {number}
 */
export const ExplicitRelationship_unspecified: ExplicitRelationship = 0; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION ExplicitRelationship_unspecified */

/* START_OF_SYMBOL_DEFINITION unspecified */
/**
 * @summary ExplicitRelationship_unspecified
 * @constant
 * @type {number}
 */
export const unspecified: ExplicitRelationship = ExplicitRelationship_unspecified; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION unspecified */

/* START_OF_SYMBOL_DEFINITION ExplicitRelationship_new_file */
/**
 * @summary ExplicitRelationship_new_file
 * @constant
 * @type {number}
 */
export const ExplicitRelationship_new_file: ExplicitRelationship = 1; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION ExplicitRelationship_new_file */

/* START_OF_SYMBOL_DEFINITION new_file */
/**
 * @summary ExplicitRelationship_new_file
 * @constant
 * @type {number}
 */
export const new_file: ExplicitRelationship = ExplicitRelationship_new_file; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION new_file */

/* START_OF_SYMBOL_DEFINITION ExplicitRelationship_replacement */
/**
 * @summary ExplicitRelationship_replacement
 * @constant
 * @type {number}
 */
export const ExplicitRelationship_replacement: ExplicitRelationship = 2; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION ExplicitRelationship_replacement */

/* START_OF_SYMBOL_DEFINITION replacement */
/**
 * @summary ExplicitRelationship_replacement
 * @constant
 * @type {number}
 */
export const replacement: ExplicitRelationship = ExplicitRelationship_replacement; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION replacement */

/* START_OF_SYMBOL_DEFINITION ExplicitRelationship_extension */
/**
 * @summary ExplicitRelationship_extension
 * @constant
 * @type {number}
 */
export const ExplicitRelationship_extension: ExplicitRelationship = 3; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION ExplicitRelationship_extension */

/* START_OF_SYMBOL_DEFINITION extension */
/**
 * @summary ExplicitRelationship_extension
 * @constant
 * @type {number}
 */
export const extension: ExplicitRelationship = ExplicitRelationship_extension; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION extension */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_ExplicitRelationship */
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_ExplicitRelationship */

/* START_OF_SYMBOL_DEFINITION _decode_ExplicitRelationship */
export const _decode_ExplicitRelationship = $._decodeInteger;
/* END_OF_SYMBOL_DEFINITION _decode_ExplicitRelationship */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_ExplicitRelationship */
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_ExplicitRelationship */

/* START_OF_SYMBOL_DEFINITION _encode_ExplicitRelationship */
export const _encode_ExplicitRelationship = $._encodeInteger;

/* END_OF_SYMBOL_DEFINITION _encode_ExplicitRelationship */

/* eslint-enable */
