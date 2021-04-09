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

/* START_OF_SYMBOL_DEFINITION _enum_for_CMISSync */
/**
 * @summary CMISSync
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * CMISSync  ::=  ENUMERATED {bestEffort(0), atomic(1)}
 * ```@enum {number}
 */
export enum _enum_for_CMISSync {
  bestEffort = 0,
  atomic = 1,
}
/* END_OF_SYMBOL_DEFINITION _enum_for_CMISSync */

/* START_OF_SYMBOL_DEFINITION CMISSync */
/**
 * @summary CMISSync
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * CMISSync  ::=  ENUMERATED {bestEffort(0), atomic(1)}
 * ```@enum {number}
 */
export type CMISSync = _enum_for_CMISSync;
/* END_OF_SYMBOL_DEFINITION CMISSync */

/* START_OF_SYMBOL_DEFINITION CMISSync */
/**
 * @summary CMISSync
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * CMISSync  ::=  ENUMERATED {bestEffort(0), atomic(1)}
 * ```@enum {number}
 */
export const CMISSync = _enum_for_CMISSync;
/* END_OF_SYMBOL_DEFINITION CMISSync */

/* START_OF_SYMBOL_DEFINITION CMISSync_bestEffort */
/**
 * @summary CMISSync_bestEffort
 * @constant
 * @type {number}
 */
export const CMISSync_bestEffort: CMISSync =
  CMISSync.bestEffort; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION CMISSync_bestEffort */

/* START_OF_SYMBOL_DEFINITION bestEffort */
/**
 * @summary bestEffort
 * @constant
 * @type {number}
 */
export const bestEffort: CMISSync =
  CMISSync.bestEffort; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION bestEffort */

/* START_OF_SYMBOL_DEFINITION CMISSync_atomic */
/**
 * @summary CMISSync_atomic
 * @constant
 * @type {number}
 */
export const CMISSync_atomic: CMISSync =
  CMISSync.atomic; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION CMISSync_atomic */

/* START_OF_SYMBOL_DEFINITION atomic */
/**
 * @summary atomic
 * @constant
 * @type {number}
 */
export const atomic: CMISSync =
  CMISSync.atomic; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION atomic */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_CMISSync */
let _cached_decoder_for_CMISSync: $.ASN1Decoder<CMISSync> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_CMISSync */

/* START_OF_SYMBOL_DEFINITION _decode_CMISSync */
/**
 * @summary Decodes an ASN.1 element into a(n) CMISSync
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {CMISSync} The decoded data structure.
 */
export function _decode_CMISSync(el: _Element) {
  if (!_cached_decoder_for_CMISSync) {
    _cached_decoder_for_CMISSync = $._decodeEnumerated;
  }
  return _cached_decoder_for_CMISSync(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_CMISSync */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_CMISSync */
let _cached_encoder_for_CMISSync: $.ASN1Encoder<CMISSync> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_CMISSync */

/* START_OF_SYMBOL_DEFINITION _encode_CMISSync */
/**
 * @summary Encodes a(n) CMISSync into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CMISSync, encoded as an ASN.1 Element.
 */
export function _encode_CMISSync(
  value: CMISSync,
  elGetter: $.ASN1Encoder<CMISSync>
) {
  if (!_cached_encoder_for_CMISSync) {
    _cached_encoder_for_CMISSync = $._encodeEnumerated;
  }
  return _cached_encoder_for_CMISSync(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_CMISSync */

/* eslint-enable */
