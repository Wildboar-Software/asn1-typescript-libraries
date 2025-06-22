/* eslint-disable */
import {
  INTEGER,
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


/**
 * @summary Object_Availability_Attribute_actual_values_immediate_availability
 * @constant
 * @type {number}
 */
export const Object_Availability_Attribute_actual_values_immediate_availability: Object_Availability_Attribute_actual_values = 0; /* LONG_NAMED_INTEGER_VALUE */


/**
 * @summary Object_Availability_Attribute_actual_values_immediate_availability
 * @constant
 * @type {number}
 */
export const immediate_availability: Object_Availability_Attribute_actual_values = Object_Availability_Attribute_actual_values_immediate_availability; /* SHORT_NAMED_INTEGER_VALUE */


/**
 * @summary Object_Availability_Attribute_actual_values_deferred_availability
 * @constant
 * @type {number}
 */
export const Object_Availability_Attribute_actual_values_deferred_availability: Object_Availability_Attribute_actual_values = 1; /* LONG_NAMED_INTEGER_VALUE */


/**
 * @summary Object_Availability_Attribute_actual_values_deferred_availability
 * @constant
 * @type {number}
 */
export const deferred_availability: Object_Availability_Attribute_actual_values = Object_Availability_Attribute_actual_values_deferred_availability; /* SHORT_NAMED_INTEGER_VALUE */


let _cached_decoder_for_Object_Availability_Attribute_actual_values: $.ASN1Decoder<Object_Availability_Attribute_actual_values> | null = null;


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


let _cached_encoder_for_Object_Availability_Attribute_actual_values: $.ASN1Encoder<Object_Availability_Attribute_actual_values> | null = null;


/**
 * @summary Encodes a(n) Object_Availability_Attribute_actual_values into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
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


/* eslint-enable */
