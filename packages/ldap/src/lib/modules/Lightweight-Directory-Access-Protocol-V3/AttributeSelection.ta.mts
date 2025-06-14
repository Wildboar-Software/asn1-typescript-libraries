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
  LDAPString,
  _decode_LDAPString,
  _encode_LDAPString,
} from '../Lightweight-Directory-Access-Protocol-V3/LDAPString.ta.mjs';
/* START_OF_SYMBOL_DEFINITION AttributeSelection */
/**
 * @summary AttributeSelection
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * AttributeSelection  ::=  SEQUENCE OF selector LDAPString
 * ```
 */
export type AttributeSelection = LDAPString[]; // SequenceOfType
/* END_OF_SYMBOL_DEFINITION AttributeSelection */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_AttributeSelection */
let _cached_decoder_for_AttributeSelection: $.ASN1Decoder<AttributeSelection> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_AttributeSelection */

/* START_OF_SYMBOL_DEFINITION _decode_AttributeSelection */
/**
 * @summary Decodes an ASN.1 element into a(n) AttributeSelection
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {AttributeSelection} The decoded data structure.
 */
export function _decode_AttributeSelection(el: _Element) {
  if (!_cached_decoder_for_AttributeSelection) {
    _cached_decoder_for_AttributeSelection = $._decodeSequenceOf<LDAPString>(
      () => _decode_LDAPString
    );
  }
  return _cached_decoder_for_AttributeSelection(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_AttributeSelection */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_AttributeSelection */
let _cached_encoder_for_AttributeSelection: $.ASN1Encoder<AttributeSelection> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_AttributeSelection */

/* START_OF_SYMBOL_DEFINITION _encode_AttributeSelection */
/**
 * @summary Encodes a(n) AttributeSelection into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AttributeSelection, encoded as an ASN.1 Element.
 */
export function _encode_AttributeSelection(
  value: AttributeSelection,
  elGetter: $.ASN1Encoder<AttributeSelection>
) {
  if (!_cached_encoder_for_AttributeSelection) {
    _cached_encoder_for_AttributeSelection = $._encodeSequenceOf<LDAPString>(
      () => _encode_LDAPString,
      $.BER
    );
  }
  return _cached_encoder_for_AttributeSelection(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_AttributeSelection */

/* eslint-enable */
