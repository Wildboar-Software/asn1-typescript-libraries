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
import * as $ from 'asn1-ts/dist/functional.mjs';

/* START_OF_SYMBOL_DEFINITION Permitted_Actions_Attribute */
/**
 * @summary Permitted_Actions_Attribute
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * Permitted-Actions-Attribute  ::=  BIT STRING -- Actions available
 *                                 {
 *   read(0), insert(1), replace(2), extend(3), erase(4), read-attribute(5),
 *   change-attribute(6), delete-Object(7), pass(11),
 *   link(12),
 *   -- FADU-Identity groups available
 *   traversal(8), reverse-traversal(9), random-Order(10)}
 * ```
 */
export type Permitted_Actions_Attribute = BIT_STRING;
/* END_OF_SYMBOL_DEFINITION Permitted_Actions_Attribute */

/* START_OF_SYMBOL_DEFINITION Permitted_Actions_Attribute_read */
/**
 * @summary Permitted_Actions_Attribute_read
 * @constant
 */
export const Permitted_Actions_Attribute_read: number = 0; /* LONG_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION Permitted_Actions_Attribute_read */

/* START_OF_SYMBOL_DEFINITION read */
/**
 * @summary read
 * @constant
 */
export const read: number = Permitted_Actions_Attribute_read; /* SHORT_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION read */

/* START_OF_SYMBOL_DEFINITION Permitted_Actions_Attribute_insert */
/**
 * @summary Permitted_Actions_Attribute_insert
 * @constant
 */
export const Permitted_Actions_Attribute_insert: number = 1; /* LONG_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION Permitted_Actions_Attribute_insert */

/* START_OF_SYMBOL_DEFINITION insert */
/**
 * @summary insert
 * @constant
 */
export const insert: number = Permitted_Actions_Attribute_insert; /* SHORT_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION insert */

/* START_OF_SYMBOL_DEFINITION Permitted_Actions_Attribute_replace */
/**
 * @summary Permitted_Actions_Attribute_replace
 * @constant
 */
export const Permitted_Actions_Attribute_replace: number = 2; /* LONG_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION Permitted_Actions_Attribute_replace */

/* START_OF_SYMBOL_DEFINITION replace */
/**
 * @summary replace
 * @constant
 */
export const replace: number = Permitted_Actions_Attribute_replace; /* SHORT_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION replace */

/* START_OF_SYMBOL_DEFINITION Permitted_Actions_Attribute_extend */
/**
 * @summary Permitted_Actions_Attribute_extend
 * @constant
 */
export const Permitted_Actions_Attribute_extend: number = 3; /* LONG_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION Permitted_Actions_Attribute_extend */

/* START_OF_SYMBOL_DEFINITION extend */
/**
 * @summary extend
 * @constant
 */
export const extend: number = Permitted_Actions_Attribute_extend; /* SHORT_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION extend */

/* START_OF_SYMBOL_DEFINITION Permitted_Actions_Attribute_erase */
/**
 * @summary Permitted_Actions_Attribute_erase
 * @constant
 */
export const Permitted_Actions_Attribute_erase: number = 4; /* LONG_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION Permitted_Actions_Attribute_erase */

/* START_OF_SYMBOL_DEFINITION erase */
/**
 * @summary erase
 * @constant
 */
export const erase: number = Permitted_Actions_Attribute_erase; /* SHORT_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION erase */

/* START_OF_SYMBOL_DEFINITION Permitted_Actions_Attribute_read_attribute */
/**
 * @summary Permitted_Actions_Attribute_read_attribute
 * @constant
 */
export const Permitted_Actions_Attribute_read_attribute: number = 5; /* LONG_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION Permitted_Actions_Attribute_read_attribute */

/* START_OF_SYMBOL_DEFINITION read_attribute */
/**
 * @summary read_attribute
 * @constant
 */
export const read_attribute: number = Permitted_Actions_Attribute_read_attribute; /* SHORT_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION read_attribute */

/* START_OF_SYMBOL_DEFINITION Permitted_Actions_Attribute_change_attribute */
/**
 * @summary Permitted_Actions_Attribute_change_attribute
 * @constant
 */
export const Permitted_Actions_Attribute_change_attribute: number = 6; /* LONG_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION Permitted_Actions_Attribute_change_attribute */

/* START_OF_SYMBOL_DEFINITION change_attribute */
/**
 * @summary change_attribute
 * @constant
 */
export const change_attribute: number = Permitted_Actions_Attribute_change_attribute; /* SHORT_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION change_attribute */

/* START_OF_SYMBOL_DEFINITION Permitted_Actions_Attribute_delete_Object */
/**
 * @summary Permitted_Actions_Attribute_delete_Object
 * @constant
 */
export const Permitted_Actions_Attribute_delete_Object: number = 7; /* LONG_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION Permitted_Actions_Attribute_delete_Object */

/* START_OF_SYMBOL_DEFINITION delete_Object */
/**
 * @summary delete_Object
 * @constant
 */
export const delete_Object: number = Permitted_Actions_Attribute_delete_Object; /* SHORT_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION delete_Object */

/* START_OF_SYMBOL_DEFINITION Permitted_Actions_Attribute_pass */
/**
 * @summary Permitted_Actions_Attribute_pass
 * @constant
 */
export const Permitted_Actions_Attribute_pass: number = 11; /* LONG_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION Permitted_Actions_Attribute_pass */

/* START_OF_SYMBOL_DEFINITION pass */
/**
 * @summary pass
 * @constant
 */
export const pass: number = Permitted_Actions_Attribute_pass; /* SHORT_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION pass */

/* START_OF_SYMBOL_DEFINITION Permitted_Actions_Attribute_link */
/**
 * @summary Permitted_Actions_Attribute_link
 * @constant
 */
export const Permitted_Actions_Attribute_link: number = 12; /* LONG_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION Permitted_Actions_Attribute_link */

/* START_OF_SYMBOL_DEFINITION link */
/**
 * @summary link
 * @constant
 */
export const link: number = Permitted_Actions_Attribute_link; /* SHORT_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION link */

/* START_OF_SYMBOL_DEFINITION Permitted_Actions_Attribute_traversal */
/**
 * @summary Permitted_Actions_Attribute_traversal
 * @constant
 */
export const Permitted_Actions_Attribute_traversal: number = 8; /* LONG_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION Permitted_Actions_Attribute_traversal */

/* START_OF_SYMBOL_DEFINITION traversal */
/**
 * @summary traversal
 * @constant
 */
export const traversal: number = Permitted_Actions_Attribute_traversal; /* SHORT_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION traversal */

/* START_OF_SYMBOL_DEFINITION Permitted_Actions_Attribute_reverse_traversal */
/**
 * @summary Permitted_Actions_Attribute_reverse_traversal
 * @constant
 */
export const Permitted_Actions_Attribute_reverse_traversal: number = 9; /* LONG_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION Permitted_Actions_Attribute_reverse_traversal */

/* START_OF_SYMBOL_DEFINITION reverse_traversal */
/**
 * @summary reverse_traversal
 * @constant
 */
export const reverse_traversal: number = Permitted_Actions_Attribute_reverse_traversal; /* SHORT_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION reverse_traversal */

/* START_OF_SYMBOL_DEFINITION Permitted_Actions_Attribute_random_Order */
/**
 * @summary Permitted_Actions_Attribute_random_Order
 * @constant
 */
export const Permitted_Actions_Attribute_random_Order: number = 10; /* LONG_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION Permitted_Actions_Attribute_random_Order */

/* START_OF_SYMBOL_DEFINITION random_Order */
/**
 * @summary random_Order
 * @constant
 */
export const random_Order: number = Permitted_Actions_Attribute_random_Order; /* SHORT_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION random_Order */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_Permitted_Actions_Attribute */
let _cached_decoder_for_Permitted_Actions_Attribute: $.ASN1Decoder<Permitted_Actions_Attribute> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_Permitted_Actions_Attribute */

/* START_OF_SYMBOL_DEFINITION _decode_Permitted_Actions_Attribute */
/**
 * @summary Decodes an ASN.1 element into a(n) Permitted_Actions_Attribute
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {Permitted_Actions_Attribute} The decoded data structure.
 */
export function _decode_Permitted_Actions_Attribute(el: _Element) {
  if (!_cached_decoder_for_Permitted_Actions_Attribute) {
    _cached_decoder_for_Permitted_Actions_Attribute = $._decodeBitString;
  }
  return _cached_decoder_for_Permitted_Actions_Attribute(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_Permitted_Actions_Attribute */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_Permitted_Actions_Attribute */
let _cached_encoder_for_Permitted_Actions_Attribute: $.ASN1Encoder<Permitted_Actions_Attribute> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_Permitted_Actions_Attribute */

/* START_OF_SYMBOL_DEFINITION _encode_Permitted_Actions_Attribute */
/**
 * @summary Encodes a(n) Permitted_Actions_Attribute into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Permitted_Actions_Attribute, encoded as an ASN.1 Element.
 */
export function _encode_Permitted_Actions_Attribute(
  value: Permitted_Actions_Attribute,
  elGetter: $.ASN1Encoder<Permitted_Actions_Attribute>
) {
  if (!_cached_encoder_for_Permitted_Actions_Attribute) {
    _cached_encoder_for_Permitted_Actions_Attribute = $._encodeBitString;
  }
  return _cached_encoder_for_Permitted_Actions_Attribute(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_Permitted_Actions_Attribute */

/* eslint-enable */
