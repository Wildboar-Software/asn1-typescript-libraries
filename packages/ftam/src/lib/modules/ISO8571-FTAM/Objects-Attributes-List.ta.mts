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
  Read_Attributes,
  _decode_Read_Attributes,
  _encode_Read_Attributes,
} from '../ISO8571-FTAM/Read-Attributes.ta.mjs';

/**
 * @summary Objects_Attributes_List
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * Objects-Attributes-List  ::=
 *   [APPLICATION 25] IMPLICIT SEQUENCE OF Read-Attributes
 * ```
 */
export type Objects_Attributes_List = Read_Attributes[]; // SequenceOfType


let _cached_decoder_for_Objects_Attributes_List: $.ASN1Decoder<Objects_Attributes_List> | null = null;


/**
 * @summary Decodes an ASN.1 element into a(n) Objects_Attributes_List
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {Objects_Attributes_List} The decoded data structure.
 */
export function _decode_Objects_Attributes_List(el: _Element) {
  if (!_cached_decoder_for_Objects_Attributes_List) {
    _cached_decoder_for_Objects_Attributes_List = $._decode_implicit<Objects_Attributes_List>(
      () => $._decodeSequenceOf<Read_Attributes>(() => _decode_Read_Attributes)
    );
  }
  return _cached_decoder_for_Objects_Attributes_List(el);
}


let _cached_encoder_for_Objects_Attributes_List: $.ASN1Encoder<Objects_Attributes_List> | null = null;


/**
 * @summary Encodes a(n) Objects_Attributes_List into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Objects_Attributes_List, encoded as an ASN.1 Element.
 */
export function _encode_Objects_Attributes_List(
  value: Objects_Attributes_List,
  elGetter: $.ASN1Encoder<Objects_Attributes_List>
) {
  if (!_cached_encoder_for_Objects_Attributes_List) {
    _cached_encoder_for_Objects_Attributes_List = $._encode_implicit(
      _TagClass.application,
      25,
      () =>
        $._encodeSequenceOf<Read_Attributes>(
          () => _encode_Read_Attributes,
          $.BER
        ),
      $.BER
    );
  }
  return _cached_encoder_for_Objects_Attributes_List(value, elGetter);
}


/* eslint-enable */
