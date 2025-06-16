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

/**
 * @summary AdjacencyState
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * AdjacencyState  ::=  ENUMERATED {initializing(0), up(1), failed(2), down(3)}
 * ```
 *
 * @enum {number}
 */
export enum _enum_for_AdjacencyState {
  initializing = 0,
  up = 1,
  failed = 2,
  down = 3,
}

/**
 * @summary AdjacencyState
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * AdjacencyState  ::=  ENUMERATED {initializing(0), up(1), failed(2), down(3)}
 * ```
 *
 * @enum {number}
 */
export type AdjacencyState = _enum_for_AdjacencyState;

/**
 * @summary AdjacencyState
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * AdjacencyState  ::=  ENUMERATED {initializing(0), up(1), failed(2), down(3)}
 * ```
 *
 * @enum {number}
 */
export const AdjacencyState = _enum_for_AdjacencyState;

/**
 * @summary AdjacencyState_initializing
 * @constant
 * @type {number}
 */
export const AdjacencyState_initializing: AdjacencyState =
  AdjacencyState.initializing; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary initializing
 * @constant
 * @type {number}
 */
export const initializing: AdjacencyState =
  AdjacencyState.initializing; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary AdjacencyState_up
 * @constant
 * @type {number}
 */
export const AdjacencyState_up: AdjacencyState =
  AdjacencyState.up; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary up
 * @constant
 * @type {number}
 */
export const up: AdjacencyState =
  AdjacencyState.up; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary AdjacencyState_failed
 * @constant
 * @type {number}
 */
export const AdjacencyState_failed: AdjacencyState =
  AdjacencyState.failed; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary failed
 * @constant
 * @type {number}
 */
export const failed: AdjacencyState =
  AdjacencyState.failed; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary AdjacencyState_down
 * @constant
 * @type {number}
 */
export const AdjacencyState_down: AdjacencyState =
  AdjacencyState.down; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary down
 * @constant
 * @type {number}
 */
export const down: AdjacencyState =
  AdjacencyState.down; /* SHORT_NAMED_ENUMERATED_VALUE */


export const _decode_AdjacencyState = $._decodeEnumerated;


export const _encode_AdjacencyState = $._encodeEnumerated;


/* eslint-enable */
