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

/* START_OF_SYMBOL_DEFINITION _enum_for_TerminateValidationInfo */
/**
 * @summary TerminateValidationInfo
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * TerminateValidationInfo  ::=  ENUMERATED {
 *   cancel(0), -- discard the result of the partial audit
 *   truncate(1)}
 * ```@enum {number}
 */
export enum _enum_for_TerminateValidationInfo {
    cancel = 0,
    truncate = 1,
}
/* END_OF_SYMBOL_DEFINITION _enum_for_TerminateValidationInfo */

/* START_OF_SYMBOL_DEFINITION TerminateValidationInfo */
/**
 * @summary TerminateValidationInfo
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * TerminateValidationInfo  ::=  ENUMERATED {
 *   cancel(0), -- discard the result of the partial audit
 *   truncate(1)}
 * ```@enum {number}
 */
export type TerminateValidationInfo = _enum_for_TerminateValidationInfo;
/* END_OF_SYMBOL_DEFINITION TerminateValidationInfo */

/* START_OF_SYMBOL_DEFINITION TerminateValidationInfo */
/**
 * @summary TerminateValidationInfo
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * TerminateValidationInfo  ::=  ENUMERATED {
 *   cancel(0), -- discard the result of the partial audit
 *   truncate(1)}
 * ```@enum {number}
 */
export const TerminateValidationInfo = _enum_for_TerminateValidationInfo;
/* END_OF_SYMBOL_DEFINITION TerminateValidationInfo */

/* START_OF_SYMBOL_DEFINITION TerminateValidationInfo_cancel */
/**
 * @summary TerminateValidationInfo_cancel
 * @constant
 * @type {number}
 */
export const TerminateValidationInfo_cancel: TerminateValidationInfo =
    TerminateValidationInfo.cancel; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION TerminateValidationInfo_cancel */

/* START_OF_SYMBOL_DEFINITION cancel */
/**
 * @summary cancel
 * @constant
 * @type {number}
 */
export const cancel: TerminateValidationInfo =
    TerminateValidationInfo.cancel; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION cancel */

/* START_OF_SYMBOL_DEFINITION TerminateValidationInfo_truncate */
/**
 * @summary TerminateValidationInfo_truncate
 * @constant
 * @type {number}
 */
export const TerminateValidationInfo_truncate: TerminateValidationInfo =
    TerminateValidationInfo.truncate; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION TerminateValidationInfo_truncate */

/* START_OF_SYMBOL_DEFINITION truncate */
/**
 * @summary truncate
 * @constant
 * @type {number}
 */
export const truncate: TerminateValidationInfo =
    TerminateValidationInfo.truncate; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION truncate */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_TerminateValidationInfo */
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_TerminateValidationInfo */

/* START_OF_SYMBOL_DEFINITION _decode_TerminateValidationInfo */
export const _decode_TerminateValidationInfo = $._decodeEnumerated;
/* END_OF_SYMBOL_DEFINITION _decode_TerminateValidationInfo */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_TerminateValidationInfo */
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_TerminateValidationInfo */

/* START_OF_SYMBOL_DEFINITION _encode_TerminateValidationInfo */
export const _encode_TerminateValidationInfo = $._encodeEnumerated;

/* END_OF_SYMBOL_DEFINITION _encode_TerminateValidationInfo */

/* eslint-enable */
