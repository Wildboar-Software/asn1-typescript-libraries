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
 * @summary AdjacencyState
 * @description
 *
 * State of an adjacency managed object (not the X.731 operational state).
 * `Down` is reported in the stateChange notification when the adjacency is
 * deleted.
 *
 * (ISO/IEC 10589:2002 clauses 8.2, 11.2.6 and 11.3.1).
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * AdjacencyState  ::=  ENUMERATED {initializing(0), up(1), failed(2), down(3)}
 * ```
 *
 * @enum {number}
 */
export const _enum_for_AdjacencyState = {
  initializing: 0,
  up: 1,
  failed: 2,
  down: 3,
} as const;

export type _enum_for_AdjacencyState = (typeof _enum_for_AdjacencyState)[keyof typeof _enum_for_AdjacencyState];

/**
 * @summary AdjacencyState
 * @description
 *
 * State of an adjacency managed object (not the X.731 operational state).
 * `Down` is reported in the stateChange notification when the adjacency is
 * deleted.
 *
 * (ISO/IEC 10589:2002 clauses 8.2, 11.2.6 and 11.3.1).
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
 * State of an adjacency managed object (not the X.731 operational state).
 * `Down` is reported in the stateChange notification when the adjacency is
 * deleted.
 *
 * (ISO/IEC 10589:2002 clauses 8.2, 11.2.6 and 11.3.1).
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * AdjacencyState  ::=  ENUMERATED {initializing(0), up(1), failed(2), down(3)}
 * ```
 *
 * @enum {number}
 */
export const AdjacencyState: typeof _enum_for_AdjacencyState = _enum_for_AdjacencyState;

/**
 * @summary AdjacencyState_initializing
 * @description
 *
 * Adjacency exists but has not yet come up (for example after receiving an ISH
 * while neighbour type is still unknown).
 *
 * (ISO/IEC 10589:2002 clause 8.2.2).
 *
 * @constant
 * @type {number}
 */
export const AdjacencyState_initializing: 0 =
  AdjacencyState.initializing; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary initializing
 * @constant
 * @type {number}
 */
export const initializing: 0 =
  AdjacencyState.initializing; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary AdjacencyState_up
 * @description
 *
 * Adjacency is up and may be used for forwarding.
 *
 * (ISO/IEC 10589:2002 clauses 8.2 and 11.2.6.4).
 *
 * @constant
 * @type {number}
 */
export const AdjacencyState_up: 1 =
  AdjacencyState.up; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary up
 * @constant
 * @type {number}
 */
export const up: 1 =
  AdjacencyState.up; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary AdjacencyState_failed
 * @description
 *
 * Adjacency failed to initialise.
 *
 * (ISO/IEC 10589:2002 clause 11.3.1).
 *
 * @constant
 * @type {number}
 */
export const AdjacencyState_failed: 2 =
  AdjacencyState.failed; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary failed
 * @constant
 * @type {number}
 */
export const failed: 2 =
  AdjacencyState.failed; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary AdjacencyState_down
 * @description
 *
 * Adjacency is down; reported when the adjacency is deleted.
 *
 * (ISO/IEC 10589:2002 clause 11.2.6).
 *
 * @constant
 * @type {number}
 */
export const AdjacencyState_down: 3 =
  AdjacencyState.down; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary down
 * @constant
 * @type {number}
 */
export const down: 3 =
  AdjacencyState.down; /* SHORT_NAMED_ENUMERATED_VALUE */


export function _decode_AdjacencyState(el: _Element): AdjacencyState {
  const enumerated = $._decodeEnumerated(el);
  switch (enumerated) {
    case AdjacencyState.initializing: return AdjacencyState.initializing;
    case AdjacencyState.up: return AdjacencyState.up;
    case AdjacencyState.failed: return AdjacencyState.failed;
    case AdjacencyState.down: return AdjacencyState.down;
    default:
      throw new _ConstructionError(
        'Invalid ENUMERATED value ' + enumerated + ' for AdjacencyState.',
        el,
      );
  }
}


export const _encode_AdjacencyState: $.ASN1Encoder<AdjacencyState> = $._encodeEnumerated as $.ASN1Encoder<AdjacencyState>;


/* eslint-enable */
