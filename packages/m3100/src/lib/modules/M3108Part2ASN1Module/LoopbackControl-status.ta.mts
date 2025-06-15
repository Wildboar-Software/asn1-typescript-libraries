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

/* START_OF_SYMBOL_DEFINITION _enum_for_LoopbackControl_status */
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
/* END_OF_SYMBOL_DEFINITION _enum_for_LoopbackControl_status */

/* START_OF_SYMBOL_DEFINITION LoopbackControl_status */
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
/* END_OF_SYMBOL_DEFINITION LoopbackControl_status */

/* START_OF_SYMBOL_DEFINITION LoopbackControl_status */
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
/* END_OF_SYMBOL_DEFINITION LoopbackControl_status */

/* START_OF_SYMBOL_DEFINITION LoopbackControl_status_noLoopback */
/**
 * @summary LoopbackControl_status_noLoopback
 * @constant
 * @type {number}
 */
export const LoopbackControl_status_noLoopback: LoopbackControl_status =
    LoopbackControl_status.noLoopback; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION LoopbackControl_status_noLoopback */

/* START_OF_SYMBOL_DEFINITION noLoopback */
/**
 * @summary noLoopback
 * @constant
 * @type {number}
 */
export const noLoopback: LoopbackControl_status =
    LoopbackControl_status.noLoopback; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION noLoopback */

/* START_OF_SYMBOL_DEFINITION LoopbackControl_status_endALoopedBack */
/**
 * @summary LoopbackControl_status_endALoopedBack
 * @constant
 * @type {number}
 */
export const LoopbackControl_status_endALoopedBack: LoopbackControl_status =
    LoopbackControl_status.endALoopedBack; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION LoopbackControl_status_endALoopedBack */

/* START_OF_SYMBOL_DEFINITION endALoopedBack */
/**
 * @summary endALoopedBack
 * @constant
 * @type {number}
 */
export const endALoopedBack: LoopbackControl_status =
    LoopbackControl_status.endALoopedBack; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION endALoopedBack */

/* START_OF_SYMBOL_DEFINITION LoopbackControl_status_endBLoopedBack */
/**
 * @summary LoopbackControl_status_endBLoopedBack
 * @constant
 * @type {number}
 */
export const LoopbackControl_status_endBLoopedBack: LoopbackControl_status =
    LoopbackControl_status.endBLoopedBack; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION LoopbackControl_status_endBLoopedBack */

/* START_OF_SYMBOL_DEFINITION endBLoopedBack */
/**
 * @summary endBLoopedBack
 * @constant
 * @type {number}
 */
export const endBLoopedBack: LoopbackControl_status =
    LoopbackControl_status.endBLoopedBack; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION endBLoopedBack */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_LoopbackControl_status */
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_LoopbackControl_status */

/* START_OF_SYMBOL_DEFINITION _decode_LoopbackControl_status */
export const _decode_LoopbackControl_status = $._decodeEnumerated;
/* END_OF_SYMBOL_DEFINITION _decode_LoopbackControl_status */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_LoopbackControl_status */
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_LoopbackControl_status */

/* START_OF_SYMBOL_DEFINITION _encode_LoopbackControl_status */
export const _encode_LoopbackControl_status = $._encodeEnumerated;

/* END_OF_SYMBOL_DEFINITION _encode_LoopbackControl_status */

/* eslint-enable */
