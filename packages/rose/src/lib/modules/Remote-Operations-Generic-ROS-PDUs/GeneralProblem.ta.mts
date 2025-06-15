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

/* START_OF_SYMBOL_DEFINITION GeneralProblem */
/**
 * @summary GeneralProblem
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * GeneralProblem  ::=  INTEGER {
 *   unrecognizedPDU(0), mistypedPDU(1), badlyStructuredPDU(2)}
 * ```
 */
export type GeneralProblem = INTEGER;
/* END_OF_SYMBOL_DEFINITION GeneralProblem */

/* START_OF_SYMBOL_DEFINITION GeneralProblem_unrecognizedPDU */
/**
 * @summary GeneralProblem_unrecognizedPDU
 * @constant
 * @type {number}
 */
export const GeneralProblem_unrecognizedPDU: GeneralProblem = 0; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION GeneralProblem_unrecognizedPDU */

/* START_OF_SYMBOL_DEFINITION unrecognizedPDU */
/**
 * @summary GeneralProblem_unrecognizedPDU
 * @constant
 * @type {number}
 */
export const unrecognizedPDU: GeneralProblem = GeneralProblem_unrecognizedPDU; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION unrecognizedPDU */

/* START_OF_SYMBOL_DEFINITION GeneralProblem_mistypedPDU */
/**
 * @summary GeneralProblem_mistypedPDU
 * @constant
 * @type {number}
 */
export const GeneralProblem_mistypedPDU: GeneralProblem = 1; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION GeneralProblem_mistypedPDU */

/* START_OF_SYMBOL_DEFINITION mistypedPDU */
/**
 * @summary GeneralProblem_mistypedPDU
 * @constant
 * @type {number}
 */
export const mistypedPDU: GeneralProblem = GeneralProblem_mistypedPDU; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION mistypedPDU */

/* START_OF_SYMBOL_DEFINITION GeneralProblem_badlyStructuredPDU */
/**
 * @summary GeneralProblem_badlyStructuredPDU
 * @constant
 * @type {number}
 */
export const GeneralProblem_badlyStructuredPDU: GeneralProblem = 2; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION GeneralProblem_badlyStructuredPDU */

/* START_OF_SYMBOL_DEFINITION badlyStructuredPDU */
/**
 * @summary GeneralProblem_badlyStructuredPDU
 * @constant
 * @type {number}
 */
export const badlyStructuredPDU: GeneralProblem = GeneralProblem_badlyStructuredPDU; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION badlyStructuredPDU */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_GeneralProblem */
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_GeneralProblem */

/* START_OF_SYMBOL_DEFINITION _decode_GeneralProblem */
export const _decode_GeneralProblem = $._decodeInteger;
/* END_OF_SYMBOL_DEFINITION _decode_GeneralProblem */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_GeneralProblem */
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_GeneralProblem */

/* START_OF_SYMBOL_DEFINITION _encode_GeneralProblem */
export const _encode_GeneralProblem = $._encodeInteger;

/* END_OF_SYMBOL_DEFINITION _encode_GeneralProblem */

/* eslint-enable */
