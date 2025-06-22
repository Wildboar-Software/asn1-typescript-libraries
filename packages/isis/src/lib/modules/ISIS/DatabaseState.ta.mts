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
import * as $ from '@wildboar/asn1/functional';

/**
 * @summary DatabaseState
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * DatabaseState  ::=  ENUMERATED {off(0), on(1), waiting(2)}
 * ```
 *
 * @enum {number}
 */
export enum _enum_for_DatabaseState {
  off = 0,
  on = 1,
  waiting = 2,
}

/**
 * @summary DatabaseState
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * DatabaseState  ::=  ENUMERATED {off(0), on(1), waiting(2)}
 * ```
 *
 * @enum {number}
 */
export type DatabaseState = _enum_for_DatabaseState;

/**
 * @summary DatabaseState
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * DatabaseState  ::=  ENUMERATED {off(0), on(1), waiting(2)}
 * ```
 *
 * @enum {number}
 */
export const DatabaseState = _enum_for_DatabaseState;

/**
 * @summary DatabaseState_off
 * @constant
 * @type {number}
 */
export const DatabaseState_off: DatabaseState =
  DatabaseState.off; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary off
 * @constant
 * @type {number}
 */
export const off: DatabaseState =
  DatabaseState.off; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary DatabaseState_on
 * @constant
 * @type {number}
 */
export const DatabaseState_on: DatabaseState =
  DatabaseState.on; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary on
 * @constant
 * @type {number}
 */
export const on: DatabaseState =
  DatabaseState.on; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary DatabaseState_waiting
 * @constant
 * @type {number}
 */
export const DatabaseState_waiting: DatabaseState =
  DatabaseState.waiting; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary waiting
 * @constant
 * @type {number}
 */
export const waiting: DatabaseState =
  DatabaseState.waiting; /* SHORT_NAMED_ENUMERATED_VALUE */


export const _decode_DatabaseState = $._decodeEnumerated;


export const _encode_DatabaseState = $._encodeEnumerated;


/* eslint-enable */
