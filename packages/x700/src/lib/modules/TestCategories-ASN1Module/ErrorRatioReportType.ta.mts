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

/* START_OF_SYMBOL_DEFINITION _enum_for_ErrorRatioReportType */
/**
 * @summary ErrorRatioReportType
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ErrorRatioReportType  ::=  ENUMERATED {errorBitNumber(0), percentErrorSecond(1)}
 * ```@enum {number}
 */
export enum _enum_for_ErrorRatioReportType {
    errorBitNumber = 0,
    percentErrorSecond = 1,
}
/* END_OF_SYMBOL_DEFINITION _enum_for_ErrorRatioReportType */

/* START_OF_SYMBOL_DEFINITION ErrorRatioReportType */
/**
 * @summary ErrorRatioReportType
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ErrorRatioReportType  ::=  ENUMERATED {errorBitNumber(0), percentErrorSecond(1)}
 * ```@enum {number}
 */
export type ErrorRatioReportType = _enum_for_ErrorRatioReportType;
/* END_OF_SYMBOL_DEFINITION ErrorRatioReportType */

/* START_OF_SYMBOL_DEFINITION ErrorRatioReportType */
/**
 * @summary ErrorRatioReportType
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ErrorRatioReportType  ::=  ENUMERATED {errorBitNumber(0), percentErrorSecond(1)}
 * ```@enum {number}
 */
export const ErrorRatioReportType = _enum_for_ErrorRatioReportType;
/* END_OF_SYMBOL_DEFINITION ErrorRatioReportType */

/* START_OF_SYMBOL_DEFINITION ErrorRatioReportType_errorBitNumber */
/**
 * @summary ErrorRatioReportType_errorBitNumber
 * @constant
 * @type {number}
 */
export const ErrorRatioReportType_errorBitNumber: ErrorRatioReportType =
    ErrorRatioReportType.errorBitNumber; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION ErrorRatioReportType_errorBitNumber */

/* START_OF_SYMBOL_DEFINITION errorBitNumber */
/**
 * @summary errorBitNumber
 * @constant
 * @type {number}
 */
export const errorBitNumber: ErrorRatioReportType =
    ErrorRatioReportType.errorBitNumber; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION errorBitNumber */

/* START_OF_SYMBOL_DEFINITION ErrorRatioReportType_percentErrorSecond */
/**
 * @summary ErrorRatioReportType_percentErrorSecond
 * @constant
 * @type {number}
 */
export const ErrorRatioReportType_percentErrorSecond: ErrorRatioReportType =
    ErrorRatioReportType.percentErrorSecond; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION ErrorRatioReportType_percentErrorSecond */

/* START_OF_SYMBOL_DEFINITION percentErrorSecond */
/**
 * @summary percentErrorSecond
 * @constant
 * @type {number}
 */
export const percentErrorSecond: ErrorRatioReportType =
    ErrorRatioReportType.percentErrorSecond; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION percentErrorSecond */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_ErrorRatioReportType */
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_ErrorRatioReportType */

/* START_OF_SYMBOL_DEFINITION _decode_ErrorRatioReportType */
export const _decode_ErrorRatioReportType = $._decodeEnumerated;
/* END_OF_SYMBOL_DEFINITION _decode_ErrorRatioReportType */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_ErrorRatioReportType */
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_ErrorRatioReportType */

/* START_OF_SYMBOL_DEFINITION _encode_ErrorRatioReportType */
export const _encode_ErrorRatioReportType = $._encodeEnumerated;

/* END_OF_SYMBOL_DEFINITION _encode_ErrorRatioReportType */

/* eslint-enable */
