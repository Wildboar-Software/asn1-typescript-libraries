/* eslint-disable */
import {
  OBJECT_IDENTIFIER,
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

/* START_OF_SYMBOL_DEFINITION AP_title_form2 */
/**
 * @summary AP_title_form2
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * AP-title-form2  ::=  OBJECT IDENTIFIER
 * ```
 */
export type AP_title_form2 = OBJECT_IDENTIFIER; // ObjectIdentifierType
/* END_OF_SYMBOL_DEFINITION AP_title_form2 */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_AP_title_form2 */
let _cached_decoder_for_AP_title_form2: $.ASN1Decoder<AP_title_form2> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_AP_title_form2 */

/* START_OF_SYMBOL_DEFINITION _decode_AP_title_form2 */
/**
 * @summary Decodes an ASN.1 element into a(n) AP_title_form2
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {AP_title_form2} The decoded data structure.
 */
export function _decode_AP_title_form2(el: _Element) {
  if (!_cached_decoder_for_AP_title_form2) {
    _cached_decoder_for_AP_title_form2 = $._decodeObjectIdentifier;
  }
  return _cached_decoder_for_AP_title_form2(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_AP_title_form2 */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_AP_title_form2 */
let _cached_encoder_for_AP_title_form2: $.ASN1Encoder<AP_title_form2> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_AP_title_form2 */

/* START_OF_SYMBOL_DEFINITION _encode_AP_title_form2 */
/**
 * @summary Encodes a(n) AP_title_form2 into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AP_title_form2, encoded as an ASN.1 Element.
 */
export function _encode_AP_title_form2(
  value: AP_title_form2,
  elGetter: $.ASN1Encoder<AP_title_form2>
) {
  if (!_cached_encoder_for_AP_title_form2) {
    _cached_encoder_for_AP_title_form2 = $._encodeObjectIdentifier;
  }
  return _cached_encoder_for_AP_title_form2(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_AP_title_form2 */

/* eslint-enable */
