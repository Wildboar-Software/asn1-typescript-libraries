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

/* START_OF_SYMBOL_DEFINITION _enum_for_MappingType */
/**
 * @summary MappingType
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * MappingType  ::=  ENUMERATED {none(0), explicit(1), extractIDI(2), extractDSP(3)}
 * ```@enum {number}
 */
export enum _enum_for_MappingType {
  none = 0,
  explicit = 1,
  extractIDI = 2,
  extractDSP = 3,
}
/* END_OF_SYMBOL_DEFINITION _enum_for_MappingType */

/* START_OF_SYMBOL_DEFINITION MappingType */
/**
 * @summary MappingType
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * MappingType  ::=  ENUMERATED {none(0), explicit(1), extractIDI(2), extractDSP(3)}
 * ```@enum {number}
 */
export type MappingType = _enum_for_MappingType;
/* END_OF_SYMBOL_DEFINITION MappingType */

/* START_OF_SYMBOL_DEFINITION MappingType */
/**
 * @summary MappingType
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * MappingType  ::=  ENUMERATED {none(0), explicit(1), extractIDI(2), extractDSP(3)}
 * ```@enum {number}
 */
export const MappingType = _enum_for_MappingType;
/* END_OF_SYMBOL_DEFINITION MappingType */

/* START_OF_SYMBOL_DEFINITION MappingType_none */
/**
 * @summary MappingType_none
 * @constant
 * @type {number}
 */
export const MappingType_none: MappingType =
  MappingType.none; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION MappingType_none */

/* START_OF_SYMBOL_DEFINITION none */
/**
 * @summary none
 * @constant
 * @type {number}
 */
export const none: MappingType =
  MappingType.none; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION none */

/* START_OF_SYMBOL_DEFINITION MappingType_explicit */
/**
 * @summary MappingType_explicit
 * @constant
 * @type {number}
 */
export const MappingType_explicit: MappingType =
  MappingType.explicit; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION MappingType_explicit */

/* START_OF_SYMBOL_DEFINITION explicit */
/**
 * @summary explicit
 * @constant
 * @type {number}
 */
export const explicit: MappingType =
  MappingType.explicit; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION explicit */

/* START_OF_SYMBOL_DEFINITION MappingType_extractIDI */
/**
 * @summary MappingType_extractIDI
 * @constant
 * @type {number}
 */
export const MappingType_extractIDI: MappingType =
  MappingType.extractIDI; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION MappingType_extractIDI */

/* START_OF_SYMBOL_DEFINITION extractIDI */
/**
 * @summary extractIDI
 * @constant
 * @type {number}
 */
export const extractIDI: MappingType =
  MappingType.extractIDI; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION extractIDI */

/* START_OF_SYMBOL_DEFINITION MappingType_extractDSP */
/**
 * @summary MappingType_extractDSP
 * @constant
 * @type {number}
 */
export const MappingType_extractDSP: MappingType =
  MappingType.extractDSP; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION MappingType_extractDSP */

/* START_OF_SYMBOL_DEFINITION extractDSP */
/**
 * @summary extractDSP
 * @constant
 * @type {number}
 */
export const extractDSP: MappingType =
  MappingType.extractDSP; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION extractDSP */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_MappingType */
let _cached_decoder_for_MappingType: $.ASN1Decoder<MappingType> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_MappingType */

/* START_OF_SYMBOL_DEFINITION _decode_MappingType */
/**
 * @summary Decodes an ASN.1 element into a(n) MappingType
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {MappingType} The decoded data structure.
 */
export function _decode_MappingType(el: _Element) {
  if (!_cached_decoder_for_MappingType) {
    _cached_decoder_for_MappingType = $._decodeEnumerated;
  }
  return _cached_decoder_for_MappingType(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_MappingType */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_MappingType */
let _cached_encoder_for_MappingType: $.ASN1Encoder<MappingType> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_MappingType */

/* START_OF_SYMBOL_DEFINITION _encode_MappingType */
/**
 * @summary Encodes a(n) MappingType into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The MappingType, encoded as an ASN.1 Element.
 */
export function _encode_MappingType(
  value: MappingType,
  elGetter: $.ASN1Encoder<MappingType>
) {
  if (!_cached_encoder_for_MappingType) {
    _cached_encoder_for_MappingType = $._encodeEnumerated;
  }
  return _cached_encoder_for_MappingType(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_MappingType */

/* eslint-enable */
