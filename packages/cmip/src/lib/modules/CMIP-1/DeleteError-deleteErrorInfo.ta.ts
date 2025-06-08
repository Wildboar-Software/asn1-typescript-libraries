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

/* START_OF_SYMBOL_DEFINITION _enum_for_DeleteError_deleteErrorInfo */
export enum _enum_for_DeleteError_deleteErrorInfo {
  accessDenied = 2,
}
/* END_OF_SYMBOL_DEFINITION _enum_for_DeleteError_deleteErrorInfo */

/* START_OF_SYMBOL_DEFINITION DeleteError_deleteErrorInfo */
/**
 * @summary DeleteError_deleteErrorInfo
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * DeleteError-deleteErrorInfo ::= ENUMERATED { -- REMOVED_FROM_UNNESTING -- }
 * ```@enum {number}
 */
export type DeleteError_deleteErrorInfo =
  | _enum_for_DeleteError_deleteErrorInfo
  | ENUMERATED;
/* END_OF_SYMBOL_DEFINITION DeleteError_deleteErrorInfo */

/* START_OF_SYMBOL_DEFINITION DeleteError_deleteErrorInfo_accessDenied */
/**
 * @summary DeleteError_deleteErrorInfo_accessDenied
 * @constant
 * @type {number}
 */
export const DeleteError_deleteErrorInfo_accessDenied: DeleteError_deleteErrorInfo = 2; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION DeleteError_deleteErrorInfo_accessDenied */

/* START_OF_SYMBOL_DEFINITION accessDenied */
/**
 * @summary accessDenied
 * @constant
 * @type {number}
 */
export const accessDenied: DeleteError_deleteErrorInfo = DeleteError_deleteErrorInfo_accessDenied; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION accessDenied */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_DeleteError_deleteErrorInfo */
let _cached_decoder_for_DeleteError_deleteErrorInfo: $.ASN1Decoder<DeleteError_deleteErrorInfo> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_DeleteError_deleteErrorInfo */

/* START_OF_SYMBOL_DEFINITION _decode_DeleteError_deleteErrorInfo */
/**
 * @summary Decodes an ASN.1 element into a(n) DeleteError_deleteErrorInfo
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {DeleteError_deleteErrorInfo} The decoded data structure.
 */
export function _decode_DeleteError_deleteErrorInfo(el: _Element) {
  if (!_cached_decoder_for_DeleteError_deleteErrorInfo) {
    _cached_decoder_for_DeleteError_deleteErrorInfo = $._decodeEnumerated;
  }
  return _cached_decoder_for_DeleteError_deleteErrorInfo(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_DeleteError_deleteErrorInfo */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_DeleteError_deleteErrorInfo */
let _cached_encoder_for_DeleteError_deleteErrorInfo: $.ASN1Encoder<DeleteError_deleteErrorInfo> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_DeleteError_deleteErrorInfo */

/* START_OF_SYMBOL_DEFINITION _encode_DeleteError_deleteErrorInfo */
/**
 * @summary Encodes a(n) DeleteError_deleteErrorInfo into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The DeleteError_deleteErrorInfo, encoded as an ASN.1 Element.
 */
export function _encode_DeleteError_deleteErrorInfo(
  value: DeleteError_deleteErrorInfo,
  elGetter: $.ASN1Encoder<DeleteError_deleteErrorInfo>
) {
  if (!_cached_encoder_for_DeleteError_deleteErrorInfo) {
    _cached_encoder_for_DeleteError_deleteErrorInfo = $._encodeEnumerated;
  }
  return _cached_encoder_for_DeleteError_deleteErrorInfo(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_DeleteError_deleteErrorInfo */

/* eslint-enable */
