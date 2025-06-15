/* eslint-disable */
import {
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
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_Value */

/* START_OF_SYMBOL_DEFINITION _decode_Value */
export const _decode_Value = $._decodeEnumerated;
/* END_OF_SYMBOL_DEFINITION _decode_Value */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_Value */
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_Value */

/* START_OF_SYMBOL_DEFINITION _encode_Value */
export const _encode_Value = $._encodeEnumerated;

/* END_OF_SYMBOL_DEFINITION _encode_Value */

/* eslint-enable */
