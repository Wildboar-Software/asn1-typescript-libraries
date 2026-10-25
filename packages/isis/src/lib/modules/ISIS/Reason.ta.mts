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
 * @summary Reason
 * @description
 *
 * Enumerated adjacency / initialisation failure cause. Defined in the ISIS
 * ASN.1 module; the published GDMO text in clause 11.2 does not attach this
 * type to an attribute.
 *
 * (ISO/IEC 10589:2002 clause 11.3.1).
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * Reason  ::=  ENUMERATED {
 *   holdingTimerExpired(0), checksumError(1), oneWayConnectivity(2),
 *   callRejected(3), reserveTimerExpired(4), circuitDisabled(5), versionSkew(6),
 *   areaMismatch(7), maximumBroadcastIntermediateSystemsExceeded(8),
 *   maximumBroadcastEndSystemsExceeded(9), wrongSystemType(10)}
 * ```
 *
 * @enum {number}
 */
export const _enum_for_Reason = {
  holdingTimerExpired: 0,
  checksumError: 1,
  oneWayConnectivity: 2,
  callRejected: 3,
  reserveTimerExpired: 4,
  circuitDisabled: 5,
  versionSkew: 6,
  areaMismatch: 7,
  maximumBroadcastIntermediateSystemsExceeded: 8,
  maximumBroadcastEndSystemsExceeded: 9,
  wrongSystemType: 10,
} as const;

export type _enum_for_Reason = (typeof _enum_for_Reason)[keyof typeof _enum_for_Reason];

/**
 * @summary Reason
 * @description
 *
 * Enumerated adjacency / initialisation failure cause. Defined in the ISIS
 * ASN.1 module; the published GDMO text in clause 11.2 does not attach this
 * type to an attribute.
 *
 * (ISO/IEC 10589:2002 clause 11.3.1).
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * Reason  ::=  ENUMERATED {
 *   holdingTimerExpired(0), checksumError(1), oneWayConnectivity(2),
 *   callRejected(3), reserveTimerExpired(4), circuitDisabled(5), versionSkew(6),
 *   areaMismatch(7), maximumBroadcastIntermediateSystemsExceeded(8),
 *   maximumBroadcastEndSystemsExceeded(9), wrongSystemType(10)}
 * ```
 *
 * @enum {number}
 */
export type Reason = _enum_for_Reason;

/**
 * @summary Reason
 * @description
 *
 * Enumerated adjacency / initialisation failure cause. Defined in the ISIS
 * ASN.1 module; the published GDMO text in clause 11.2 does not attach this
 * type to an attribute.
 *
 * (ISO/IEC 10589:2002 clause 11.3.1).
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * Reason  ::=  ENUMERATED {
 *   holdingTimerExpired(0), checksumError(1), oneWayConnectivity(2),
 *   callRejected(3), reserveTimerExpired(4), circuitDisabled(5), versionSkew(6),
 *   areaMismatch(7), maximumBroadcastIntermediateSystemsExceeded(8),
 *   maximumBroadcastEndSystemsExceeded(9), wrongSystemType(10)}
 * ```
 *
 * @enum {number}
 */
export const Reason: typeof _enum_for_Reason = _enum_for_Reason;

/**
 * @summary Reason_holdingTimerExpired
 * @description
 *
 * Holding timer for the adjacency expired (no IIH/ESH in time).
 *
 * (ISO/IEC 10589:2002 clauses 8.2.1 and 11.3.1).
 *
 * @constant
 * @type {number}
 */
export const Reason_holdingTimerExpired: 0 =
  Reason.holdingTimerExpired; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary holdingTimerExpired
 * @constant
 * @type {number}
 */
export const holdingTimerExpired: 0 =
  Reason.holdingTimerExpired; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary Reason_checksumError
 * @description
 *
 * Checksum error on a received PDU.
 *
 * (ISO/IEC 10589:2002 clauses 7.3.11 and 11.3.1).
 *
 * @constant
 * @type {number}
 */
export const Reason_checksumError: 1 =
  Reason.checksumError; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary checksumError
 * @constant
 * @type {number}
 */
export const checksumError: 1 =
  Reason.checksumError; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary Reason_oneWayConnectivity
 * @description
 *
 * One-way connectivity detected.
 *
 * (ISO/IEC 10589:2002 clause 11.3.1).
 *
 * @constant
 * @type {number}
 */
export const Reason_oneWayConnectivity: 2 =
  Reason.oneWayConnectivity; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary oneWayConnectivity
 * @constant
 * @type {number}
 */
export const oneWayConnectivity: 2 =
  Reason.oneWayConnectivity; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary Reason_callRejected
 * @description
 *
 * Call rejected (ISO 8208 / DA circuit).
 *
 * (ISO/IEC 10589:2002 clauses 8.3 and 11.3.1).
 *
 * @constant
 * @type {number}
 */
export const Reason_callRejected: 3 =
  Reason.callRejected; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary callRejected
 * @constant
 * @type {number}
 */
export const callRejected: 3 =
  Reason.callRejected; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary Reason_reserveTimerExpired
 * @description
 *
 * Reserve timer expired on a DA circuit.
 *
 * (ISO/IEC 10589:2002 clauses 8.3 and 11.3.1).
 *
 * @constant
 * @type {number}
 */
export const Reason_reserveTimerExpired: 4 =
  Reason.reserveTimerExpired; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary reserveTimerExpired
 * @constant
 * @type {number}
 */
export const reserveTimerExpired: 4 =
  Reason.reserveTimerExpired; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary Reason_circuitDisabled
 * @description
 *
 * Circuit was disabled.
 *
 * (ISO/IEC 10589:2002 clause 11.3.1).
 *
 * @constant
 * @type {number}
 */
export const Reason_circuitDisabled: 5 =
  Reason.circuitDisabled; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary circuitDisabled
 * @constant
 * @type {number}
 */
export const circuitDisabled: 5 =
  Reason.circuitDisabled; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary Reason_versionSkew
 * @description
 *
 * Adjacent system runs an incompatible protocol version.
 *
 * (ISO/IEC 10589:2002 clauses 11.2.5.1 and 11.3.1).
 *
 * @constant
 * @type {number}
 */
export const Reason_versionSkew: 6 =
  Reason.versionSkew; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary versionSkew
 * @constant
 * @type {number}
 */
export const versionSkew: 6 =
  Reason.versionSkew; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary Reason_areaMismatch
 * @description
 *
 * Two Level 1 ISs share no area address.
 *
 * (ISO/IEC 10589:2002 clauses 7.1.5, 11.2.5.1 and 11.3.1).
 *
 * @constant
 * @type {number}
 */
export const Reason_areaMismatch: 7 =
  Reason.areaMismatch; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary areaMismatch
 * @constant
 * @type {number}
 */
export const areaMismatch: 7 =
  Reason.areaMismatch; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary Reason_maximumBroadcastIntermediateSystemsExceeded
 * @description
 *
 * Broadcast circuit IS adjacency limit exceeded.
 *
 * (ISO/IEC 10589:2002 clause 11.3.1).
 *
 * @constant
 * @type {number}
 */
export const Reason_maximumBroadcastIntermediateSystemsExceeded: 8 =
  Reason.maximumBroadcastIntermediateSystemsExceeded; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary maximumBroadcastIntermediateSystemsExceeded
 * @constant
 * @type {number}
 */
export const maximumBroadcastIntermediateSystemsExceeded: 8 =
  Reason.maximumBroadcastIntermediateSystemsExceeded; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary Reason_maximumBroadcastEndSystemsExceeded
 * @description
 *
 * Broadcast circuit ES adjacency limit exceeded.
 *
 * (ISO/IEC 10589:2002 clause 11.3.1).
 *
 * @constant
 * @type {number}
 */
export const Reason_maximumBroadcastEndSystemsExceeded: 9 =
  Reason.maximumBroadcastEndSystemsExceeded; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary maximumBroadcastEndSystemsExceeded
 * @constant
 * @type {number}
 */
export const maximumBroadcastEndSystemsExceeded: 9 =
  Reason.maximumBroadcastEndSystemsExceeded; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary Reason_wrongSystemType
 * @description
 *
 * Neighbour system type is incompatible with this circuit.
 *
 * (ISO/IEC 10589:2002 clauses 8.2.4 and 11.3.1).
 *
 * @constant
 * @type {number}
 */
export const Reason_wrongSystemType: 10 =
  Reason.wrongSystemType; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary wrongSystemType
 * @constant
 * @type {number}
 */
export const wrongSystemType: 10 =
  Reason.wrongSystemType; /* SHORT_NAMED_ENUMERATED_VALUE */


export function _decode_Reason(el: _Element): Reason {
  const enumerated = $._decodeEnumerated(el);
  switch (enumerated) {
    case Reason.holdingTimerExpired: return Reason.holdingTimerExpired;
    case Reason.checksumError: return Reason.checksumError;
    case Reason.oneWayConnectivity: return Reason.oneWayConnectivity;
    case Reason.callRejected: return Reason.callRejected;
    case Reason.reserveTimerExpired: return Reason.reserveTimerExpired;
    case Reason.circuitDisabled: return Reason.circuitDisabled;
    case Reason.versionSkew: return Reason.versionSkew;
    case Reason.areaMismatch: return Reason.areaMismatch;
    case Reason.maximumBroadcastIntermediateSystemsExceeded: return Reason.maximumBroadcastIntermediateSystemsExceeded;
    case Reason.maximumBroadcastEndSystemsExceeded: return Reason.maximumBroadcastEndSystemsExceeded;
    case Reason.wrongSystemType: return Reason.wrongSystemType;
    default:
      throw new _ConstructionError(
        'Invalid ENUMERATED value ' + enumerated + ' for Reason.',
        el,
      );
  }
}


export const _encode_Reason: $.ASN1Encoder<Reason> = $._encodeEnumerated as $.ASN1Encoder<Reason>;


/* eslint-enable */
