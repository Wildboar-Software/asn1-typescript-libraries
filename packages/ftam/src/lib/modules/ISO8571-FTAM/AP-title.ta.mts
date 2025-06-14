/* eslint-disable */
import {
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

/* START_OF_SYMBOL_DEFINITION AP_title */
/**
 * @summary AP_title
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * AP-title  ::=  TYPE-IDENTIFIER.&Type
 * ```
 */
export type AP_title = _Element; // ObjectClassFieldType
/* END_OF_SYMBOL_DEFINITION AP_title */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_AP_title */
let _cached_decoder_for_AP_title: $.ASN1Decoder<AP_title> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_AP_title */

/* START_OF_SYMBOL_DEFINITION _decode_AP_title */
/**
 * @summary Decodes an ASN.1 element into a(n) AP_title
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {AP_title} The decoded data structure.
 */
export function _decode_AP_title(el: _Element) {
  if (!_cached_decoder_for_AP_title) {
    _cached_decoder_for_AP_title = $._decodeAny;
  }
  return _cached_decoder_for_AP_title(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_AP_title */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_AP_title */
let _cached_encoder_for_AP_title: $.ASN1Encoder<AP_title> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_AP_title */

/* START_OF_SYMBOL_DEFINITION _encode_AP_title */
/**
 * @summary Encodes a(n) AP_title into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AP_title, encoded as an ASN.1 Element.
 */
export function _encode_AP_title(
  value: AP_title,
  elGetter: $.ASN1Encoder<AP_title>
) {
  if (!_cached_encoder_for_AP_title) {
    _cached_encoder_for_AP_title = $._encodeAny;
  }
  return _cached_encoder_for_AP_title(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_AP_title */

/* eslint-enable */
