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
} from 'asn1-ts';
import * as $ from 'asn1-ts/dist/functional.mjs';
import {
  Access_Control_Change_Attribute_actual_values,
  _decode_Access_Control_Change_Attribute_actual_values,
  _encode_Access_Control_Change_Attribute_actual_values,
} from '../ISO8571-FTAM/Access-Control-Change-Attribute-actual-values.ta.mjs';

/**
 * @summary Access_Control_Change_Attribute
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * Access-Control-Change-Attribute  ::=  CHOICE {
 *   no-value-available  [0] IMPLICIT NULL,
 *   -- Indicates partial support of this attribute.
 *   -- This value shall only appear in response PDUs.
 *   actual-values
 *     [1] IMPLICIT SEQUENCE {insert-values
 *                              [0] IMPLICIT SET OF Access-Control-Element
 *                                OPTIONAL,
 *                            -- This field is used by the Change attribute actions to indicate
 *                            -- new values to be inserted in the access control Object attribute.
 *                            delete-values
 *                              [1] IMPLICIT SET OF Access-Control-Element
 *                                OPTIONAL}
 * }
 * ```
 */
export type Access_Control_Change_Attribute =
  | { no_value_available: NULL } /* CHOICE_ALT_ROOT */
  | {
      actual_values: Access_Control_Change_Attribute_actual_values;
    } /* CHOICE_ALT_ROOT */;


let _cached_decoder_for_Access_Control_Change_Attribute: $.ASN1Decoder<Access_Control_Change_Attribute> | null = null;


/**
 * @summary Decodes an ASN.1 element into a(n) Access_Control_Change_Attribute
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {Access_Control_Change_Attribute} The decoded data structure.
 */
export function _decode_Access_Control_Change_Attribute(el: _Element) {
  if (!_cached_decoder_for_Access_Control_Change_Attribute) {
    _cached_decoder_for_Access_Control_Change_Attribute = $._decode_inextensible_choice<Access_Control_Change_Attribute>(
      {
        'CONTEXT 0': [
          'no_value_available',
          $._decode_implicit<NULL>(() => $._decodeNull),
        ],
        'CONTEXT 1': [
          'actual_values',
          $._decode_implicit<Access_Control_Change_Attribute_actual_values>(
            () => _decode_Access_Control_Change_Attribute_actual_values
          ),
        ],
      }
    );
  }
  return _cached_decoder_for_Access_Control_Change_Attribute(el);
}


let _cached_encoder_for_Access_Control_Change_Attribute: $.ASN1Encoder<Access_Control_Change_Attribute> | null = null;


/**
 * @summary Encodes a(n) Access_Control_Change_Attribute into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Access_Control_Change_Attribute, encoded as an ASN.1 Element.
 */
export function _encode_Access_Control_Change_Attribute(
  value: Access_Control_Change_Attribute,
  elGetter: $.ASN1Encoder<Access_Control_Change_Attribute>
) {
  if (!_cached_encoder_for_Access_Control_Change_Attribute) {
    _cached_encoder_for_Access_Control_Change_Attribute = $._encode_choice<Access_Control_Change_Attribute>(
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
          () => _encode_Access_Control_Change_Attribute_actual_values,
          $.BER
        ),
      },
      $.BER
    );
  }
  return _cached_encoder_for_Access_Control_Change_Attribute(value, elGetter);
}


/* eslint-enable */
