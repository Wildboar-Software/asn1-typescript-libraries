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
 * @summary RoutingAction
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * RoutingAction  ::=  ENUMERATED {relayed(0), rerouted(1)}
 * ```
 *
 * @enum {number}
 */
export enum _enum_for_RoutingAction {
    relayed = 0,
    rerouted = 1,
}

/**
 * @summary RoutingAction
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * RoutingAction  ::=  ENUMERATED {relayed(0), rerouted(1)}
 * ```
 *
 * @enum {number}
 */
export type RoutingAction = _enum_for_RoutingAction;

/**
 * @summary RoutingAction
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * RoutingAction  ::=  ENUMERATED {relayed(0), rerouted(1)}
 * ```
 *
 * @enum {number}
 */
export const RoutingAction = _enum_for_RoutingAction;

/**
 * @summary RoutingAction_relayed
 * @constant
 * @type {number}
 */
export const RoutingAction_relayed: RoutingAction =
    RoutingAction.relayed; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary relayed
 * @constant
 * @type {number}
 */
export const relayed: RoutingAction =
    RoutingAction.relayed; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary RoutingAction_rerouted
 * @constant
 * @type {number}
 */
export const RoutingAction_rerouted: RoutingAction =
    RoutingAction.rerouted; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary rerouted
 * @constant
 * @type {number}
 */
export const rerouted: RoutingAction =
    RoutingAction.rerouted; /* SHORT_NAMED_ENUMERATED_VALUE */


export const _decode_RoutingAction = $._decodeEnumerated;


export const _encode_RoutingAction = $._encodeEnumerated;


/* eslint-enable */
