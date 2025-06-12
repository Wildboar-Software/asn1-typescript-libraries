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

/* START_OF_SYMBOL_DEFINITION _enum_for_ActionErrorInfo_errorStatus */
export enum _enum_for_ActionErrorInfo_errorStatus {
  accessDenied = 2,
  noSuchAction = 9,
  noSuchArgument = 14,
  invalidArgumentValue = 15,
}
/* END_OF_SYMBOL_DEFINITION _enum_for_ActionErrorInfo_errorStatus */

/* START_OF_SYMBOL_DEFINITION ActionErrorInfo_errorStatus */
/**
 * @summary ActionErrorInfo_errorStatus
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ActionErrorInfo-errorStatus ::= ENUMERATED { -- REMOVED_FROM_UNNESTING -- }
 * ```@enum {number}
 */
export type ActionErrorInfo_errorStatus =
  | _enum_for_ActionErrorInfo_errorStatus
  | ENUMERATED;
/* END_OF_SYMBOL_DEFINITION ActionErrorInfo_errorStatus */

/* START_OF_SYMBOL_DEFINITION ActionErrorInfo_errorStatus_accessDenied */
/**
 * @summary ActionErrorInfo_errorStatus_accessDenied
 * @constant
 * @type {number}
 */
export const ActionErrorInfo_errorStatus_accessDenied: ActionErrorInfo_errorStatus = 2; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION ActionErrorInfo_errorStatus_accessDenied */

/* START_OF_SYMBOL_DEFINITION accessDenied */
/**
 * @summary accessDenied
 * @constant
 * @type {number}
 */
export const accessDenied: ActionErrorInfo_errorStatus = ActionErrorInfo_errorStatus_accessDenied; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION accessDenied */

/* START_OF_SYMBOL_DEFINITION ActionErrorInfo_errorStatus_noSuchAction */
/**
 * @summary ActionErrorInfo_errorStatus_noSuchAction
 * @constant
 * @type {number}
 */
export const ActionErrorInfo_errorStatus_noSuchAction: ActionErrorInfo_errorStatus = 9; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION ActionErrorInfo_errorStatus_noSuchAction */

/* START_OF_SYMBOL_DEFINITION noSuchAction */
/**
 * @summary noSuchAction
 * @constant
 * @type {number}
 */
export const noSuchAction: ActionErrorInfo_errorStatus = ActionErrorInfo_errorStatus_noSuchAction; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION noSuchAction */

/* START_OF_SYMBOL_DEFINITION ActionErrorInfo_errorStatus_noSuchArgument */
/**
 * @summary ActionErrorInfo_errorStatus_noSuchArgument
 * @constant
 * @type {number}
 */
export const ActionErrorInfo_errorStatus_noSuchArgument: ActionErrorInfo_errorStatus = 14; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION ActionErrorInfo_errorStatus_noSuchArgument */

/* START_OF_SYMBOL_DEFINITION noSuchArgument */
/**
 * @summary noSuchArgument
 * @constant
 * @type {number}
 */
export const noSuchArgument: ActionErrorInfo_errorStatus = ActionErrorInfo_errorStatus_noSuchArgument; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION noSuchArgument */

/* START_OF_SYMBOL_DEFINITION ActionErrorInfo_errorStatus_invalidArgumentValue */
/**
 * @summary ActionErrorInfo_errorStatus_invalidArgumentValue
 * @constant
 * @type {number}
 */
export const ActionErrorInfo_errorStatus_invalidArgumentValue: ActionErrorInfo_errorStatus = 15; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION ActionErrorInfo_errorStatus_invalidArgumentValue */

/* START_OF_SYMBOL_DEFINITION invalidArgumentValue */
/**
 * @summary invalidArgumentValue
 * @constant
 * @type {number}
 */
export const invalidArgumentValue: ActionErrorInfo_errorStatus = ActionErrorInfo_errorStatus_invalidArgumentValue; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION invalidArgumentValue */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_ActionErrorInfo_errorStatus */
let _cached_decoder_for_ActionErrorInfo_errorStatus: $.ASN1Decoder<ActionErrorInfo_errorStatus> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_ActionErrorInfo_errorStatus */

/* START_OF_SYMBOL_DEFINITION _decode_ActionErrorInfo_errorStatus */
/**
 * @summary Decodes an ASN.1 element into a(n) ActionErrorInfo_errorStatus
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ActionErrorInfo_errorStatus} The decoded data structure.
 */
export function _decode_ActionErrorInfo_errorStatus(el: _Element) {
  if (!_cached_decoder_for_ActionErrorInfo_errorStatus) {
    _cached_decoder_for_ActionErrorInfo_errorStatus = $._decodeEnumerated;
  }
  return _cached_decoder_for_ActionErrorInfo_errorStatus(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_ActionErrorInfo_errorStatus */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_ActionErrorInfo_errorStatus */
let _cached_encoder_for_ActionErrorInfo_errorStatus: $.ASN1Encoder<ActionErrorInfo_errorStatus> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_ActionErrorInfo_errorStatus */

/* START_OF_SYMBOL_DEFINITION _encode_ActionErrorInfo_errorStatus */
/**
 * @summary Encodes a(n) ActionErrorInfo_errorStatus into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ActionErrorInfo_errorStatus, encoded as an ASN.1 Element.
 */
export function _encode_ActionErrorInfo_errorStatus(
  value: ActionErrorInfo_errorStatus,
  elGetter: $.ASN1Encoder<ActionErrorInfo_errorStatus>
) {
  if (!_cached_encoder_for_ActionErrorInfo_errorStatus) {
    _cached_encoder_for_ActionErrorInfo_errorStatus = $._encodeEnumerated;
  }
  return _cached_encoder_for_ActionErrorInfo_errorStatus(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_ActionErrorInfo_errorStatus */

/* eslint-enable */
