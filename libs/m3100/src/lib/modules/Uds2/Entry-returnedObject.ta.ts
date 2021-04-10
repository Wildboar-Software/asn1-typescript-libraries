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

/* START_OF_SYMBOL_DEFINITION _enum_for_Entry_returnedObject */
/**
 * @summary Entry_returnedObject
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * Entry-returnedObject ::= ENUMERATED { -- REMOVED_FROM_UNNESTING -- }
 * ```@enum {number}
 */
export enum _enum_for_Entry_returnedObject {
  subscriber = 0,
  stateOrProvince = 1,
  locality = 2,
  street = 3,
  businessCategory = 4,
}
/* END_OF_SYMBOL_DEFINITION _enum_for_Entry_returnedObject */

/* START_OF_SYMBOL_DEFINITION Entry_returnedObject */
/**
 * @summary Entry_returnedObject
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * Entry-returnedObject ::= ENUMERATED { -- REMOVED_FROM_UNNESTING -- }
 * ```@enum {number}
 */
export type Entry_returnedObject = _enum_for_Entry_returnedObject;
/* END_OF_SYMBOL_DEFINITION Entry_returnedObject */

/* START_OF_SYMBOL_DEFINITION Entry_returnedObject */
/**
 * @summary Entry_returnedObject
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * Entry-returnedObject ::= ENUMERATED { -- REMOVED_FROM_UNNESTING -- }
 * ```@enum {number}
 */
export const Entry_returnedObject = _enum_for_Entry_returnedObject;
/* END_OF_SYMBOL_DEFINITION Entry_returnedObject */

/* START_OF_SYMBOL_DEFINITION Entry_returnedObject_subscriber */
/**
 * @summary Entry_returnedObject_subscriber
 * @constant
 * @type {number}
 */
export const Entry_returnedObject_subscriber: Entry_returnedObject =
  Entry_returnedObject.subscriber; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION Entry_returnedObject_subscriber */

/* START_OF_SYMBOL_DEFINITION subscriber */
/**
 * @summary subscriber
 * @constant
 * @type {number}
 */
export const subscriber: Entry_returnedObject =
  Entry_returnedObject.subscriber; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION subscriber */

/* START_OF_SYMBOL_DEFINITION Entry_returnedObject_stateOrProvince */
/**
 * @summary Entry_returnedObject_stateOrProvince
 * @constant
 * @type {number}
 */
export const Entry_returnedObject_stateOrProvince: Entry_returnedObject =
  Entry_returnedObject.stateOrProvince; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION Entry_returnedObject_stateOrProvince */

/* START_OF_SYMBOL_DEFINITION stateOrProvince */
/**
 * @summary stateOrProvince
 * @constant
 * @type {number}
 */
export const stateOrProvince: Entry_returnedObject =
  Entry_returnedObject.stateOrProvince; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION stateOrProvince */

/* START_OF_SYMBOL_DEFINITION Entry_returnedObject_locality */
/**
 * @summary Entry_returnedObject_locality
 * @constant
 * @type {number}
 */
export const Entry_returnedObject_locality: Entry_returnedObject =
  Entry_returnedObject.locality; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION Entry_returnedObject_locality */

/* START_OF_SYMBOL_DEFINITION locality */
/**
 * @summary locality
 * @constant
 * @type {number}
 */
export const locality: Entry_returnedObject =
  Entry_returnedObject.locality; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION locality */

/* START_OF_SYMBOL_DEFINITION Entry_returnedObject_street */
/**
 * @summary Entry_returnedObject_street
 * @constant
 * @type {number}
 */
export const Entry_returnedObject_street: Entry_returnedObject =
  Entry_returnedObject.street; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION Entry_returnedObject_street */

/* START_OF_SYMBOL_DEFINITION street */
/**
 * @summary street
 * @constant
 * @type {number}
 */
export const street: Entry_returnedObject =
  Entry_returnedObject.street; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION street */

/* START_OF_SYMBOL_DEFINITION Entry_returnedObject_businessCategory */
/**
 * @summary Entry_returnedObject_businessCategory
 * @constant
 * @type {number}
 */
export const Entry_returnedObject_businessCategory: Entry_returnedObject =
  Entry_returnedObject.businessCategory; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION Entry_returnedObject_businessCategory */

/* START_OF_SYMBOL_DEFINITION businessCategory */
/**
 * @summary businessCategory
 * @constant
 * @type {number}
 */
export const businessCategory: Entry_returnedObject =
  Entry_returnedObject.businessCategory; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION businessCategory */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_Entry_returnedObject */
let _cached_decoder_for_Entry_returnedObject: $.ASN1Decoder<Entry_returnedObject> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_Entry_returnedObject */

/* START_OF_SYMBOL_DEFINITION _decode_Entry_returnedObject */
/**
 * @summary Decodes an ASN.1 element into a(n) Entry_returnedObject
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {Entry_returnedObject} The decoded data structure.
 */
export function _decode_Entry_returnedObject(el: _Element) {
  if (!_cached_decoder_for_Entry_returnedObject) {
    _cached_decoder_for_Entry_returnedObject = $._decodeEnumerated;
  }
  return _cached_decoder_for_Entry_returnedObject(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_Entry_returnedObject */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_Entry_returnedObject */
let _cached_encoder_for_Entry_returnedObject: $.ASN1Encoder<Entry_returnedObject> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_Entry_returnedObject */

/* START_OF_SYMBOL_DEFINITION _encode_Entry_returnedObject */
/**
 * @summary Encodes a(n) Entry_returnedObject into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Entry_returnedObject, encoded as an ASN.1 Element.
 */
export function _encode_Entry_returnedObject(
  value: Entry_returnedObject,
  elGetter: $.ASN1Encoder<Entry_returnedObject>
) {
  if (!_cached_encoder_for_Entry_returnedObject) {
    _cached_encoder_for_Entry_returnedObject = $._encodeEnumerated;
  }
  return _cached_encoder_for_Entry_returnedObject(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_Entry_returnedObject */

/* eslint-enable */
