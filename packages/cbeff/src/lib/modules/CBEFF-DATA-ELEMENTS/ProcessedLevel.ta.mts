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

/* START_OF_SYMBOL_DEFINITION _enum_for_ProcessedLevel */
/**
 * @summary ProcessedLevel
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ProcessedLevel  ::=  ENUMERATED {no-value-available, raw, intermediate, processed
 * }
 * ```@enum {number}
 */
export enum _enum_for_ProcessedLevel {
  no_value_available = 0,
  raw = 1,
  intermediate = 2,
  processed = 3,
}
/* END_OF_SYMBOL_DEFINITION _enum_for_ProcessedLevel */

/* START_OF_SYMBOL_DEFINITION ProcessedLevel */
/**
 * @summary ProcessedLevel
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ProcessedLevel  ::=  ENUMERATED {no-value-available, raw, intermediate, processed
 * }
 * ```@enum {number}
 */
export type ProcessedLevel = _enum_for_ProcessedLevel;
/* END_OF_SYMBOL_DEFINITION ProcessedLevel */

/* START_OF_SYMBOL_DEFINITION ProcessedLevel */
/**
 * @summary ProcessedLevel
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ProcessedLevel  ::=  ENUMERATED {no-value-available, raw, intermediate, processed
 * }
 * ```@enum {number}
 */
export const ProcessedLevel = _enum_for_ProcessedLevel;
/* END_OF_SYMBOL_DEFINITION ProcessedLevel */

/* START_OF_SYMBOL_DEFINITION ProcessedLevel_no_value_available */
/**
 * @summary ProcessedLevel_no_value_available
 * @constant
 * @type {number}
 */
export const ProcessedLevel_no_value_available: ProcessedLevel =
  ProcessedLevel.no_value_available; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION ProcessedLevel_no_value_available */

/* START_OF_SYMBOL_DEFINITION no_value_available */
/**
 * @summary no_value_available
 * @constant
 * @type {number}
 */
export const no_value_available: ProcessedLevel =
  ProcessedLevel.no_value_available; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION no_value_available */

/* START_OF_SYMBOL_DEFINITION ProcessedLevel_raw */
/**
 * @summary ProcessedLevel_raw
 * @constant
 * @type {number}
 */
export const ProcessedLevel_raw: ProcessedLevel =
  ProcessedLevel.raw; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION ProcessedLevel_raw */

/* START_OF_SYMBOL_DEFINITION raw */
/**
 * @summary raw
 * @constant
 * @type {number}
 */
export const raw: ProcessedLevel =
  ProcessedLevel.raw; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION raw */

/* START_OF_SYMBOL_DEFINITION ProcessedLevel_intermediate */
/**
 * @summary ProcessedLevel_intermediate
 * @constant
 * @type {number}
 */
export const ProcessedLevel_intermediate: ProcessedLevel =
  ProcessedLevel.intermediate; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION ProcessedLevel_intermediate */

/* START_OF_SYMBOL_DEFINITION intermediate */
/**
 * @summary intermediate
 * @constant
 * @type {number}
 */
export const intermediate: ProcessedLevel =
  ProcessedLevel.intermediate; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION intermediate */

/* START_OF_SYMBOL_DEFINITION ProcessedLevel_processed */
/**
 * @summary ProcessedLevel_processed
 * @constant
 * @type {number}
 */
export const ProcessedLevel_processed: ProcessedLevel =
  ProcessedLevel.processed; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION ProcessedLevel_processed */

/* START_OF_SYMBOL_DEFINITION processed */
/**
 * @summary processed
 * @constant
 * @type {number}
 */
export const processed: ProcessedLevel =
  ProcessedLevel.processed; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION processed */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_ProcessedLevel */
let _cached_decoder_for_ProcessedLevel: $.ASN1Decoder<ProcessedLevel> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_ProcessedLevel */

/* START_OF_SYMBOL_DEFINITION _decode_ProcessedLevel */
/**
 * @summary Decodes an ASN.1 element into a(n) ProcessedLevel
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ProcessedLevel} The decoded data structure.
 */
export function _decode_ProcessedLevel(el: _Element) {
  if (!_cached_decoder_for_ProcessedLevel) {
    _cached_decoder_for_ProcessedLevel = $._decodeEnumerated;
  }
  return _cached_decoder_for_ProcessedLevel(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_ProcessedLevel */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_ProcessedLevel */
let _cached_encoder_for_ProcessedLevel: $.ASN1Encoder<ProcessedLevel> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_ProcessedLevel */

/* START_OF_SYMBOL_DEFINITION _encode_ProcessedLevel */
/**
 * @summary Encodes a(n) ProcessedLevel into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ProcessedLevel, encoded as an ASN.1 Element.
 */
export function _encode_ProcessedLevel(
  value: ProcessedLevel,
  elGetter: $.ASN1Encoder<ProcessedLevel>
) {
  if (!_cached_encoder_for_ProcessedLevel) {
    _cached_encoder_for_ProcessedLevel = $._encodeEnumerated;
  }
  return _cached_encoder_for_ProcessedLevel(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_ProcessedLevel */

/* eslint-enable */
