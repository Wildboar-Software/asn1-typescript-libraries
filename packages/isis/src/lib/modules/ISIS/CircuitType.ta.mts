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

/* START_OF_SYMBOL_DEFINITION _enum_for_CircuitType */
/**
 * @summary CircuitType
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * CircuitType  ::=  ENUMERATED {
 *   broadcast(0), ptToPt(1), staticIn(2), staticOut(3), dA(4)}
 * ```@enum {number}
 */
export enum _enum_for_CircuitType {
  broadcast = 0,
  ptToPt = 1,
  staticIn = 2,
  staticOut = 3,
  dA = 4,
}
/* END_OF_SYMBOL_DEFINITION _enum_for_CircuitType */

/* START_OF_SYMBOL_DEFINITION CircuitType */
/**
 * @summary CircuitType
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * CircuitType  ::=  ENUMERATED {
 *   broadcast(0), ptToPt(1), staticIn(2), staticOut(3), dA(4)}
 * ```@enum {number}
 */
export type CircuitType = _enum_for_CircuitType;
/* END_OF_SYMBOL_DEFINITION CircuitType */

/* START_OF_SYMBOL_DEFINITION CircuitType */
/**
 * @summary CircuitType
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * CircuitType  ::=  ENUMERATED {
 *   broadcast(0), ptToPt(1), staticIn(2), staticOut(3), dA(4)}
 * ```@enum {number}
 */
export const CircuitType = _enum_for_CircuitType;
/* END_OF_SYMBOL_DEFINITION CircuitType */

/* START_OF_SYMBOL_DEFINITION CircuitType_broadcast */
/**
 * @summary CircuitType_broadcast
 * @constant
 * @type {number}
 */
export const CircuitType_broadcast: CircuitType =
  CircuitType.broadcast; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION CircuitType_broadcast */

/* START_OF_SYMBOL_DEFINITION broadcast */
/**
 * @summary broadcast
 * @constant
 * @type {number}
 */
export const broadcast: CircuitType =
  CircuitType.broadcast; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION broadcast */

/* START_OF_SYMBOL_DEFINITION CircuitType_ptToPt */
/**
 * @summary CircuitType_ptToPt
 * @constant
 * @type {number}
 */
export const CircuitType_ptToPt: CircuitType =
  CircuitType.ptToPt; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION CircuitType_ptToPt */

/* START_OF_SYMBOL_DEFINITION ptToPt */
/**
 * @summary ptToPt
 * @constant
 * @type {number}
 */
export const ptToPt: CircuitType =
  CircuitType.ptToPt; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION ptToPt */

/* START_OF_SYMBOL_DEFINITION CircuitType_staticIn */
/**
 * @summary CircuitType_staticIn
 * @constant
 * @type {number}
 */
export const CircuitType_staticIn: CircuitType =
  CircuitType.staticIn; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION CircuitType_staticIn */

/* START_OF_SYMBOL_DEFINITION staticIn */
/**
 * @summary staticIn
 * @constant
 * @type {number}
 */
export const staticIn: CircuitType =
  CircuitType.staticIn; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION staticIn */

/* START_OF_SYMBOL_DEFINITION CircuitType_staticOut */
/**
 * @summary CircuitType_staticOut
 * @constant
 * @type {number}
 */
export const CircuitType_staticOut: CircuitType =
  CircuitType.staticOut; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION CircuitType_staticOut */

/* START_OF_SYMBOL_DEFINITION staticOut */
/**
 * @summary staticOut
 * @constant
 * @type {number}
 */
export const staticOut: CircuitType =
  CircuitType.staticOut; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION staticOut */

/* START_OF_SYMBOL_DEFINITION CircuitType_dA */
/**
 * @summary CircuitType_dA
 * @constant
 * @type {number}
 */
export const CircuitType_dA: CircuitType =
  CircuitType.dA; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION CircuitType_dA */

/* START_OF_SYMBOL_DEFINITION dA */
/**
 * @summary dA
 * @constant
 * @type {number}
 */
export const dA: CircuitType =
  CircuitType.dA; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION dA */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_CircuitType */
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_CircuitType */

/* START_OF_SYMBOL_DEFINITION _decode_CircuitType */
export const _decode_CircuitType = $._decodeEnumerated;
/* END_OF_SYMBOL_DEFINITION _decode_CircuitType */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_CircuitType */
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_CircuitType */

/* START_OF_SYMBOL_DEFINITION _encode_CircuitType */
export const _encode_CircuitType = $._encodeEnumerated;

/* END_OF_SYMBOL_DEFINITION _encode_CircuitType */

/* eslint-enable */
