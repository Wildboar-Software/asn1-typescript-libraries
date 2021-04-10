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

/* START_OF_SYMBOL_DEFINITION Object_Availability_Attribute_actual_values */
/**
 * @summary Object_Availability_Attribute_actual_values
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * Object-Availability-Attribute-actual-values ::= INTEGER { -- REMOVED_FROM_UNNESTING -- }
 * ```
 */
export type Object_Availability_Attribute_actual_values = INTEGER;
/* END_OF_SYMBOL_DEFINITION Object_Availability_Attribute_actual_values */

/* START_OF_SYMBOL_DEFINITION Object_Availability_Attribute_actual_values_immediate_availability */
/**
 * @summary Object_Availability_Attribute_actual_values_immediate_availability
 * @constant
 * @type {number}
 */
export const Object_Availability_Attribute_actual_values_immediate_availability: Object_Availability_Attribute_actual_values = 0; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION Object_Availability_Attribute_actual_values_immediate_availability */

/* START_OF_SYMBOL_DEFINITION immediate_availability */
/**
 * @summary Object_Availability_Attribute_actual_values_immediate_availability
 * @constant
 * @type {number}
 */
export const immediate_availability: Object_Availability_Attribute_actual_values = Object_Availability_Attribute_actual_values_immediate_availability; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION immediate_availability */

/* START_OF_SYMBOL_DEFINITION Object_Availability_Attribute_actual_values_deferred_availability */
/**
 * @summary Object_Availability_Attribute_actual_values_deferred_availability
 * @constant
 * @type {number}
 */
export const Object_Availability_Attribute_actual_values_deferred_availability: Object_Availability_Attribute_actual_values = 1; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION Object_Availability_Attribute_actual_values_deferred_availability */

/* START_OF_SYMBOL_DEFINITION deferred_availability */
/**
 * @summary Object_Availability_Attribute_actual_values_deferred_availability
 * @constant
 * @type {number}
 */
export const deferred_availability: Object_Availability_Attribute_actual_values = Object_Availability_Attribute_actual_values_deferred_availability; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION deferred_availability */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_Object_Availability_Attribute_actual_values */
let _cached_decoder_for_Object_Availability_Attribute_actual_values: $.ASN1Decoder<Object_Availability_Attribute_actual_values> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_Object_Availability_Attribute_actual_values */

/* START_OF_SYMBOL_DEFINITION _decode_Object_Availability_Attribute_actual_values */
/**
 * @summary Decodes an ASN.1 element into a(n) Object_Availability_Attribute_actual_values
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {Object_Availability_Attribute_actual_values} The decoded data structure.
 */
export function _decode_Object_Availability_Attribute_actual_values(
  el: _Element
) {
  if (!_cached_decoder_for_Object_Availability_Attribute_actual_values) {
    _cached_decoder_for_Object_Availability_Attribute_actual_values =
      $._decodeInteger;
  }
  return _cached_decoder_for_Object_Availability_Attribute_actual_values(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_Object_Availability_Attribute_actual_values */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_Object_Availability_Attribute_actual_values */
let _cached_encoder_for_Object_Availability_Attribute_actual_values: $.ASN1Encoder<Object_Availability_Attribute_actual_values> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_Object_Availability_Attribute_actual_values */

/* START_OF_SYMBOL_DEFINITION _encode_Object_Availability_Attribute_actual_values */
/**
 * @summary Encodes a(n) Object_Availability_Attribute_actual_values into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Object_Availability_Attribute_actual_values, encoded as an ASN.1 Element.
 */
export function _encode_Object_Availability_Attribute_actual_values(
  value: Object_Availability_Attribute_actual_values,
  elGetter: $.ASN1Encoder<Object_Availability_Attribute_actual_values>
) {
  if (!_cached_encoder_for_Object_Availability_Attribute_actual_values) {
    _cached_encoder_for_Object_Availability_Attribute_actual_values =
      $._encodeInteger;
  }
  return _cached_encoder_for_Object_Availability_Attribute_actual_values(
    value,
    elGetter
  );
}

/* END_OF_SYMBOL_DEFINITION _encode_Object_Availability_Attribute_actual_values */

/* eslint-enable */
