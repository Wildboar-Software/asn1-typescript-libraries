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

/* START_OF_SYMBOL_DEFINITION Equality_Comparision */
/**
 * @summary Equality_Comparision
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * Equality-Comparision  ::=  BIT STRING {
 *   no-value-available-matches(0),
 *   -- Set impies No Value Available matches the test.
 *   -- Clear implies No Value Availabie fails the test.
 *   equals-matches(1)
 *
 * -- Set implies equal items match the test.
 * -- Clear implies equal items fail the test.
 * }
 * ```
 */
export type Equality_Comparision = BIT_STRING;
/* END_OF_SYMBOL_DEFINITION Equality_Comparision */

/* START_OF_SYMBOL_DEFINITION Equality_Comparision_no_value_available_matches */
/**
 * @summary Equality_Comparision_no_value_available_matches
 * @constant
 */
export const Equality_Comparision_no_value_available_matches: number = 0; /* LONG_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION Equality_Comparision_no_value_available_matches */

/* START_OF_SYMBOL_DEFINITION no_value_available_matches */
/**
 * @summary no_value_available_matches
 * @constant
 */
export const no_value_available_matches: number = Equality_Comparision_no_value_available_matches; /* SHORT_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION no_value_available_matches */

/* START_OF_SYMBOL_DEFINITION Equality_Comparision_equals_matches */
/**
 * @summary Equality_Comparision_equals_matches
 * @constant
 */
export const Equality_Comparision_equals_matches: number = 1; /* LONG_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION Equality_Comparision_equals_matches */

/* START_OF_SYMBOL_DEFINITION equals_matches */
/**
 * @summary equals_matches
 * @constant
 */
export const equals_matches: number = Equality_Comparision_equals_matches; /* SHORT_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION equals_matches */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_Equality_Comparision */
let _cached_decoder_for_Equality_Comparision: $.ASN1Decoder<Equality_Comparision> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_Equality_Comparision */

/* START_OF_SYMBOL_DEFINITION _decode_Equality_Comparision */
/**
 * @summary Decodes an ASN.1 element into a(n) Equality_Comparision
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {Equality_Comparision} The decoded data structure.
 */
export function _decode_Equality_Comparision(el: _Element) {
  if (!_cached_decoder_for_Equality_Comparision) {
    _cached_decoder_for_Equality_Comparision = $._decodeBitString;
  }
  return _cached_decoder_for_Equality_Comparision(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_Equality_Comparision */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_Equality_Comparision */
let _cached_encoder_for_Equality_Comparision: $.ASN1Encoder<Equality_Comparision> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_Equality_Comparision */

/* START_OF_SYMBOL_DEFINITION _encode_Equality_Comparision */
/**
 * @summary Encodes a(n) Equality_Comparision into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Equality_Comparision, encoded as an ASN.1 Element.
 */
export function _encode_Equality_Comparision(
  value: Equality_Comparision,
  elGetter: $.ASN1Encoder<Equality_Comparision>
) {
  if (!_cached_encoder_for_Equality_Comparision) {
    _cached_encoder_for_Equality_Comparision = $._encodeBitString;
  }
  return _cached_encoder_for_Equality_Comparision(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_Equality_Comparision */

/* eslint-enable */
