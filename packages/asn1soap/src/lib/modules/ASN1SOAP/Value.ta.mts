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
 * ```
 *
 * @enum {number}
 */
export enum _enum_for_Value {
  versionMismatch = 0,
  mustUnderstand = 1,
  dataEncodingUnknown = 2,
  sender = 3,
  receiver = 4,
}


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
 * ```
 *
 * @enum {number}
 */
export type Value = _enum_for_Value;


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
 * ```
 *
 * @enum {number}
 */
export const Value = _enum_for_Value;


/**
 * @summary Value_versionMismatch
 * @constant
 * @type {number}
 */
export const Value_versionMismatch: Value =
  Value.versionMismatch; /* LONG_NAMED_ENUMERATED_VALUE */


/**
 * @summary versionMismatch
 * @constant
 * @type {number}
 */
export const versionMismatch: Value =
  Value.versionMismatch; /* SHORT_NAMED_ENUMERATED_VALUE */


/**
 * @summary Value_mustUnderstand
 * @constant
 * @type {number}
 */
export const Value_mustUnderstand: Value =
  Value.mustUnderstand; /* LONG_NAMED_ENUMERATED_VALUE */


/**
 * @summary mustUnderstand
 * @constant
 * @type {number}
 */
export const mustUnderstand: Value =
  Value.mustUnderstand; /* SHORT_NAMED_ENUMERATED_VALUE */


/**
 * @summary Value_dataEncodingUnknown
 * @constant
 * @type {number}
 */
export const Value_dataEncodingUnknown: Value =
  Value.dataEncodingUnknown; /* LONG_NAMED_ENUMERATED_VALUE */


/**
 * @summary dataEncodingUnknown
 * @constant
 * @type {number}
 */
export const dataEncodingUnknown: Value =
  Value.dataEncodingUnknown; /* SHORT_NAMED_ENUMERATED_VALUE */


/**
 * @summary Value_sender
 * @constant
 * @type {number}
 */
export const Value_sender: Value =
  Value.sender; /* LONG_NAMED_ENUMERATED_VALUE */


/**
 * @summary sender
 * @constant
 * @type {number}
 */
export const sender: Value = Value.sender; /* SHORT_NAMED_ENUMERATED_VALUE */


/**
 * @summary Value_receiver
 * @constant
 * @type {number}
 */
export const Value_receiver: Value =
  Value.receiver; /* LONG_NAMED_ENUMERATED_VALUE */


/**
 * @summary receiver
 * @constant
 * @type {number}
 */
export const receiver: Value =
  Value.receiver; /* SHORT_NAMED_ENUMERATED_VALUE */




export const _decode_Value = $._decodeEnumerated;




export const _encode_Value = $._encodeEnumerated;


/* eslint-enable */
