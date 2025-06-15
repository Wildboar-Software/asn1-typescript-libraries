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

/* START_OF_SYMBOL_DEFINITION _enum_for_DatabaseState */
/**
 * @summary DatabaseState
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * DatabaseState  ::=  ENUMERATED {off(0), on(1), waiting(2)}
 * ```@enum {number}
 */
export enum _enum_for_DatabaseState {
  off = 0,
  on = 1,
  waiting = 2,
}
/* END_OF_SYMBOL_DEFINITION _enum_for_DatabaseState */

/* START_OF_SYMBOL_DEFINITION DatabaseState */
/**
 * @summary DatabaseState
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * DatabaseState  ::=  ENUMERATED {off(0), on(1), waiting(2)}
 * ```@enum {number}
 */
export type DatabaseState = _enum_for_DatabaseState;
/* END_OF_SYMBOL_DEFINITION DatabaseState */

/* START_OF_SYMBOL_DEFINITION DatabaseState */
/**
 * @summary DatabaseState
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * DatabaseState  ::=  ENUMERATED {off(0), on(1), waiting(2)}
 * ```@enum {number}
 */
export const DatabaseState = _enum_for_DatabaseState;
/* END_OF_SYMBOL_DEFINITION DatabaseState */

/* START_OF_SYMBOL_DEFINITION DatabaseState_off */
/**
 * @summary DatabaseState_off
 * @constant
 * @type {number}
 */
export const DatabaseState_off: DatabaseState =
  DatabaseState.off; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION DatabaseState_off */

/* START_OF_SYMBOL_DEFINITION off */
/**
 * @summary off
 * @constant
 * @type {number}
 */
export const off: DatabaseState =
  DatabaseState.off; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION off */

/* START_OF_SYMBOL_DEFINITION DatabaseState_on */
/**
 * @summary DatabaseState_on
 * @constant
 * @type {number}
 */
export const DatabaseState_on: DatabaseState =
  DatabaseState.on; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION DatabaseState_on */

/* START_OF_SYMBOL_DEFINITION on */
/**
 * @summary on
 * @constant
 * @type {number}
 */
export const on: DatabaseState =
  DatabaseState.on; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION on */

/* START_OF_SYMBOL_DEFINITION DatabaseState_waiting */
/**
 * @summary DatabaseState_waiting
 * @constant
 * @type {number}
 */
export const DatabaseState_waiting: DatabaseState =
  DatabaseState.waiting; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION DatabaseState_waiting */

/* START_OF_SYMBOL_DEFINITION waiting */
/**
 * @summary waiting
 * @constant
 * @type {number}
 */
export const waiting: DatabaseState =
  DatabaseState.waiting; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION waiting */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_DatabaseState */
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_DatabaseState */

/* START_OF_SYMBOL_DEFINITION _decode_DatabaseState */
export const _decode_DatabaseState = $._decodeEnumerated;
/* END_OF_SYMBOL_DEFINITION _decode_DatabaseState */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_DatabaseState */
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_DatabaseState */

/* START_OF_SYMBOL_DEFINITION _encode_DatabaseState */
export const _encode_DatabaseState = $._encodeEnumerated;

/* END_OF_SYMBOL_DEFINITION _encode_DatabaseState */

/* eslint-enable */
