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

/* START_OF_SYMBOL_DEFINITION _enum_for_ArcQIStatus */
/**
 * @summary ArcQIStatus
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ArcQIStatus  ::=  ENUMERATED {
 *   notApplicable(0), nalmNotReported(1), nalmCountDown(2)}
 * ```@enum {number}
 */
export enum _enum_for_ArcQIStatus {
    notApplicable = 0,
    nalmNotReported = 1,
    nalmCountDown = 2,
}
/* END_OF_SYMBOL_DEFINITION _enum_for_ArcQIStatus */

/* START_OF_SYMBOL_DEFINITION ArcQIStatus */
/**
 * @summary ArcQIStatus
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ArcQIStatus  ::=  ENUMERATED {
 *   notApplicable(0), nalmNotReported(1), nalmCountDown(2)}
 * ```@enum {number}
 */
export type ArcQIStatus = _enum_for_ArcQIStatus;
/* END_OF_SYMBOL_DEFINITION ArcQIStatus */

/* START_OF_SYMBOL_DEFINITION ArcQIStatus */
/**
 * @summary ArcQIStatus
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ArcQIStatus  ::=  ENUMERATED {
 *   notApplicable(0), nalmNotReported(1), nalmCountDown(2)}
 * ```@enum {number}
 */
export const ArcQIStatus = _enum_for_ArcQIStatus;
/* END_OF_SYMBOL_DEFINITION ArcQIStatus */

/* START_OF_SYMBOL_DEFINITION ArcQIStatus_notApplicable */
/**
 * @summary ArcQIStatus_notApplicable
 * @constant
 * @type {number}
 */
export const ArcQIStatus_notApplicable: ArcQIStatus =
    ArcQIStatus.notApplicable; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION ArcQIStatus_notApplicable */

/* START_OF_SYMBOL_DEFINITION notApplicable */
/**
 * @summary notApplicable
 * @constant
 * @type {number}
 */
export const notApplicable: ArcQIStatus =
    ArcQIStatus.notApplicable; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION notApplicable */

/* START_OF_SYMBOL_DEFINITION ArcQIStatus_nalmNotReported */
/**
 * @summary ArcQIStatus_nalmNotReported
 * @constant
 * @type {number}
 */
export const ArcQIStatus_nalmNotReported: ArcQIStatus =
    ArcQIStatus.nalmNotReported; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION ArcQIStatus_nalmNotReported */

/* START_OF_SYMBOL_DEFINITION nalmNotReported */
/**
 * @summary nalmNotReported
 * @constant
 * @type {number}
 */
export const nalmNotReported: ArcQIStatus =
    ArcQIStatus.nalmNotReported; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION nalmNotReported */

/* START_OF_SYMBOL_DEFINITION ArcQIStatus_nalmCountDown */
/**
 * @summary ArcQIStatus_nalmCountDown
 * @constant
 * @type {number}
 */
export const ArcQIStatus_nalmCountDown: ArcQIStatus =
    ArcQIStatus.nalmCountDown; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION ArcQIStatus_nalmCountDown */

/* START_OF_SYMBOL_DEFINITION nalmCountDown */
/**
 * @summary nalmCountDown
 * @constant
 * @type {number}
 */
export const nalmCountDown: ArcQIStatus =
    ArcQIStatus.nalmCountDown; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION nalmCountDown */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_ArcQIStatus */
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_ArcQIStatus */

/* START_OF_SYMBOL_DEFINITION _decode_ArcQIStatus */
export const _decode_ArcQIStatus = $._decodeEnumerated;
/* END_OF_SYMBOL_DEFINITION _decode_ArcQIStatus */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_ArcQIStatus */
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_ArcQIStatus */

/* START_OF_SYMBOL_DEFINITION _encode_ArcQIStatus */
export const _encode_ArcQIStatus = $._encodeEnumerated;

/* END_OF_SYMBOL_DEFINITION _encode_ArcQIStatus */

/* eslint-enable */
