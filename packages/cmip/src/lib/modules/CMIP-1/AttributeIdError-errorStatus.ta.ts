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

/* START_OF_SYMBOL_DEFINITION _enum_for_AttributeIdError_errorStatus */
export enum _enum_for_AttributeIdError_errorStatus {
  accessDenied = 2,
  noSuchAttribute = 5,
}
/* END_OF_SYMBOL_DEFINITION _enum_for_AttributeIdError_errorStatus */

/* START_OF_SYMBOL_DEFINITION AttributeIdError_errorStatus */
/**
 * @summary AttributeIdError_errorStatus
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * AttributeIdError-errorStatus ::= ENUMERATED { -- REMOVED_FROM_UNNESTING -- }
 * ```@enum {number}
 */
export type AttributeIdError_errorStatus =
  | _enum_for_AttributeIdError_errorStatus
  | ENUMERATED;
/* END_OF_SYMBOL_DEFINITION AttributeIdError_errorStatus */

/* START_OF_SYMBOL_DEFINITION AttributeIdError_errorStatus_accessDenied */
/**
 * @summary AttributeIdError_errorStatus_accessDenied
 * @constant
 * @type {number}
 */
export const AttributeIdError_errorStatus_accessDenied: AttributeIdError_errorStatus = 2; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION AttributeIdError_errorStatus_accessDenied */

/* START_OF_SYMBOL_DEFINITION accessDenied */
/**
 * @summary accessDenied
 * @constant
 * @type {number}
 */
export const accessDenied: AttributeIdError_errorStatus = AttributeIdError_errorStatus_accessDenied; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION accessDenied */

/* START_OF_SYMBOL_DEFINITION AttributeIdError_errorStatus_noSuchAttribute */
/**
 * @summary AttributeIdError_errorStatus_noSuchAttribute
 * @constant
 * @type {number}
 */
export const AttributeIdError_errorStatus_noSuchAttribute: AttributeIdError_errorStatus = 5; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION AttributeIdError_errorStatus_noSuchAttribute */

/* START_OF_SYMBOL_DEFINITION noSuchAttribute */
/**
 * @summary noSuchAttribute
 * @constant
 * @type {number}
 */
export const noSuchAttribute: AttributeIdError_errorStatus = AttributeIdError_errorStatus_noSuchAttribute; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION noSuchAttribute */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_AttributeIdError_errorStatus */
let _cached_decoder_for_AttributeIdError_errorStatus: $.ASN1Decoder<AttributeIdError_errorStatus> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_AttributeIdError_errorStatus */

/* START_OF_SYMBOL_DEFINITION _decode_AttributeIdError_errorStatus */
/**
 * @summary Decodes an ASN.1 element into a(n) AttributeIdError_errorStatus
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {AttributeIdError_errorStatus} The decoded data structure.
 */
export function _decode_AttributeIdError_errorStatus(el: _Element) {
  if (!_cached_decoder_for_AttributeIdError_errorStatus) {
    _cached_decoder_for_AttributeIdError_errorStatus = $._decodeEnumerated;
  }
  return _cached_decoder_for_AttributeIdError_errorStatus(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_AttributeIdError_errorStatus */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_AttributeIdError_errorStatus */
let _cached_encoder_for_AttributeIdError_errorStatus: $.ASN1Encoder<AttributeIdError_errorStatus> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_AttributeIdError_errorStatus */

/* START_OF_SYMBOL_DEFINITION _encode_AttributeIdError_errorStatus */
/**
 * @summary Encodes a(n) AttributeIdError_errorStatus into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AttributeIdError_errorStatus, encoded as an ASN.1 Element.
 */
export function _encode_AttributeIdError_errorStatus(
  value: AttributeIdError_errorStatus,
  elGetter: $.ASN1Encoder<AttributeIdError_errorStatus>
) {
  if (!_cached_encoder_for_AttributeIdError_errorStatus) {
    _cached_encoder_for_AttributeIdError_errorStatus = $._encodeEnumerated;
  }
  return _cached_encoder_for_AttributeIdError_errorStatus(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_AttributeIdError_errorStatus */

/* eslint-enable */
