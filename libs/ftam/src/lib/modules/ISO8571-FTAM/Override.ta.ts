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

/* START_OF_SYMBOL_DEFINITION Override */
/**
 * @summary Override
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * Override  ::=  INTEGER {
 *   create-failure(0), select-old-Object(1),
 *   delete-and-create-with-old-attributes(2),
 *   delete-and-create-with-new-attributes(3)}
 * ```
 */
export type Override = INTEGER;
/* END_OF_SYMBOL_DEFINITION Override */

/* START_OF_SYMBOL_DEFINITION Override_create_failure */
/**
 * @summary Override_create_failure
 * @constant
 * @type {number}
 */
export const Override_create_failure: Override = 0; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION Override_create_failure */

/* START_OF_SYMBOL_DEFINITION create_failure */
/**
 * @summary Override_create_failure
 * @constant
 * @type {number}
 */
export const create_failure: Override = Override_create_failure; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION create_failure */

/* START_OF_SYMBOL_DEFINITION Override_select_old_Object */
/**
 * @summary Override_select_old_Object
 * @constant
 * @type {number}
 */
export const Override_select_old_Object: Override = 1; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION Override_select_old_Object */

/* START_OF_SYMBOL_DEFINITION select_old_Object */
/**
 * @summary Override_select_old_Object
 * @constant
 * @type {number}
 */
export const select_old_Object: Override = Override_select_old_Object; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION select_old_Object */

/* START_OF_SYMBOL_DEFINITION Override_delete_and_create_with_old_attributes */
/**
 * @summary Override_delete_and_create_with_old_attributes
 * @constant
 * @type {number}
 */
export const Override_delete_and_create_with_old_attributes: Override = 2; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION Override_delete_and_create_with_old_attributes */

/* START_OF_SYMBOL_DEFINITION delete_and_create_with_old_attributes */
/**
 * @summary Override_delete_and_create_with_old_attributes
 * @constant
 * @type {number}
 */
export const delete_and_create_with_old_attributes: Override = Override_delete_and_create_with_old_attributes; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION delete_and_create_with_old_attributes */

/* START_OF_SYMBOL_DEFINITION Override_delete_and_create_with_new_attributes */
/**
 * @summary Override_delete_and_create_with_new_attributes
 * @constant
 * @type {number}
 */
export const Override_delete_and_create_with_new_attributes: Override = 3; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION Override_delete_and_create_with_new_attributes */

/* START_OF_SYMBOL_DEFINITION delete_and_create_with_new_attributes */
/**
 * @summary Override_delete_and_create_with_new_attributes
 * @constant
 * @type {number}
 */
export const delete_and_create_with_new_attributes: Override = Override_delete_and_create_with_new_attributes; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION delete_and_create_with_new_attributes */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_Override */
let _cached_decoder_for_Override: $.ASN1Decoder<Override> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_Override */

/* START_OF_SYMBOL_DEFINITION _decode_Override */
/**
 * @summary Decodes an ASN.1 element into a(n) Override
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {Override} The decoded data structure.
 */
export function _decode_Override(el: _Element) {
  if (!_cached_decoder_for_Override) {
    _cached_decoder_for_Override = $._decodeInteger;
  }
  return _cached_decoder_for_Override(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_Override */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_Override */
let _cached_encoder_for_Override: $.ASN1Encoder<Override> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_Override */

/* START_OF_SYMBOL_DEFINITION _encode_Override */
/**
 * @summary Encodes a(n) Override into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Override, encoded as an ASN.1 Element.
 */
export function _encode_Override(
  value: Override,
  elGetter: $.ASN1Encoder<Override>
) {
  if (!_cached_encoder_for_Override) {
    _cached_encoder_for_Override = $._encodeInteger;
  }
  return _cached_encoder_for_Override(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_Override */

/* eslint-enable */
