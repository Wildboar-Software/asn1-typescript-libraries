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
 * @summary TimeStampReportMode
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * TimeStampReportMode  ::=  ENUMERATED {
 *   timeStampingOff(0), globalTimeStampOnly(1), individualTimeStamping(2)
 * }
 * ```
 * 
 * @enum {number}
 */
export enum _enum_for_TimeStampReportMode {
    timeStampingOff = 0,
    globalTimeStampOnly = 1,
    individualTimeStamping = 2,
}

/**
 * @summary TimeStampReportMode
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * TimeStampReportMode  ::=  ENUMERATED {
 *   timeStampingOff(0), globalTimeStampOnly(1), individualTimeStamping(2)
 * }
 * ```
 * 
 * @enum {number}
 */
export type TimeStampReportMode = _enum_for_TimeStampReportMode;

/**
 * @summary TimeStampReportMode
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * TimeStampReportMode  ::=  ENUMERATED {
 *   timeStampingOff(0), globalTimeStampOnly(1), individualTimeStamping(2)
 * }
 * ```
 * 
 * @enum {number}
 */
export const TimeStampReportMode = _enum_for_TimeStampReportMode;

/**
 * @summary TimeStampReportMode_timeStampingOff
 * @constant
 * @type {number}
 */
export const TimeStampReportMode_timeStampingOff: TimeStampReportMode =
    TimeStampReportMode.timeStampingOff; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary timeStampingOff
 * @constant
 * @type {number}
 */
export const timeStampingOff: TimeStampReportMode =
    TimeStampReportMode.timeStampingOff; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary TimeStampReportMode_globalTimeStampOnly
 * @constant
 * @type {number}
 */
export const TimeStampReportMode_globalTimeStampOnly: TimeStampReportMode =
    TimeStampReportMode.globalTimeStampOnly; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary globalTimeStampOnly
 * @constant
 * @type {number}
 */
export const globalTimeStampOnly: TimeStampReportMode =
    TimeStampReportMode.globalTimeStampOnly; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary TimeStampReportMode_individualTimeStamping
 * @constant
 * @type {number}
 */
export const TimeStampReportMode_individualTimeStamping: TimeStampReportMode =
    TimeStampReportMode.individualTimeStamping; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary individualTimeStamping
 * @constant
 * @type {number}
 */
export const individualTimeStamping: TimeStampReportMode =
    TimeStampReportMode.individualTimeStamping; /* SHORT_NAMED_ENUMERATED_VALUE */


export const _decode_TimeStampReportMode = $._decodeEnumerated;


export const _encode_TimeStampReportMode = $._encodeEnumerated;


/* eslint-enable */
