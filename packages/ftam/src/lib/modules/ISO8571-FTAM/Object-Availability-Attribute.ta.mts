/* eslint-disable */
import {
  NULL,
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
  Object_Availability_Attribute_actual_values,
  _decode_Object_Availability_Attribute_actual_values,
  _encode_Object_Availability_Attribute_actual_values,
} from '../ISO8571-FTAM/Object-Availability-Attribute-actual-values.ta.mjs';

/**
 * @summary Object_Availability_Attribute
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * Object-Availability-Attribute  ::=  CHOICE {
 *   no-value-available  [0] IMPLICIT NULL,
 *   -- Indicates partial support of this attribute.
 *   -- This value shall only appear in response PDUs.
 *   actual-values
 *     [1] IMPLICIT INTEGER {immediate-availability(0), deferred-availability(1)}
 * }
 * ```
 */
export type Object_Availability_Attribute =
  | { no_value_available: NULL } /* CHOICE_ALT_ROOT */
  | {
      actual_values: Object_Availability_Attribute_actual_values;
    } /* CHOICE_ALT_ROOT */;


let _cached_decoder_for_Object_Availability_Attribute: $.ASN1Decoder<Object_Availability_Attribute> | null = null;


/**
 * @summary Decodes an ASN.1 element into a(n) Object_Availability_Attribute
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {Object_Availability_Attribute} The decoded data structure.
 */
export function _decode_Object_Availability_Attribute(el: _Element) {
  if (!_cached_decoder_for_Object_Availability_Attribute) {
    _cached_decoder_for_Object_Availability_Attribute = $._decode_inextensible_choice<Object_Availability_Attribute>(
      {
        'CONTEXT 0': [
          'no_value_available',
          $._decode_implicit<NULL>(() => $._decodeNull),
        ],
        'CONTEXT 1': [
          'actual_values',
          $._decode_implicit<Object_Availability_Attribute_actual_values>(
            () => _decode_Object_Availability_Attribute_actual_values
          ),
        ],
      }
    );
  }
  return _cached_decoder_for_Object_Availability_Attribute(el);
}


let _cached_encoder_for_Object_Availability_Attribute: $.ASN1Encoder<Object_Availability_Attribute> | null = null;


/**
 * @summary Encodes a(n) Object_Availability_Attribute into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Object_Availability_Attribute, encoded as an ASN.1 Element.
 */
export function _encode_Object_Availability_Attribute(
  value: Object_Availability_Attribute,
  elGetter: $.ASN1Encoder<Object_Availability_Attribute>
) {
  if (!_cached_encoder_for_Object_Availability_Attribute) {
    _cached_encoder_for_Object_Availability_Attribute = $._encode_choice<Object_Availability_Attribute>(
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
          () => _encode_Object_Availability_Attribute_actual_values,
          $.BER
        ),
      },
      $.BER
    );
  }
  return _cached_encoder_for_Object_Availability_Attribute(value, elGetter);
}


/* eslint-enable */
