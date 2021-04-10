/* eslint-disable */
import {
  itu_t,
  itu_r,
  ccitt,
  iso,
  joint_iso_itu_t,
  joint_iso_ccitt,
  OPTIONAL,
  BOOLEAN,
  INTEGER,
  BIT_STRING,
  OCTET_STRING,
  NULL,
  OBJECT_IDENTIFIER,
  ObjectDescriptor,
  EXTERNAL,
  REAL,
  INSTANCE_OF,
  ENUMERATED,
  EMBEDDED_PDV,
  UTF8String,
  RELATIVE_OID,
  SEQUENCE,
  SEQUENCE_OF,
  SET,
  SET_OF,
  GraphicString,
  NumericString,
  VisibleString,
  PrintableString,
  ISO646String,
  TeletexString,
  GeneralString,
  T61String,
  UniversalString,
  VideotexString,
  BMPString,
  IA5String,
  CharacterString,
  UTCTime,
  GeneralizedTime,
  TIME,
  DATE,
  TIME_OF_DAY,
  DATE_TIME,
  DURATION,
  OID_IRI,
  RELATIVE_OID_IRI,
  TRUE,
  FALSE,
  TRUE_BIT,
  FALSE_BIT,
  PLUS_INFINITY,
  MINUS_INFINITY,
  NOT_A_NUMBER,
  TYPE_IDENTIFIER,
  ABSTRACT_SYNTAX,
  ASN1Element as _Element,
  ASN1TagClass as _TagClass,
  ASN1Construction as _Construction,
  ASN1UniversalType as _UniversalType,
  ObjectIdentifier as _OID,
  External as _External,
  EmbeddedPDV as _PDV,
  ASN1ConstructionError as _ConstructionError,
} from 'asn1-ts';
import * as $ from 'asn1-ts/dist/node/functional';
import {
  Object_Availability_Attribute_actual_values,
  Object_Availability_Attribute_actual_values_immediate_availability /* IMPORTED_LONG_NAMED_INTEGER */,
  immediate_availability /* IMPORTED_SHORT_NAMED_INTEGER */,
  Object_Availability_Attribute_actual_values_deferred_availability /* IMPORTED_LONG_NAMED_INTEGER */,
  deferred_availability /* IMPORTED_SHORT_NAMED_INTEGER */,
  _decode_Object_Availability_Attribute_actual_values,
  _encode_Object_Availability_Attribute_actual_values,
} from '../ISO8571-FTAM/Object-Availability-Attribute-actual-values.ta';
export {
  Object_Availability_Attribute_actual_values,
  Object_Availability_Attribute_actual_values_immediate_availability /* IMPORTED_LONG_NAMED_INTEGER */,
  immediate_availability /* IMPORTED_SHORT_NAMED_INTEGER */,
  Object_Availability_Attribute_actual_values_deferred_availability /* IMPORTED_LONG_NAMED_INTEGER */,
  deferred_availability /* IMPORTED_SHORT_NAMED_INTEGER */,
  _decode_Object_Availability_Attribute_actual_values,
  _encode_Object_Availability_Attribute_actual_values,
} from '../ISO8571-FTAM/Object-Availability-Attribute-actual-values.ta';

/* START_OF_SYMBOL_DEFINITION Object_Availability_Attribute */
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
/* END_OF_SYMBOL_DEFINITION Object_Availability_Attribute */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_Object_Availability_Attribute */
let _cached_decoder_for_Object_Availability_Attribute: $.ASN1Decoder<Object_Availability_Attribute> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_Object_Availability_Attribute */

/* START_OF_SYMBOL_DEFINITION _decode_Object_Availability_Attribute */
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
/* END_OF_SYMBOL_DEFINITION _decode_Object_Availability_Attribute */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_Object_Availability_Attribute */
let _cached_encoder_for_Object_Availability_Attribute: $.ASN1Encoder<Object_Availability_Attribute> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_Object_Availability_Attribute */

/* START_OF_SYMBOL_DEFINITION _encode_Object_Availability_Attribute */
/**
 * @summary Encodes a(n) Object_Availability_Attribute into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
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

/* END_OF_SYMBOL_DEFINITION _encode_Object_Availability_Attribute */

/* eslint-enable */
