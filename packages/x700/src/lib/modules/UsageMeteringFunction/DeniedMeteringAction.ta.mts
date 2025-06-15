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


/**
 * @summary DeniedMeteringAction_canNotStart
 * @constant
 * @type {number}
 */
export const DeniedMeteringAction_canNotStart: DeniedMeteringAction =
    DeniedMeteringAction.canNotStart; /* LONG_NAMED_ENUMERATED_VALUE */


/**
 * @summary canNotStart
 * @constant
 * @type {number}
 */
export const canNotStart: DeniedMeteringAction =
    DeniedMeteringAction.canNotStart; /* SHORT_NAMED_ENUMERATED_VALUE */


/**
 * @summary DeniedMeteringAction_canNotSuspend
 * @constant
 * @type {number}
 */
export const DeniedMeteringAction_canNotSuspend: DeniedMeteringAction =
    DeniedMeteringAction.canNotSuspend; /* LONG_NAMED_ENUMERATED_VALUE */


/**
 * @summary canNotSuspend
 * @constant
 * @type {number}
 */
export const canNotSuspend: DeniedMeteringAction =
    DeniedMeteringAction.canNotSuspend; /* SHORT_NAMED_ENUMERATED_VALUE */


/**
 * @summary DeniedMeteringAction_canNotResume
 * @constant
 * @type {number}
 */
export const DeniedMeteringAction_canNotResume: DeniedMeteringAction =
    DeniedMeteringAction.canNotResume; /* LONG_NAMED_ENUMERATED_VALUE */


/**
 * @summary canNotResume
 * @constant
 * @type {number}
 */
export const canNotResume: DeniedMeteringAction =
    DeniedMeteringAction.canNotResume; /* SHORT_NAMED_ENUMERATED_VALUE */




export const _decode_DeniedMeteringAction = $._decodeEnumerated;




export const _encode_DeniedMeteringAction = $._encodeEnumerated;


/* eslint-enable */
