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
 * @summary ExplicitConversion
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ExplicitConversion  ::=  INTEGER {
 *   ia5-text-to-teletex(0),
 *   -- values 1 to 7 are no longer defined
 *   ia5-text-to-g3-facsimile(8), ia5-text-to-g4-class-1(9),
 *   ia5-text-to-videotex(10), teletex-to-ia5-text(11),
 *   teletex-to-g3-facsimile(12), teletex-to-g4-class-1(13),
 *   teletex-to-videotex(14),
 *   -- value 15 is no longer defined
 *   videotex-to-ia5-text(16), videotex-to-teletex(17)}(0..ub-integer-options)
 * ```
 */
export type ExplicitConversion = INTEGER;

/**
 * @summary ExplicitConversion_ia5_text_to_teletex
 * @constant
 * @type {number}
 */
export const ExplicitConversion_ia5_text_to_teletex: ExplicitConversion = 0; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ExplicitConversion_ia5_text_to_teletex
 * @constant
 * @type {number}
 */
export const ia5_text_to_teletex: ExplicitConversion = ExplicitConversion_ia5_text_to_teletex; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ExplicitConversion_ia5_text_to_g3_facsimile
 * @constant
 * @type {number}
 */
export const ExplicitConversion_ia5_text_to_g3_facsimile: ExplicitConversion = 8; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ExplicitConversion_ia5_text_to_g3_facsimile
 * @constant
 * @type {number}
 */
export const ia5_text_to_g3_facsimile: ExplicitConversion = ExplicitConversion_ia5_text_to_g3_facsimile; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ExplicitConversion_ia5_text_to_g4_class_1
 * @constant
 * @type {number}
 */
export const ExplicitConversion_ia5_text_to_g4_class_1: ExplicitConversion = 9; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ExplicitConversion_ia5_text_to_g4_class_1
 * @constant
 * @type {number}
 */
export const ia5_text_to_g4_class_1: ExplicitConversion = ExplicitConversion_ia5_text_to_g4_class_1; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ExplicitConversion_ia5_text_to_videotex
 * @constant
 * @type {number}
 */
export const ExplicitConversion_ia5_text_to_videotex: ExplicitConversion = 10; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ExplicitConversion_ia5_text_to_videotex
 * @constant
 * @type {number}
 */
export const ia5_text_to_videotex: ExplicitConversion = ExplicitConversion_ia5_text_to_videotex; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ExplicitConversion_teletex_to_ia5_text
 * @constant
 * @type {number}
 */
export const ExplicitConversion_teletex_to_ia5_text: ExplicitConversion = 11; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ExplicitConversion_teletex_to_ia5_text
 * @constant
 * @type {number}
 */
export const teletex_to_ia5_text: ExplicitConversion = ExplicitConversion_teletex_to_ia5_text; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ExplicitConversion_teletex_to_g3_facsimile
 * @constant
 * @type {number}
 */
export const ExplicitConversion_teletex_to_g3_facsimile: ExplicitConversion = 12; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ExplicitConversion_teletex_to_g3_facsimile
 * @constant
 * @type {number}
 */
export const teletex_to_g3_facsimile: ExplicitConversion = ExplicitConversion_teletex_to_g3_facsimile; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ExplicitConversion_teletex_to_g4_class_1
 * @constant
 * @type {number}
 */
export const ExplicitConversion_teletex_to_g4_class_1: ExplicitConversion = 13; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ExplicitConversion_teletex_to_g4_class_1
 * @constant
 * @type {number}
 */
export const teletex_to_g4_class_1: ExplicitConversion = ExplicitConversion_teletex_to_g4_class_1; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ExplicitConversion_teletex_to_videotex
 * @constant
 * @type {number}
 */
export const ExplicitConversion_teletex_to_videotex: ExplicitConversion = 14; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ExplicitConversion_teletex_to_videotex
 * @constant
 * @type {number}
 */
export const teletex_to_videotex: ExplicitConversion = ExplicitConversion_teletex_to_videotex; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ExplicitConversion_videotex_to_ia5_text
 * @constant
 * @type {number}
 */
export const ExplicitConversion_videotex_to_ia5_text: ExplicitConversion = 16; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ExplicitConversion_videotex_to_ia5_text
 * @constant
 * @type {number}
 */
export const videotex_to_ia5_text: ExplicitConversion = ExplicitConversion_videotex_to_ia5_text; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ExplicitConversion_videotex_to_teletex
 * @constant
 * @type {number}
 */
export const ExplicitConversion_videotex_to_teletex: ExplicitConversion = 17; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ExplicitConversion_videotex_to_teletex
 * @constant
 * @type {number}
 */
export const videotex_to_teletex: ExplicitConversion = ExplicitConversion_videotex_to_teletex; /* SHORT_NAMED_INTEGER_VALUE */


export const _decode_ExplicitConversion = $._decodeInteger;


export const _encode_ExplicitConversion = $._encodeInteger;


/* eslint-enable */
