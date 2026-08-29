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
} from '@wildboar/asn1';
import * as $ from '@wildboar/asn1/functional';

/**
 * @summary ErrorRatioReportType
 * @description
 *
 * How an error ratio is expressed: number of error bits, or
 * percentage of error seconds. ITU-T Rec. X.737 (11/95)
 * [§8.1.8](https://www.itu.int/rec/T-REC-X.737-199511-I), A.6.8.
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
 * How an error ratio is expressed: number of error bits, or
 * percentage of error seconds. ITU-T Rec. X.737 (11/95)
 * [§8.1.8](https://www.itu.int/rec/T-REC-X.737-199511-I), A.6.8.
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
 * How an error ratio is expressed: number of error bits, or
 * percentage of error seconds. ITU-T Rec. X.737 (11/95)
 * [§8.1.8](https://www.itu.int/rec/T-REC-X.737-199511-I), A.6.8.
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
 * @description
 *
 * Error ratio as a count of error bits (0). X.737 §8.1.8.
 * @constant
 * @type {number}
 */
export const ErrorRatioReportType_errorBitNumber: ErrorRatioReportType =
    ErrorRatioReportType.errorBitNumber; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary errorBitNumber
 * @description
 *
 * Error ratio as a count of error bits (0). X.737 §8.1.8.
 * @constant
 * @type {number}
 */
export const errorBitNumber: ErrorRatioReportType =
    ErrorRatioReportType.errorBitNumber; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ErrorRatioReportType_percentErrorSecond
 * @description
 *
 * Error ratio as a percentage of error seconds (1). X.737 §8.1.8.
 * @constant
 * @type {number}
 */
export const ErrorRatioReportType_percentErrorSecond: ErrorRatioReportType =
    ErrorRatioReportType.percentErrorSecond; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary percentErrorSecond
 * @description
 *
 * Error ratio as a percentage of error seconds (1). X.737 §8.1.8.
 * @constant
 * @type {number}
 */
export const percentErrorSecond: ErrorRatioReportType =
    ErrorRatioReportType.percentErrorSecond; /* SHORT_NAMED_ENUMERATED_VALUE */


export const _decode_ErrorRatioReportType = $._decodeEnumerated;


export const _encode_ErrorRatioReportType = $._encodeEnumerated;


/* eslint-enable */
