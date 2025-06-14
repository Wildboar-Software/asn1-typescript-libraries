/* eslint-disable */
import {
  BIT_STRING,
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

/* START_OF_SYMBOL_DEFINITION Relational_Comparision */
/**
 * @summary Relational_Comparision
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * Relational-Comparision  ::=  BIT STRING {
 *   no-value-available-matches(0),
 *   -- Set impies No Value Available matches the test.
 *   -- Clear implies No Value Available fails the test.
 *   equals-matches(1),
 *   -- Set implies equal items match the test.
 *   -- Clear implies equal items fail the test.
 *   less-than-matches(2),
 *   -- Set implies a value less than the test cke matches.
 *   -- Clear implies a value less than the test case fails.
 *   greater-than-matches(3)
 *
 * -- Set implies a value greater than the test case matches.
 * -- Clear implies a value greater than the test case fails.
 * }
 * ```
 */
export type Relational_Comparision = BIT_STRING;
/* END_OF_SYMBOL_DEFINITION Relational_Comparision */

/* START_OF_SYMBOL_DEFINITION Relational_Comparision_no_value_available_matches */
/**
 * @summary Relational_Comparision_no_value_available_matches
 * @constant
 */
export const Relational_Comparision_no_value_available_matches: number = 0; /* LONG_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION Relational_Comparision_no_value_available_matches */

/* START_OF_SYMBOL_DEFINITION no_value_available_matches */
/**
 * @summary no_value_available_matches
 * @constant
 */
export const no_value_available_matches: number = Relational_Comparision_no_value_available_matches; /* SHORT_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION no_value_available_matches */

/* START_OF_SYMBOL_DEFINITION Relational_Comparision_equals_matches */
/**
 * @summary Relational_Comparision_equals_matches
 * @constant
 */
export const Relational_Comparision_equals_matches: number = 1; /* LONG_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION Relational_Comparision_equals_matches */

/* START_OF_SYMBOL_DEFINITION equals_matches */
/**
 * @summary equals_matches
 * @constant
 */
export const equals_matches: number = Relational_Comparision_equals_matches; /* SHORT_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION equals_matches */

/* START_OF_SYMBOL_DEFINITION Relational_Comparision_less_than_matches */
/**
 * @summary Relational_Comparision_less_than_matches
 * @constant
 */
export const Relational_Comparision_less_than_matches: number = 2; /* LONG_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION Relational_Comparision_less_than_matches */

/* START_OF_SYMBOL_DEFINITION less_than_matches */
/**
 * @summary less_than_matches
 * @constant
 */
export const less_than_matches: number = Relational_Comparision_less_than_matches; /* SHORT_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION less_than_matches */

/* START_OF_SYMBOL_DEFINITION Relational_Comparision_greater_than_matches */
/**
 * @summary Relational_Comparision_greater_than_matches
 * @constant
 */
export const Relational_Comparision_greater_than_matches: number = 3; /* LONG_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION Relational_Comparision_greater_than_matches */

/* START_OF_SYMBOL_DEFINITION greater_than_matches */
/**
 * @summary greater_than_matches
 * @constant
 */
export const greater_than_matches: number = Relational_Comparision_greater_than_matches; /* SHORT_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION greater_than_matches */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_Relational_Comparision */
let _cached_decoder_for_Relational_Comparision: $.ASN1Decoder<Relational_Comparision> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_Relational_Comparision */

/* START_OF_SYMBOL_DEFINITION _decode_Relational_Comparision */
/**
 * @summary Decodes an ASN.1 element into a(n) Relational_Comparision
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {Relational_Comparision} The decoded data structure.
 */
export function _decode_Relational_Comparision(el: _Element) {
  if (!_cached_decoder_for_Relational_Comparision) {
    _cached_decoder_for_Relational_Comparision = $._decodeBitString;
  }
  return _cached_decoder_for_Relational_Comparision(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_Relational_Comparision */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_Relational_Comparision */
let _cached_encoder_for_Relational_Comparision: $.ASN1Encoder<Relational_Comparision> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_Relational_Comparision */

/* START_OF_SYMBOL_DEFINITION _encode_Relational_Comparision */
/**
 * @summary Encodes a(n) Relational_Comparision into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Relational_Comparision, encoded as an ASN.1 Element.
 */
export function _encode_Relational_Comparision(
  value: Relational_Comparision,
  elGetter: $.ASN1Encoder<Relational_Comparision>
) {
  if (!_cached_encoder_for_Relational_Comparision) {
    _cached_encoder_for_Relational_Comparision = $._encodeBitString;
  }
  return _cached_encoder_for_Relational_Comparision(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_Relational_Comparision */

/* eslint-enable */
