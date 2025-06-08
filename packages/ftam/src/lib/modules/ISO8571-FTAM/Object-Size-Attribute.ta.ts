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

/* START_OF_SYMBOL_DEFINITION Object_Size_Attribute */
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
/* END_OF_SYMBOL_DEFINITION Object_Size_Attribute */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_Object_Size_Attribute */
let _cached_decoder_for_Object_Size_Attribute: $.ASN1Decoder<Object_Size_Attribute> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_Object_Size_Attribute */

/* START_OF_SYMBOL_DEFINITION _decode_Object_Size_Attribute */
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
/* END_OF_SYMBOL_DEFINITION _decode_Object_Size_Attribute */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_Object_Size_Attribute */
let _cached_encoder_for_Object_Size_Attribute: $.ASN1Encoder<Object_Size_Attribute> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_Object_Size_Attribute */

/* START_OF_SYMBOL_DEFINITION _encode_Object_Size_Attribute */
/**
 * @summary Encodes a(n) Object_Size_Attribute into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
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

/* END_OF_SYMBOL_DEFINITION _encode_Object_Size_Attribute */

/* eslint-enable */
