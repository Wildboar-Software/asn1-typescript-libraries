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
} from '@wildboar/asn1';
import * as $ from '@wildboar/asn1/functional';
import {
  OR_Set,
  _decode_OR_Set,
  _encode_OR_Set,
} from '../ISO8571-FTAM/OR-Set.ta.mjs';

/**
 * @summary Attribute_Value_Assertions
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * Attribute-Value-Assertions  ::=  [APPLICATION 26] IMPLICIT OR-Set
 * ```
 */
export type Attribute_Value_Assertions = OR_Set; // DefinedType


let _cached_decoder_for_Attribute_Value_Assertions: $.ASN1Decoder<Attribute_Value_Assertions> | null = null;


/**
 * @summary Decodes an ASN.1 element into a(n) Attribute_Value_Assertions
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {Attribute_Value_Assertions} The decoded data structure.
 */
export function _decode_Attribute_Value_Assertions(el: _Element): Attribute_Value_Assertions {
  if (!_cached_decoder_for_Attribute_Value_Assertions) {
    _cached_decoder_for_Attribute_Value_Assertions = $._decode_implicit<Attribute_Value_Assertions>(
      () => _decode_OR_Set
    );
  }
  return _cached_decoder_for_Attribute_Value_Assertions(el);
}


let _cached_encoder_for_Attribute_Value_Assertions: $.ASN1Encoder<Attribute_Value_Assertions> | null = null;


/**
 * @summary Encodes a(n) Attribute_Value_Assertions into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Attribute_Value_Assertions, encoded as an ASN.1 Element.
 */
export function _encode_Attribute_Value_Assertions(
  value: Attribute_Value_Assertions,
  elGetter: $.ASN1Encoder<Attribute_Value_Assertions>
): _Element {
  if (!_cached_encoder_for_Attribute_Value_Assertions) {
    _cached_encoder_for_Attribute_Value_Assertions = $._encode_implicit(
      _TagClass.application,
      26,
      () => _encode_OR_Set,
      $.BER
    );
  }
  return _cached_encoder_for_Attribute_Value_Assertions(value, elGetter);
}


/* eslint-enable */
