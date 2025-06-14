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

/* START_OF_SYMBOL_DEFINITION Access_Context_access_context */
/**
 * @summary Access_Context_access_context
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * Access-Context-access-context ::= INTEGER { -- REMOVED_FROM_UNNESTING -- }
 * ```
 */
export type Access_Context_access_context = INTEGER;
/* END_OF_SYMBOL_DEFINITION Access_Context_access_context */

/* START_OF_SYMBOL_DEFINITION Access_Context_access_context_hierarchical_all_data_units */
/**
 * @summary Access_Context_access_context_hierarchical_all_data_units
 * @constant
 * @type {number}
 */
export const Access_Context_access_context_hierarchical_all_data_units: Access_Context_access_context = 0; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION Access_Context_access_context_hierarchical_all_data_units */

/* START_OF_SYMBOL_DEFINITION hierarchical_all_data_units */
/**
 * @summary Access_Context_access_context_hierarchical_all_data_units
 * @constant
 * @type {number}
 */
export const hierarchical_all_data_units: Access_Context_access_context = Access_Context_access_context_hierarchical_all_data_units; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION hierarchical_all_data_units */

/* START_OF_SYMBOL_DEFINITION Access_Context_access_context_hierarchical_no_data_units */
/**
 * @summary Access_Context_access_context_hierarchical_no_data_units
 * @constant
 * @type {number}
 */
export const Access_Context_access_context_hierarchical_no_data_units: Access_Context_access_context = 1; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION Access_Context_access_context_hierarchical_no_data_units */

/* START_OF_SYMBOL_DEFINITION hierarchical_no_data_units */
/**
 * @summary Access_Context_access_context_hierarchical_no_data_units
 * @constant
 * @type {number}
 */
export const hierarchical_no_data_units: Access_Context_access_context = Access_Context_access_context_hierarchical_no_data_units; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION hierarchical_no_data_units */

/* START_OF_SYMBOL_DEFINITION Access_Context_access_context_flat_all_data_units */
/**
 * @summary Access_Context_access_context_flat_all_data_units
 * @constant
 * @type {number}
 */
export const Access_Context_access_context_flat_all_data_units: Access_Context_access_context = 2; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION Access_Context_access_context_flat_all_data_units */

/* START_OF_SYMBOL_DEFINITION flat_all_data_units */
/**
 * @summary Access_Context_access_context_flat_all_data_units
 * @constant
 * @type {number}
 */
export const flat_all_data_units: Access_Context_access_context = Access_Context_access_context_flat_all_data_units; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION flat_all_data_units */

/* START_OF_SYMBOL_DEFINITION Access_Context_access_context_flat_one_level_data_unit */
/**
 * @summary Access_Context_access_context_flat_one_level_data_unit
 * @constant
 * @type {number}
 */
export const Access_Context_access_context_flat_one_level_data_unit: Access_Context_access_context = 3; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION Access_Context_access_context_flat_one_level_data_unit */

/* START_OF_SYMBOL_DEFINITION flat_one_level_data_unit */
/**
 * @summary Access_Context_access_context_flat_one_level_data_unit
 * @constant
 * @type {number}
 */
export const flat_one_level_data_unit: Access_Context_access_context = Access_Context_access_context_flat_one_level_data_unit; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION flat_one_level_data_unit */

/* START_OF_SYMBOL_DEFINITION Access_Context_access_context_flat_Single_data_unit */
/**
 * @summary Access_Context_access_context_flat_Single_data_unit
 * @constant
 * @type {number}
 */
export const Access_Context_access_context_flat_Single_data_unit: Access_Context_access_context = 4; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION Access_Context_access_context_flat_Single_data_unit */

/* START_OF_SYMBOL_DEFINITION flat_Single_data_unit */
/**
 * @summary Access_Context_access_context_flat_Single_data_unit
 * @constant
 * @type {number}
 */
export const flat_Single_data_unit: Access_Context_access_context = Access_Context_access_context_flat_Single_data_unit; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION flat_Single_data_unit */

/* START_OF_SYMBOL_DEFINITION Access_Context_access_context_unstructured_all_data_units */
/**
 * @summary Access_Context_access_context_unstructured_all_data_units
 * @constant
 * @type {number}
 */
export const Access_Context_access_context_unstructured_all_data_units: Access_Context_access_context = 5; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION Access_Context_access_context_unstructured_all_data_units */

/* START_OF_SYMBOL_DEFINITION unstructured_all_data_units */
/**
 * @summary Access_Context_access_context_unstructured_all_data_units
 * @constant
 * @type {number}
 */
export const unstructured_all_data_units: Access_Context_access_context = Access_Context_access_context_unstructured_all_data_units; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION unstructured_all_data_units */

/* START_OF_SYMBOL_DEFINITION Access_Context_access_context_unstructured_Single_data_unit */
/**
 * @summary Access_Context_access_context_unstructured_Single_data_unit
 * @constant
 * @type {number}
 */
export const Access_Context_access_context_unstructured_Single_data_unit: Access_Context_access_context = 6; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION Access_Context_access_context_unstructured_Single_data_unit */

/* START_OF_SYMBOL_DEFINITION unstructured_Single_data_unit */
/**
 * @summary Access_Context_access_context_unstructured_Single_data_unit
 * @constant
 * @type {number}
 */
export const unstructured_Single_data_unit: Access_Context_access_context = Access_Context_access_context_unstructured_Single_data_unit; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION unstructured_Single_data_unit */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_Access_Context_access_context */
let _cached_decoder_for_Access_Context_access_context: $.ASN1Decoder<Access_Context_access_context> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_Access_Context_access_context */

/* START_OF_SYMBOL_DEFINITION _decode_Access_Context_access_context */
/**
 * @summary Decodes an ASN.1 element into a(n) Access_Context_access_context
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {Access_Context_access_context} The decoded data structure.
 */
export function _decode_Access_Context_access_context(el: _Element) {
  if (!_cached_decoder_for_Access_Context_access_context) {
    _cached_decoder_for_Access_Context_access_context = $._decodeInteger;
  }
  return _cached_decoder_for_Access_Context_access_context(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_Access_Context_access_context */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_Access_Context_access_context */
let _cached_encoder_for_Access_Context_access_context: $.ASN1Encoder<Access_Context_access_context> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_Access_Context_access_context */

/* START_OF_SYMBOL_DEFINITION _encode_Access_Context_access_context */
/**
 * @summary Encodes a(n) Access_Context_access_context into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Access_Context_access_context, encoded as an ASN.1 Element.
 */
export function _encode_Access_Context_access_context(
  value: Access_Context_access_context,
  elGetter: $.ASN1Encoder<Access_Context_access_context>
) {
  if (!_cached_encoder_for_Access_Context_access_context) {
    _cached_encoder_for_Access_Context_access_context = $._encodeInteger;
  }
  return _cached_encoder_for_Access_Context_access_context(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_Access_Context_access_context */

/* eslint-enable */
