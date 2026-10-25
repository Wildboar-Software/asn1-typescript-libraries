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
 * Type of a linkage/circuit. Set only when the linkage is created; read-only
 * thereafter.
 *
 * (ISO/IEC 10589:2002 clauses 11.2.5.9 and 11.3.1).
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
export const _enum_for_CircuitType = {
  broadcast: 0,
  ptToPt: 1,
  staticIn: 2,
  staticOut: 3,
  dA: 4,
} as const;

export type _enum_for_CircuitType = (typeof _enum_for_CircuitType)[keyof typeof _enum_for_CircuitType];

/**
 * @summary CircuitType
 * @description
 *
 * Type of a linkage/circuit. Set only when the linkage is created; read-only
 * thereafter.
 *
 * (ISO/IEC 10589:2002 clauses 11.2.5.9 and 11.3.1).
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
 * Type of a linkage/circuit. Set only when the linkage is created; read-only
 * thereafter.
 *
 * (ISO/IEC 10589:2002 clauses 11.2.5.9 and 11.3.1).
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
export const CircuitType: typeof _enum_for_CircuitType = _enum_for_CircuitType;

/**
 * @summary CircuitType_broadcast
 * @description
 *
 * Broadcast subnetwork (LAN). Uses Designated IS election and pseudonode LSPs.
 *
 * (ISO/IEC 10589:2002 clauses 7.2.3 and 8.4).
 *
 * @constant
 * @type {number}
 */
export const CircuitType_broadcast: 0 =
  CircuitType.broadcast; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary broadcast
 * @constant
 * @type {number}
 */
export const broadcast: 0 =
  CircuitType.broadcast; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary CircuitType_ptToPt
 * @description
 *
 * Point-to-point subnetwork.
 *
 * (ISO/IEC 10589:2002 clause 8.2).
 *
 * @constant
 * @type {number}
 */
export const CircuitType_ptToPt: 1 =
  CircuitType.ptToPt; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary ptToPt
 * @constant
 * @type {number}
 */
export const ptToPt: 1 =
  CircuitType.ptToPt; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary CircuitType_staticIn
 * @description
 *
 * Static incoming circuit.
 *
 * (ISO/IEC 10589:2002 clause 11.3.1).
 *
 * @constant
 * @type {number}
 */
export const CircuitType_staticIn: 2 =
  CircuitType.staticIn; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary staticIn
 * @constant
 * @type {number}
 */
export const staticIn: 2 =
  CircuitType.staticIn; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary CircuitType_staticOut
 * @description
 *
 * Static outgoing circuit. Neighbour SNPA and outgoing-call IVMO are
 * configured.
 *
 * (ISO/IEC 10589:2002 clauses 8.2 and 11.2.5.5).
 *
 * @constant
 * @type {number}
 */
export const CircuitType_staticOut: 3 =
  CircuitType.staticOut; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary staticOut
 * @constant
 * @type {number}
 */
export const staticOut: 3 =
  CircuitType.staticOut; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary CircuitType_dA
 * @description
 *
 * ISO 8208 dynamically assigned (DA) circuit.
 *
 * (ISO/IEC 10589:2002 clauses 8.3 and 11.2.5.4).
 *
 * @constant
 * @type {number}
 */
export const CircuitType_dA: 4 =
  CircuitType.dA; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary dA
 * @constant
 * @type {number}
 */
export const dA: 4 =
  CircuitType.dA; /* SHORT_NAMED_ENUMERATED_VALUE */


export function _decode_CircuitType(el: _Element): CircuitType {
  const enumerated = $._decodeEnumerated(el);
  switch (enumerated) {
    case CircuitType.broadcast: return CircuitType.broadcast;
    case CircuitType.ptToPt: return CircuitType.ptToPt;
    case CircuitType.staticIn: return CircuitType.staticIn;
    case CircuitType.staticOut: return CircuitType.staticOut;
    case CircuitType.dA: return CircuitType.dA;
    default:
      throw new _ConstructionError(
        'Invalid ENUMERATED value ' + enumerated + ' for CircuitType.',
        el,
      );
  }
}


export const _encode_CircuitType: $.ASN1Encoder<CircuitType> = $._encodeEnumerated as $.ASN1Encoder<CircuitType>;


/* eslint-enable */
