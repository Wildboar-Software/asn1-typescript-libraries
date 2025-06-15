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

/* START_OF_SYMBOL_DEFINITION _enum_for_DeniedMeteringAction */
/**
 * @summary DeniedMeteringAction
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * DeniedMeteringAction  ::=  ENUMERATED {
 *   canNotStart(0), canNotSuspend(1), canNotResume(2)}
 * ```@enum {number}
 */
export enum _enum_for_DeniedMeteringAction {
    canNotStart = 0,
    canNotSuspend = 1,
    canNotResume = 2,
}
/* END_OF_SYMBOL_DEFINITION _enum_for_DeniedMeteringAction */

/* START_OF_SYMBOL_DEFINITION DeniedMeteringAction */
/**
 * @summary DeniedMeteringAction
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * DeniedMeteringAction  ::=  ENUMERATED {
 *   canNotStart(0), canNotSuspend(1), canNotResume(2)}
 * ```@enum {number}
 */
export type DeniedMeteringAction = _enum_for_DeniedMeteringAction;
/* END_OF_SYMBOL_DEFINITION DeniedMeteringAction */

/* START_OF_SYMBOL_DEFINITION DeniedMeteringAction */
/**
 * @summary DeniedMeteringAction
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * DeniedMeteringAction  ::=  ENUMERATED {
 *   canNotStart(0), canNotSuspend(1), canNotResume(2)}
 * ```@enum {number}
 */
export const DeniedMeteringAction = _enum_for_DeniedMeteringAction;
/* END_OF_SYMBOL_DEFINITION DeniedMeteringAction */

/* START_OF_SYMBOL_DEFINITION DeniedMeteringAction_canNotStart */
/**
 * @summary DeniedMeteringAction_canNotStart
 * @constant
 * @type {number}
 */
export const DeniedMeteringAction_canNotStart: DeniedMeteringAction =
    DeniedMeteringAction.canNotStart; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION DeniedMeteringAction_canNotStart */

/* START_OF_SYMBOL_DEFINITION canNotStart */
/**
 * @summary canNotStart
 * @constant
 * @type {number}
 */
export const canNotStart: DeniedMeteringAction =
    DeniedMeteringAction.canNotStart; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION canNotStart */

/* START_OF_SYMBOL_DEFINITION DeniedMeteringAction_canNotSuspend */
/**
 * @summary DeniedMeteringAction_canNotSuspend
 * @constant
 * @type {number}
 */
export const DeniedMeteringAction_canNotSuspend: DeniedMeteringAction =
    DeniedMeteringAction.canNotSuspend; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION DeniedMeteringAction_canNotSuspend */

/* START_OF_SYMBOL_DEFINITION canNotSuspend */
/**
 * @summary canNotSuspend
 * @constant
 * @type {number}
 */
export const canNotSuspend: DeniedMeteringAction =
    DeniedMeteringAction.canNotSuspend; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION canNotSuspend */

/* START_OF_SYMBOL_DEFINITION DeniedMeteringAction_canNotResume */
/**
 * @summary DeniedMeteringAction_canNotResume
 * @constant
 * @type {number}
 */
export const DeniedMeteringAction_canNotResume: DeniedMeteringAction =
    DeniedMeteringAction.canNotResume; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION DeniedMeteringAction_canNotResume */

/* START_OF_SYMBOL_DEFINITION canNotResume */
/**
 * @summary canNotResume
 * @constant
 * @type {number}
 */
export const canNotResume: DeniedMeteringAction =
    DeniedMeteringAction.canNotResume; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION canNotResume */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_DeniedMeteringAction */
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_DeniedMeteringAction */

/* START_OF_SYMBOL_DEFINITION _decode_DeniedMeteringAction */
export const _decode_DeniedMeteringAction = $._decodeEnumerated;
/* END_OF_SYMBOL_DEFINITION _decode_DeniedMeteringAction */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_DeniedMeteringAction */
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_DeniedMeteringAction */

/* START_OF_SYMBOL_DEFINITION _encode_DeniedMeteringAction */
export const _encode_DeniedMeteringAction = $._encodeEnumerated;

/* END_OF_SYMBOL_DEFINITION _encode_DeniedMeteringAction */

/* eslint-enable */
