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

/* START_OF_SYMBOL_DEFINITION _enum_for_HashValueType_algorithmOID */
/**
 * @summary HashValueType_algorithmOID
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * HashValueType-algorithmOID ::= ENUMERATED { -- REMOVED_FROM_UNNESTING -- }
 * ```@enum {number}
 */
export enum _enum_for_HashValueType_algorithmOID {
  sha_1 = 0,
  sha_256 = 1,
}
/* END_OF_SYMBOL_DEFINITION _enum_for_HashValueType_algorithmOID */

/* START_OF_SYMBOL_DEFINITION HashValueType_algorithmOID */
/**
 * @summary HashValueType_algorithmOID
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * HashValueType-algorithmOID ::= ENUMERATED { -- REMOVED_FROM_UNNESTING -- }
 * ```@enum {number}
 */
export type HashValueType_algorithmOID = _enum_for_HashValueType_algorithmOID;
/* END_OF_SYMBOL_DEFINITION HashValueType_algorithmOID */

/* START_OF_SYMBOL_DEFINITION HashValueType_algorithmOID */
/**
 * @summary HashValueType_algorithmOID
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * HashValueType-algorithmOID ::= ENUMERATED { -- REMOVED_FROM_UNNESTING -- }
 * ```@enum {number}
 */
export const HashValueType_algorithmOID = _enum_for_HashValueType_algorithmOID;
/* END_OF_SYMBOL_DEFINITION HashValueType_algorithmOID */

/* START_OF_SYMBOL_DEFINITION HashValueType_algorithmOID_sha_1 */
/**
 * @summary HashValueType_algorithmOID_sha_1
 * @constant
 * @type {number}
 */
export const HashValueType_algorithmOID_sha_1: HashValueType_algorithmOID =
  HashValueType_algorithmOID.sha_1; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION HashValueType_algorithmOID_sha_1 */

/* START_OF_SYMBOL_DEFINITION sha_1 */
/**
 * @summary sha_1
 * @constant
 * @type {number}
 */
export const sha_1: HashValueType_algorithmOID =
  HashValueType_algorithmOID.sha_1; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION sha_1 */

/* START_OF_SYMBOL_DEFINITION HashValueType_algorithmOID_sha_256 */
/**
 * @summary HashValueType_algorithmOID_sha_256
 * @constant
 * @type {number}
 */
export const HashValueType_algorithmOID_sha_256: HashValueType_algorithmOID =
  HashValueType_algorithmOID.sha_256; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION HashValueType_algorithmOID_sha_256 */

/* START_OF_SYMBOL_DEFINITION sha_256 */
/**
 * @summary sha_256
 * @constant
 * @type {number}
 */
export const sha_256: HashValueType_algorithmOID =
  HashValueType_algorithmOID.sha_256; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION sha_256 */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_HashValueType_algorithmOID */
let _cached_decoder_for_HashValueType_algorithmOID: $.ASN1Decoder<HashValueType_algorithmOID> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_HashValueType_algorithmOID */

/* START_OF_SYMBOL_DEFINITION _decode_HashValueType_algorithmOID */
/**
 * @summary Decodes an ASN.1 element into a(n) HashValueType_algorithmOID
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {HashValueType_algorithmOID} The decoded data structure.
 */
export function _decode_HashValueType_algorithmOID(el: _Element) {
  if (!_cached_decoder_for_HashValueType_algorithmOID) {
    _cached_decoder_for_HashValueType_algorithmOID = $._decodeEnumerated;
  }
  return _cached_decoder_for_HashValueType_algorithmOID(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_HashValueType_algorithmOID */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_HashValueType_algorithmOID */
let _cached_encoder_for_HashValueType_algorithmOID: $.ASN1Encoder<HashValueType_algorithmOID> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_HashValueType_algorithmOID */

/* START_OF_SYMBOL_DEFINITION _encode_HashValueType_algorithmOID */
/**
 * @summary Encodes a(n) HashValueType_algorithmOID into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The HashValueType_algorithmOID, encoded as an ASN.1 Element.
 */
export function _encode_HashValueType_algorithmOID(
  value: HashValueType_algorithmOID,
  elGetter: $.ASN1Encoder<HashValueType_algorithmOID>
) {
  if (!_cached_encoder_for_HashValueType_algorithmOID) {
    _cached_encoder_for_HashValueType_algorithmOID = $._encodeEnumerated;
  }
  return _cached_encoder_for_HashValueType_algorithmOID(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_HashValueType_algorithmOID */

/* eslint-enable */
