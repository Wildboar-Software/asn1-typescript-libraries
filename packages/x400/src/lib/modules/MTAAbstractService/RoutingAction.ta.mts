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

/* START_OF_SYMBOL_DEFINITION _enum_for_RoutingAction */
/**
 * @summary RoutingAction
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * RoutingAction  ::=  ENUMERATED {relayed(0), rerouted(1)}
 * ```@enum {number}
 */
export enum _enum_for_RoutingAction {
    relayed = 0,
    rerouted = 1,
}
/* END_OF_SYMBOL_DEFINITION _enum_for_RoutingAction */

/* START_OF_SYMBOL_DEFINITION RoutingAction */
/**
 * @summary RoutingAction
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * RoutingAction  ::=  ENUMERATED {relayed(0), rerouted(1)}
 * ```@enum {number}
 */
export type RoutingAction = _enum_for_RoutingAction;
/* END_OF_SYMBOL_DEFINITION RoutingAction */

/* START_OF_SYMBOL_DEFINITION RoutingAction */
/**
 * @summary RoutingAction
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * RoutingAction  ::=  ENUMERATED {relayed(0), rerouted(1)}
 * ```@enum {number}
 */
export const RoutingAction = _enum_for_RoutingAction;
/* END_OF_SYMBOL_DEFINITION RoutingAction */

/* START_OF_SYMBOL_DEFINITION RoutingAction_relayed */
/**
 * @summary RoutingAction_relayed
 * @constant
 * @type {number}
 */
export const RoutingAction_relayed: RoutingAction =
    RoutingAction.relayed; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION RoutingAction_relayed */

/* START_OF_SYMBOL_DEFINITION relayed */
/**
 * @summary relayed
 * @constant
 * @type {number}
 */
export const relayed: RoutingAction =
    RoutingAction.relayed; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION relayed */

/* START_OF_SYMBOL_DEFINITION RoutingAction_rerouted */
/**
 * @summary RoutingAction_rerouted
 * @constant
 * @type {number}
 */
export const RoutingAction_rerouted: RoutingAction =
    RoutingAction.rerouted; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION RoutingAction_rerouted */

/* START_OF_SYMBOL_DEFINITION rerouted */
/**
 * @summary rerouted
 * @constant
 * @type {number}
 */
export const rerouted: RoutingAction =
    RoutingAction.rerouted; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION rerouted */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_RoutingAction */
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_RoutingAction */

/* START_OF_SYMBOL_DEFINITION _decode_RoutingAction */
export const _decode_RoutingAction = $._decodeEnumerated;
/* END_OF_SYMBOL_DEFINITION _decode_RoutingAction */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_RoutingAction */
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_RoutingAction */

/* START_OF_SYMBOL_DEFINITION _encode_RoutingAction */
export const _encode_RoutingAction = $._encodeEnumerated;

/* END_OF_SYMBOL_DEFINITION _encode_RoutingAction */

/* eslint-enable */
