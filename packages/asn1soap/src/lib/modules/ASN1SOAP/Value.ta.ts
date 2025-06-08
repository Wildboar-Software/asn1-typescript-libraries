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

/* START_OF_SYMBOL_DEFINITION _enum_for_Value */
/**
 * @summary Value
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * Value  ::=  ENUMERATED {
 *   versionMismatch, mustUnderstand, dataEncodingUnknown, sender, receiver
 * }
 * ```@enum {number}
 */
export enum _enum_for_Value {
  versionMismatch = 0,
  mustUnderstand = 1,
  dataEncodingUnknown = 2,
  sender = 3,
  receiver = 4,
}
/* END_OF_SYMBOL_DEFINITION _enum_for_Value */

/* START_OF_SYMBOL_DEFINITION Value */
/**
 * @summary Value
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * Value  ::=  ENUMERATED {
 *   versionMismatch, mustUnderstand, dataEncodingUnknown, sender, receiver
 * }
 * ```@enum {number}
 */
export type Value = _enum_for_Value;
/* END_OF_SYMBOL_DEFINITION Value */

/* START_OF_SYMBOL_DEFINITION Value */
/**
 * @summary Value
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * Value  ::=  ENUMERATED {
 *   versionMismatch, mustUnderstand, dataEncodingUnknown, sender, receiver
 * }
 * ```@enum {number}
 */
export const Value = _enum_for_Value;
/* END_OF_SYMBOL_DEFINITION Value */

/* START_OF_SYMBOL_DEFINITION Value_versionMismatch */
/**
 * @summary Value_versionMismatch
 * @constant
 * @type {number}
 */
export const Value_versionMismatch: Value =
  Value.versionMismatch; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION Value_versionMismatch */

/* START_OF_SYMBOL_DEFINITION versionMismatch */
/**
 * @summary versionMismatch
 * @constant
 * @type {number}
 */
export const versionMismatch: Value =
  Value.versionMismatch; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION versionMismatch */

/* START_OF_SYMBOL_DEFINITION Value_mustUnderstand */
/**
 * @summary Value_mustUnderstand
 * @constant
 * @type {number}
 */
export const Value_mustUnderstand: Value =
  Value.mustUnderstand; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION Value_mustUnderstand */

/* START_OF_SYMBOL_DEFINITION mustUnderstand */
/**
 * @summary mustUnderstand
 * @constant
 * @type {number}
 */
export const mustUnderstand: Value =
  Value.mustUnderstand; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION mustUnderstand */

/* START_OF_SYMBOL_DEFINITION Value_dataEncodingUnknown */
/**
 * @summary Value_dataEncodingUnknown
 * @constant
 * @type {number}
 */
export const Value_dataEncodingUnknown: Value =
  Value.dataEncodingUnknown; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION Value_dataEncodingUnknown */

/* START_OF_SYMBOL_DEFINITION dataEncodingUnknown */
/**
 * @summary dataEncodingUnknown
 * @constant
 * @type {number}
 */
export const dataEncodingUnknown: Value =
  Value.dataEncodingUnknown; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION dataEncodingUnknown */

/* START_OF_SYMBOL_DEFINITION Value_sender */
/**
 * @summary Value_sender
 * @constant
 * @type {number}
 */
export const Value_sender: Value =
  Value.sender; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION Value_sender */

/* START_OF_SYMBOL_DEFINITION sender */
/**
 * @summary sender
 * @constant
 * @type {number}
 */
export const sender: Value = Value.sender; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION sender */

/* START_OF_SYMBOL_DEFINITION Value_receiver */
/**
 * @summary Value_receiver
 * @constant
 * @type {number}
 */
export const Value_receiver: Value =
  Value.receiver; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION Value_receiver */

/* START_OF_SYMBOL_DEFINITION receiver */
/**
 * @summary receiver
 * @constant
 * @type {number}
 */
export const receiver: Value =
  Value.receiver; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION receiver */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_Value */
let _cached_decoder_for_Value: $.ASN1Decoder<Value> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_Value */

/* START_OF_SYMBOL_DEFINITION _decode_Value */
/**
 * @summary Decodes an ASN.1 element into a(n) Value
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {Value} The decoded data structure.
 */
export function _decode_Value(el: _Element) {
  if (!_cached_decoder_for_Value) {
    _cached_decoder_for_Value = $._decodeEnumerated;
  }
  return _cached_decoder_for_Value(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_Value */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_Value */
let _cached_encoder_for_Value: $.ASN1Encoder<Value> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_Value */

/* START_OF_SYMBOL_DEFINITION _encode_Value */
/**
 * @summary Encodes a(n) Value into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Value, encoded as an ASN.1 Element.
 */
export function _encode_Value(value: Value, elGetter: $.ASN1Encoder<Value>) {
  if (!_cached_encoder_for_Value) {
    _cached_encoder_for_Value = $._encodeEnumerated;
  }
  return _cached_encoder_for_Value(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_Value */

/* eslint-enable */
