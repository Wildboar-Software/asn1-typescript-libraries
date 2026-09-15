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
 * @summary DatabaseState
 * @description
 *
 * State of the Level 1 or Level 2 LSP database (`l1State` / `l2State`).
 * Overload is independent per level. On entering Waiting, the IS floods its own
 * LSP 0 with the LSP Database Overload bit set so other ISs do not use it as a
 * forwarding path.
 *
 * (ISO/IEC 10589:2002 clauses 7.3.19, 11.2.4 and 11.3.1).
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
 * State of the Level 1 or Level 2 LSP database (`l1State` / `l2State`).
 * Overload is independent per level. On entering Waiting, the IS floods its own
 * LSP 0 with the LSP Database Overload bit set so other ISs do not use it as a
 * forwarding path.
 *
 * (ISO/IEC 10589:2002 clauses 7.3.19, 11.2.4 and 11.3.1).
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
 * State of the Level 1 or Level 2 LSP database (`l1State` / `l2State`).
 * Overload is independent per level. On entering Waiting, the IS floods its own
 * LSP 0 with the LSP Database Overload bit set so other ISs do not use it as a
 * forwarding path.
 *
 * (ISO/IEC 10589:2002 clauses 7.3.19, 11.2.4 and 11.3.1).
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
 * @description
 *
 * Database is off.
 *
 * (ISO/IEC 10589:2002 clause 11.3.1).
 *
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
 * @description
 *
 * Database is operating normally. Restored when `waitingTime` expires after
 * overload.
 *
 * (ISO/IEC 10589:2002 clause 7.3.19).
 *
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
 * @description
 *
 * Waiting state: an LSP could not be stored (or Decision Process lacked
 * resources). New LSPs that cannot be stored are ignored and `waitingTime` is
 * restarted.
 *
 * (ISO/IEC 10589:2002 clause 7.3.19).
 *
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
