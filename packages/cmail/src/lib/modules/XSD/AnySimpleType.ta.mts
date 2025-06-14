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
import {
  XMLCompatibleString,
  _decode_XMLCompatibleString,
  _encode_XMLCompatibleString,
} from '../XSD/XMLCompatibleString.ta.mjs';
/* START_OF_SYMBOL_DEFINITION AnySimpleType */
/**
 * @summary AnySimpleType
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * AnySimpleType  ::=  XMLCompatibleString
 * ```
 */
export type AnySimpleType = XMLCompatibleString; // DefinedType
/* END_OF_SYMBOL_DEFINITION AnySimpleType */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_AnySimpleType */
let _cached_decoder_for_AnySimpleType: $.ASN1Decoder<AnySimpleType> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_AnySimpleType */

/* START_OF_SYMBOL_DEFINITION _decode_AnySimpleType */
/**
 * @summary Decodes an ASN.1 element into a(n) AnySimpleType
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {AnySimpleType} The decoded data structure.
 */
export function _decode_AnySimpleType(el: _Element) {
  if (!_cached_decoder_for_AnySimpleType) {
    _cached_decoder_for_AnySimpleType = _decode_XMLCompatibleString;
  }
  return _cached_decoder_for_AnySimpleType(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_AnySimpleType */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_AnySimpleType */
let _cached_encoder_for_AnySimpleType: $.ASN1Encoder<AnySimpleType> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_AnySimpleType */

/* START_OF_SYMBOL_DEFINITION _encode_AnySimpleType */
/**
 * @summary Encodes a(n) AnySimpleType into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AnySimpleType, encoded as an ASN.1 Element.
 */
export function _encode_AnySimpleType(
  value: AnySimpleType,
  elGetter: $.ASN1Encoder<AnySimpleType>
) {
  if (!_cached_encoder_for_AnySimpleType) {
    _cached_encoder_for_AnySimpleType = _encode_XMLCompatibleString;
  }
  return _cached_encoder_for_AnySimpleType(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_AnySimpleType */

/* eslint-enable */
