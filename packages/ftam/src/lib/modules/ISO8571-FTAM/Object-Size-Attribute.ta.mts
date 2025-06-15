/* eslint-disable */
import {
  INTEGER,
  NULL,
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


/**
 * @summary Object_Size_Attribute
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * Object-Size-Attribute  ::=  CHOICE {
 *   no-value-available  [0] IMPLICIT NULL,
 *   -- Indicates partial support of this attribute.
 *   -- This value shall only appear in response PDUs.
 *   actual-values       [1] IMPLICIT INTEGER
 * }
 * ```
 */
export type Object_Size_Attribute =
  | { no_value_available: NULL } /* CHOICE_ALT_ROOT */
  | { actual_values: INTEGER } /* CHOICE_ALT_ROOT */;


let _cached_decoder_for_Object_Size_Attribute: $.ASN1Decoder<Object_Size_Attribute> | null = null;


/**
 * @summary Decodes an ASN.1 element into a(n) Object_Size_Attribute
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {Object_Size_Attribute} The decoded data structure.
 */
export function _decode_Object_Size_Attribute(el: _Element) {
  if (!_cached_decoder_for_Object_Size_Attribute) {
    _cached_decoder_for_Object_Size_Attribute = $._decode_inextensible_choice<Object_Size_Attribute>(
      {
        'CONTEXT 0': [
          'no_value_available',
          $._decode_implicit<NULL>(() => $._decodeNull),
        ],
        'CONTEXT 1': [
          'actual_values',
          $._decode_implicit<INTEGER>(() => $._decodeInteger),
        ],
      }
    );
  }
  return _cached_decoder_for_Object_Size_Attribute(el);
}


let _cached_encoder_for_Object_Size_Attribute: $.ASN1Encoder<Object_Size_Attribute> | null = null;


/**
 * @summary Encodes a(n) Object_Size_Attribute into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Object_Size_Attribute, encoded as an ASN.1 Element.
 */
export function _encode_Object_Size_Attribute(
  value: Object_Size_Attribute,
  elGetter: $.ASN1Encoder<Object_Size_Attribute>
) {
  if (!_cached_encoder_for_Object_Size_Attribute) {
    _cached_encoder_for_Object_Size_Attribute = $._encode_choice<Object_Size_Attribute>(
      {
        no_value_available: $._encode_implicit(
          _TagClass.context,
          0,
          () => $._encodeNull,
          $.BER
        ),
        actual_values: $._encode_implicit(
          _TagClass.context,
          1,
          () => $._encodeInteger,
          $.BER
        ),
      },
      $.BER
    );
  }
  return _cached_encoder_for_Object_Size_Attribute(value, elGetter);
}


/* eslint-enable */
