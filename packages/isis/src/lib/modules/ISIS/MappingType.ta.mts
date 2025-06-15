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
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_MappingType */

/* START_OF_SYMBOL_DEFINITION _decode_MappingType */
export const _decode_MappingType = $._decodeEnumerated;
/* END_OF_SYMBOL_DEFINITION _decode_MappingType */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_MappingType */
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_MappingType */

/* START_OF_SYMBOL_DEFINITION _encode_MappingType */
export const _encode_MappingType = $._encodeEnumerated;

/* END_OF_SYMBOL_DEFINITION _encode_MappingType */

/* eslint-enable */
