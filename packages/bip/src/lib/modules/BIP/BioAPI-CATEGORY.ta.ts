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

/* START_OF_SYMBOL_DEFINITION _enum_for_BioAPI_CATEGORY */
export enum _enum_for_BioAPI_CATEGORY {
  archive = 0,
  comparisonAlgorithm = 1,
  processingAlgorithm = 2,
  sensor = 3,
}
/* END_OF_SYMBOL_DEFINITION _enum_for_BioAPI_CATEGORY */

/* START_OF_SYMBOL_DEFINITION BioAPI_CATEGORY */
/**
 * @summary BioAPI_CATEGORY
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * BioAPI-CATEGORY  ::=  ENUMERATED {
 *   archive, comparisonAlgorithm, processingAlgorithm, sensor, ...
 *   }
 * ```@enum {number}
 */
export type BioAPI_CATEGORY = _enum_for_BioAPI_CATEGORY | ENUMERATED;
/* END_OF_SYMBOL_DEFINITION BioAPI_CATEGORY */

/* START_OF_SYMBOL_DEFINITION BioAPI_CATEGORY_archive */
/**
 * @summary BioAPI_CATEGORY_archive
 * @constant
 * @type {number}
 */
export const BioAPI_CATEGORY_archive: BioAPI_CATEGORY = 0; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION BioAPI_CATEGORY_archive */

/* START_OF_SYMBOL_DEFINITION archive */
/**
 * @summary archive
 * @constant
 * @type {number}
 */
export const archive: BioAPI_CATEGORY = BioAPI_CATEGORY_archive; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION archive */

/* START_OF_SYMBOL_DEFINITION BioAPI_CATEGORY_comparisonAlgorithm */
/**
 * @summary BioAPI_CATEGORY_comparisonAlgorithm
 * @constant
 * @type {number}
 */
export const BioAPI_CATEGORY_comparisonAlgorithm: BioAPI_CATEGORY = 1; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION BioAPI_CATEGORY_comparisonAlgorithm */

/* START_OF_SYMBOL_DEFINITION comparisonAlgorithm */
/**
 * @summary comparisonAlgorithm
 * @constant
 * @type {number}
 */
export const comparisonAlgorithm: BioAPI_CATEGORY = BioAPI_CATEGORY_comparisonAlgorithm; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION comparisonAlgorithm */

/* START_OF_SYMBOL_DEFINITION BioAPI_CATEGORY_processingAlgorithm */
/**
 * @summary BioAPI_CATEGORY_processingAlgorithm
 * @constant
 * @type {number}
 */
export const BioAPI_CATEGORY_processingAlgorithm: BioAPI_CATEGORY = 2; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION BioAPI_CATEGORY_processingAlgorithm */

/* START_OF_SYMBOL_DEFINITION processingAlgorithm */
/**
 * @summary processingAlgorithm
 * @constant
 * @type {number}
 */
export const processingAlgorithm: BioAPI_CATEGORY = BioAPI_CATEGORY_processingAlgorithm; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION processingAlgorithm */

/* START_OF_SYMBOL_DEFINITION BioAPI_CATEGORY_sensor */
/**
 * @summary BioAPI_CATEGORY_sensor
 * @constant
 * @type {number}
 */
export const BioAPI_CATEGORY_sensor: BioAPI_CATEGORY = 3; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION BioAPI_CATEGORY_sensor */

/* START_OF_SYMBOL_DEFINITION sensor */
/**
 * @summary sensor
 * @constant
 * @type {number}
 */
export const sensor: BioAPI_CATEGORY = BioAPI_CATEGORY_sensor; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION sensor */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_BioAPI_CATEGORY */
let _cached_decoder_for_BioAPI_CATEGORY: $.ASN1Decoder<BioAPI_CATEGORY> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_BioAPI_CATEGORY */

/* START_OF_SYMBOL_DEFINITION _decode_BioAPI_CATEGORY */
/**
 * @summary Decodes an ASN.1 element into a(n) BioAPI_CATEGORY
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {BioAPI_CATEGORY} The decoded data structure.
 */
export function _decode_BioAPI_CATEGORY(el: _Element) {
  if (!_cached_decoder_for_BioAPI_CATEGORY) {
    _cached_decoder_for_BioAPI_CATEGORY = $._decodeEnumerated;
  }
  return _cached_decoder_for_BioAPI_CATEGORY(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_BioAPI_CATEGORY */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_BioAPI_CATEGORY */
let _cached_encoder_for_BioAPI_CATEGORY: $.ASN1Encoder<BioAPI_CATEGORY> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_BioAPI_CATEGORY */

/* START_OF_SYMBOL_DEFINITION _encode_BioAPI_CATEGORY */
/**
 * @summary Encodes a(n) BioAPI_CATEGORY into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The BioAPI_CATEGORY, encoded as an ASN.1 Element.
 */
export function _encode_BioAPI_CATEGORY(
  value: BioAPI_CATEGORY,
  elGetter: $.ASN1Encoder<BioAPI_CATEGORY>
) {
  if (!_cached_encoder_for_BioAPI_CATEGORY) {
    _cached_encoder_for_BioAPI_CATEGORY = $._encodeEnumerated;
  }
  return _cached_encoder_for_BioAPI_CATEGORY(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_BioAPI_CATEGORY */

/* eslint-enable */
