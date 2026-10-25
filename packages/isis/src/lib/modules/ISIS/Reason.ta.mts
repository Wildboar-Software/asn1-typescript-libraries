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
export enum _enum_for_Reason {
  holdingTimerExpired = 0,
  checksumError = 1,
  oneWayConnectivity = 2,
  callRejected = 3,
  reserveTimerExpired = 4,
  circuitDisabled = 5,
  versionSkew = 6,
  areaMismatch = 7,
  maximumBroadcastIntermediateSystemsExceeded = 8,
  maximumBroadcastEndSystemsExceeded = 9,
  wrongSystemType = 10,
}

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
export const Reason_holdingTimerExpired: _enum_for_Reason.holdingTimerExpired =
  Reason.holdingTimerExpired; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary holdingTimerExpired
 * @constant
 * @type {number}
 */
export const holdingTimerExpired: _enum_for_Reason.holdingTimerExpired =
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
export const Reason_checksumError: _enum_for_Reason.checksumError =
  Reason.checksumError; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary checksumError
 * @constant
 * @type {number}
 */
export const checksumError: _enum_for_Reason.checksumError =
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
export const Reason_oneWayConnectivity: _enum_for_Reason.oneWayConnectivity =
  Reason.oneWayConnectivity; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary oneWayConnectivity
 * @constant
 * @type {number}
 */
export const oneWayConnectivity: _enum_for_Reason.oneWayConnectivity =
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
export const Reason_callRejected: _enum_for_Reason.callRejected =
  Reason.callRejected; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary callRejected
 * @constant
 * @type {number}
 */
export const callRejected: _enum_for_Reason.callRejected =
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
export const Reason_reserveTimerExpired: _enum_for_Reason.reserveTimerExpired =
  Reason.reserveTimerExpired; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary reserveTimerExpired
 * @constant
 * @type {number}
 */
export const reserveTimerExpired: _enum_for_Reason.reserveTimerExpired =
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
export const Reason_circuitDisabled: _enum_for_Reason.circuitDisabled =
  Reason.circuitDisabled; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary circuitDisabled
 * @constant
 * @type {number}
 */
export const circuitDisabled: _enum_for_Reason.circuitDisabled =
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
export const Reason_versionSkew: _enum_for_Reason.versionSkew =
  Reason.versionSkew; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary versionSkew
 * @constant
 * @type {number}
 */
export const versionSkew: _enum_for_Reason.versionSkew =
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
export const Reason_areaMismatch: _enum_for_Reason.areaMismatch =
  Reason.areaMismatch; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary areaMismatch
 * @constant
 * @type {number}
 */
export const areaMismatch: _enum_for_Reason.areaMismatch =
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
export const Reason_maximumBroadcastIntermediateSystemsExceeded: _enum_for_Reason.maximumBroadcastIntermediateSystemsExceeded =
  Reason.maximumBroadcastIntermediateSystemsExceeded; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary maximumBroadcastIntermediateSystemsExceeded
 * @constant
 * @type {number}
 */
export const maximumBroadcastIntermediateSystemsExceeded: _enum_for_Reason.maximumBroadcastIntermediateSystemsExceeded =
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
export const Reason_maximumBroadcastEndSystemsExceeded: _enum_for_Reason.maximumBroadcastEndSystemsExceeded =
  Reason.maximumBroadcastEndSystemsExceeded; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary maximumBroadcastEndSystemsExceeded
 * @constant
 * @type {number}
 */
export const maximumBroadcastEndSystemsExceeded: _enum_for_Reason.maximumBroadcastEndSystemsExceeded =
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
export const Reason_wrongSystemType: _enum_for_Reason.wrongSystemType =
  Reason.wrongSystemType; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary wrongSystemType
 * @constant
 * @type {number}
 */
export const wrongSystemType: _enum_for_Reason.wrongSystemType =
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
