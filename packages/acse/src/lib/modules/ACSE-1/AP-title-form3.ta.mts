/* eslint-disable */
import {
  PrintableString,
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

/* START_OF_SYMBOL_DEFINITION AP_title_form3 */
/**
 * @summary AP_title_form3
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * AP-title-form3  ::=  PrintableString
 * ```
 */
export type AP_title_form3 = PrintableString; // PrintableString
/* END_OF_SYMBOL_DEFINITION AP_title_form3 */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_AP_title_form3 */
let _cached_decoder_for_AP_title_form3: $.ASN1Decoder<AP_title_form3> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_AP_title_form3 */

/* START_OF_SYMBOL_DEFINITION _decode_AP_title_form3 */
/**
 * @summary Decodes an ASN.1 element into a(n) AP_title_form3
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {AP_title_form3} The decoded data structure.
 */
export function _decode_AP_title_form3(el: _Element) {
  if (!_cached_decoder_for_AP_title_form3) {
    _cached_decoder_for_AP_title_form3 = $._decodePrintableString;
  }
  return _cached_decoder_for_AP_title_form3(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_AP_title_form3 */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_AP_title_form3 */
let _cached_encoder_for_AP_title_form3: $.ASN1Encoder<AP_title_form3> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_AP_title_form3 */

/* START_OF_SYMBOL_DEFINITION _encode_AP_title_form3 */
/**
 * @summary Encodes a(n) AP_title_form3 into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AP_title_form3, encoded as an ASN.1 Element.
 */
export function _encode_AP_title_form3(
  value: AP_title_form3,
  elGetter: $.ASN1Encoder<AP_title_form3>
) {
  if (!_cached_encoder_for_AP_title_form3) {
    _cached_encoder_for_AP_title_form3 = $._encodePrintableString;
  }
  return _cached_encoder_for_AP_title_form3(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_AP_title_form3 */

/* eslint-enable */
