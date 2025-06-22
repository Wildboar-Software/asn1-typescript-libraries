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
import * as $ from '@wildboar/asn1/functional';
import {
  ASO_context_name,
  _decode_ASO_context_name,
  _encode_ASO_context_name,
} from '../ACSE-1/ASO-context-name.ta.mjs';
/**
 * @summary ASO_context_name_list
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ASO-context-name-list  ::=  SEQUENCE OF ASO-context-name
 * ```
 */
export type ASO_context_name_list = ASO_context_name[]; // SequenceOfType

let _cached_decoder_for_ASO_context_name_list: $.ASN1Decoder<ASO_context_name_list> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ASO_context_name_list
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ASO_context_name_list} The decoded data structure.
 */
export function _decode_ASO_context_name_list(el: _Element) {
  if (!_cached_decoder_for_ASO_context_name_list) {
    _cached_decoder_for_ASO_context_name_list = $._decodeSequenceOf<ASO_context_name>(
      () => _decode_ASO_context_name
    );
  }
  return _cached_decoder_for_ASO_context_name_list(el);
}

let _cached_encoder_for_ASO_context_name_list: $.ASN1Encoder<ASO_context_name_list> | null = null;

/**
 * @summary Encodes a(n) ASO_context_name_list into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ASO_context_name_list, encoded as an ASN.1 Element.
 */
export function _encode_ASO_context_name_list(
  value: ASO_context_name_list,
  elGetter: $.ASN1Encoder<ASO_context_name_list>
) {
  if (!_cached_encoder_for_ASO_context_name_list) {
    _cached_encoder_for_ASO_context_name_list = $._encodeSequenceOf<ASO_context_name>(
      () => _encode_ASO_context_name,
      $.BER
    );
  }
  return _cached_encoder_for_ASO_context_name_list(value, elGetter);
}


/* eslint-enable */
