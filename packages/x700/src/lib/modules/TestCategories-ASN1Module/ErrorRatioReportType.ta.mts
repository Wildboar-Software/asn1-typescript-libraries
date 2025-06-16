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
 * @summary ErrorRatioReportType
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ErrorRatioReportType  ::=  ENUMERATED {errorBitNumber(0), percentErrorSecond(1)}
 * ```
 *
 * @enum {number}
 */
export enum _enum_for_ErrorRatioReportType {
    errorBitNumber = 0,
    percentErrorSecond = 1,
}

/**
 * @summary ErrorRatioReportType
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ErrorRatioReportType  ::=  ENUMERATED {errorBitNumber(0), percentErrorSecond(1)}
 * ```
 *
 * @enum {number}
 */
export type ErrorRatioReportType = _enum_for_ErrorRatioReportType;

/**
 * @summary ErrorRatioReportType
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ErrorRatioReportType  ::=  ENUMERATED {errorBitNumber(0), percentErrorSecond(1)}
 * ```
 *
 * @enum {number}
 */
export const ErrorRatioReportType = _enum_for_ErrorRatioReportType;

/**
 * @summary ErrorRatioReportType_errorBitNumber
 * @constant
 * @type {number}
 */
export const ErrorRatioReportType_errorBitNumber: ErrorRatioReportType =
    ErrorRatioReportType.errorBitNumber; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary errorBitNumber
 * @constant
 * @type {number}
 */
export const errorBitNumber: ErrorRatioReportType =
    ErrorRatioReportType.errorBitNumber; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ErrorRatioReportType_percentErrorSecond
 * @constant
 * @type {number}
 */
export const ErrorRatioReportType_percentErrorSecond: ErrorRatioReportType =
    ErrorRatioReportType.percentErrorSecond; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary percentErrorSecond
 * @constant
 * @type {number}
 */
export const percentErrorSecond: ErrorRatioReportType =
    ErrorRatioReportType.percentErrorSecond; /* SHORT_NAMED_ENUMERATED_VALUE */


export const _decode_ErrorRatioReportType = $._decodeEnumerated;


export const _encode_ErrorRatioReportType = $._encodeEnumerated;


/* eslint-enable */
