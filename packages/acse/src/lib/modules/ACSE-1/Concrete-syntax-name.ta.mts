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
  Transfer_syntax_name,
  _decode_Transfer_syntax_name,
  _encode_Transfer_syntax_name,
} from '../ACSE-1/Transfer-syntax-name.ta.mjs';
/**
 * @summary Concrete_syntax_name
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * Concrete-syntax-name  ::=  Transfer-syntax-name
 * ```
 */
export type Concrete_syntax_name = Transfer_syntax_name; // DefinedType

let _cached_decoder_for_Concrete_syntax_name: $.ASN1Decoder<Concrete_syntax_name> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) Concrete_syntax_name
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {Concrete_syntax_name} The decoded data structure.
 */
export function _decode_Concrete_syntax_name(el: _Element) {
  if (!_cached_decoder_for_Concrete_syntax_name) {
    _cached_decoder_for_Concrete_syntax_name = _decode_Transfer_syntax_name;
  }
  return _cached_decoder_for_Concrete_syntax_name(el);
}

let _cached_encoder_for_Concrete_syntax_name: $.ASN1Encoder<Concrete_syntax_name> | null = null;

/**
 * @summary Encodes a(n) Concrete_syntax_name into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Concrete_syntax_name, encoded as an ASN.1 Element.
 */
export function _encode_Concrete_syntax_name(
  value: Concrete_syntax_name,
  elGetter: $.ASN1Encoder<Concrete_syntax_name>
) {
  if (!_cached_encoder_for_Concrete_syntax_name) {
    _cached_encoder_for_Concrete_syntax_name = _encode_Transfer_syntax_name;
  }
  return _cached_encoder_for_Concrete_syntax_name(value, elGetter);
}


/* eslint-enable */
