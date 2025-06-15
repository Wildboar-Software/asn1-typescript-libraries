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
 * @summary LoopbackControl_status
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * LoopbackControl-status ::= ENUMERATED { -- REMOVED_FROM_UNNESTING -- }
 * ```@enum {number}
 */
export enum _enum_for_LoopbackControl_status {
    noLoopback = 0,
    endALoopedBack = 1,
    endBLoopedBack = 2,
}


/**
 * @summary LoopbackControl_status
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * LoopbackControl-status ::= ENUMERATED { -- REMOVED_FROM_UNNESTING -- }
 * ```@enum {number}
 */
export type LoopbackControl_status = _enum_for_LoopbackControl_status;


/**
 * @summary LoopbackControl_status
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * LoopbackControl-status ::= ENUMERATED { -- REMOVED_FROM_UNNESTING -- }
 * ```@enum {number}
 */
export const LoopbackControl_status = _enum_for_LoopbackControl_status;


/**
 * @summary LoopbackControl_status_noLoopback
 * @constant
 * @type {number}
 */
export const LoopbackControl_status_noLoopback: LoopbackControl_status =
    LoopbackControl_status.noLoopback; /* LONG_NAMED_ENUMERATED_VALUE */


/**
 * @summary noLoopback
 * @constant
 * @type {number}
 */
export const noLoopback: LoopbackControl_status =
    LoopbackControl_status.noLoopback; /* SHORT_NAMED_ENUMERATED_VALUE */


/**
 * @summary LoopbackControl_status_endALoopedBack
 * @constant
 * @type {number}
 */
export const LoopbackControl_status_endALoopedBack: LoopbackControl_status =
    LoopbackControl_status.endALoopedBack; /* LONG_NAMED_ENUMERATED_VALUE */


/**
 * @summary endALoopedBack
 * @constant
 * @type {number}
 */
export const endALoopedBack: LoopbackControl_status =
    LoopbackControl_status.endALoopedBack; /* SHORT_NAMED_ENUMERATED_VALUE */


/**
 * @summary LoopbackControl_status_endBLoopedBack
 * @constant
 * @type {number}
 */
export const LoopbackControl_status_endBLoopedBack: LoopbackControl_status =
    LoopbackControl_status.endBLoopedBack; /* LONG_NAMED_ENUMERATED_VALUE */


/**
 * @summary endBLoopedBack
 * @constant
 * @type {number}
 */
export const endBLoopedBack: LoopbackControl_status =
    LoopbackControl_status.endBLoopedBack; /* SHORT_NAMED_ENUMERATED_VALUE */




export const _decode_LoopbackControl_status = $._decodeEnumerated;




export const _encode_LoopbackControl_status = $._encodeEnumerated;


/* eslint-enable */
