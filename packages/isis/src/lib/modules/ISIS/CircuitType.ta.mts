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
} from '@wildboar/asn1';
import * as $ from '@wildboar/asn1/functional';

/**
 * @summary CircuitType
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * CircuitType  ::=  ENUMERATED {
 *   broadcast(0), ptToPt(1), staticIn(2), staticOut(3), dA(4)}
 * ```
 *
 * @enum {number}
 */
export enum _enum_for_CircuitType {
  broadcast = 0,
  ptToPt = 1,
  staticIn = 2,
  staticOut = 3,
  dA = 4,
}

/**
 * @summary CircuitType
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * CircuitType  ::=  ENUMERATED {
 *   broadcast(0), ptToPt(1), staticIn(2), staticOut(3), dA(4)}
 * ```
 *
 * @enum {number}
 */
export type CircuitType = _enum_for_CircuitType;

/**
 * @summary CircuitType
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * CircuitType  ::=  ENUMERATED {
 *   broadcast(0), ptToPt(1), staticIn(2), staticOut(3), dA(4)}
 * ```
 *
 * @enum {number}
 */
export const CircuitType = _enum_for_CircuitType;

/**
 * @summary CircuitType_broadcast
 * @constant
 * @type {number}
 */
export const CircuitType_broadcast: CircuitType =
  CircuitType.broadcast; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary broadcast
 * @constant
 * @type {number}
 */
export const broadcast: CircuitType =
  CircuitType.broadcast; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary CircuitType_ptToPt
 * @constant
 * @type {number}
 */
export const CircuitType_ptToPt: CircuitType =
  CircuitType.ptToPt; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary ptToPt
 * @constant
 * @type {number}
 */
export const ptToPt: CircuitType =
  CircuitType.ptToPt; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary CircuitType_staticIn
 * @constant
 * @type {number}
 */
export const CircuitType_staticIn: CircuitType =
  CircuitType.staticIn; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary staticIn
 * @constant
 * @type {number}
 */
export const staticIn: CircuitType =
  CircuitType.staticIn; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary CircuitType_staticOut
 * @constant
 * @type {number}
 */
export const CircuitType_staticOut: CircuitType =
  CircuitType.staticOut; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary staticOut
 * @constant
 * @type {number}
 */
export const staticOut: CircuitType =
  CircuitType.staticOut; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary CircuitType_dA
 * @constant
 * @type {number}
 */
export const CircuitType_dA: CircuitType =
  CircuitType.dA; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary dA
 * @constant
 * @type {number}
 */
export const dA: CircuitType =
  CircuitType.dA; /* SHORT_NAMED_ENUMERATED_VALUE */


export const _decode_CircuitType = $._decodeEnumerated;


export const _encode_CircuitType = $._encodeEnumerated;


/* eslint-enable */
