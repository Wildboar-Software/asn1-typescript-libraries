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

/* START_OF_SYMBOL_DEFINITION _enum_for_CMIPAbortSource */
/**
 * @summary CMIPAbortSource
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * CMIPAbortSource  ::=  ENUMERATED {cmiseServiceUser(0), cmiseServiceProvider(1)}
 * ```@enum {number}
 */
export enum _enum_for_CMIPAbortSource {
  cmiseServiceUser = 0,
  cmiseServiceProvider = 1,
}
/* END_OF_SYMBOL_DEFINITION _enum_for_CMIPAbortSource */

/* START_OF_SYMBOL_DEFINITION CMIPAbortSource */
/**
 * @summary CMIPAbortSource
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * CMIPAbortSource  ::=  ENUMERATED {cmiseServiceUser(0), cmiseServiceProvider(1)}
 * ```@enum {number}
 */
export type CMIPAbortSource = _enum_for_CMIPAbortSource;
/* END_OF_SYMBOL_DEFINITION CMIPAbortSource */

/* START_OF_SYMBOL_DEFINITION CMIPAbortSource */
/**
 * @summary CMIPAbortSource
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * CMIPAbortSource  ::=  ENUMERATED {cmiseServiceUser(0), cmiseServiceProvider(1)}
 * ```@enum {number}
 */
export const CMIPAbortSource = _enum_for_CMIPAbortSource;
/* END_OF_SYMBOL_DEFINITION CMIPAbortSource */

/* START_OF_SYMBOL_DEFINITION CMIPAbortSource_cmiseServiceUser */
/**
 * @summary CMIPAbortSource_cmiseServiceUser
 * @constant
 * @type {number}
 */
export const CMIPAbortSource_cmiseServiceUser: CMIPAbortSource =
  CMIPAbortSource.cmiseServiceUser; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION CMIPAbortSource_cmiseServiceUser */

/* START_OF_SYMBOL_DEFINITION cmiseServiceUser */
/**
 * @summary cmiseServiceUser
 * @constant
 * @type {number}
 */
export const cmiseServiceUser: CMIPAbortSource =
  CMIPAbortSource.cmiseServiceUser; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION cmiseServiceUser */

/* START_OF_SYMBOL_DEFINITION CMIPAbortSource_cmiseServiceProvider */
/**
 * @summary CMIPAbortSource_cmiseServiceProvider
 * @constant
 * @type {number}
 */
export const CMIPAbortSource_cmiseServiceProvider: CMIPAbortSource =
  CMIPAbortSource.cmiseServiceProvider; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION CMIPAbortSource_cmiseServiceProvider */

/* START_OF_SYMBOL_DEFINITION cmiseServiceProvider */
/**
 * @summary cmiseServiceProvider
 * @constant
 * @type {number}
 */
export const cmiseServiceProvider: CMIPAbortSource =
  CMIPAbortSource.cmiseServiceProvider; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION cmiseServiceProvider */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_CMIPAbortSource */
let _cached_decoder_for_CMIPAbortSource: $.ASN1Decoder<CMIPAbortSource> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_CMIPAbortSource */

/* START_OF_SYMBOL_DEFINITION _decode_CMIPAbortSource */
/**
 * @summary Decodes an ASN.1 element into a(n) CMIPAbortSource
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {CMIPAbortSource} The decoded data structure.
 */
export function _decode_CMIPAbortSource(el: _Element) {
  if (!_cached_decoder_for_CMIPAbortSource) {
    _cached_decoder_for_CMIPAbortSource = $._decodeEnumerated;
  }
  return _cached_decoder_for_CMIPAbortSource(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_CMIPAbortSource */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_CMIPAbortSource */
let _cached_encoder_for_CMIPAbortSource: $.ASN1Encoder<CMIPAbortSource> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_CMIPAbortSource */

/* START_OF_SYMBOL_DEFINITION _encode_CMIPAbortSource */
/**
 * @summary Encodes a(n) CMIPAbortSource into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CMIPAbortSource, encoded as an ASN.1 Element.
 */
export function _encode_CMIPAbortSource(
  value: CMIPAbortSource,
  elGetter: $.ASN1Encoder<CMIPAbortSource>
) {
  if (!_cached_encoder_for_CMIPAbortSource) {
    _cached_encoder_for_CMIPAbortSource = $._encodeEnumerated;
  }
  return _cached_encoder_for_CMIPAbortSource(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_CMIPAbortSource */

/* eslint-enable */
