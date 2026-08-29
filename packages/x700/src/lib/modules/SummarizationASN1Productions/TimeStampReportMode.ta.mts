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
 * @summary TimeStampReportMode
 * @description
 *
 * How time stamps appear in summary reports when
 * `timeStampReportPackage` is present (attribute
 * `timeStampReportMode`, `{summarizationAttribute 29}`).
 * `timeStampingOff`(0) — none; `globalTimeStampOnly`(1)
 * — only scan initiation time; `individualTimeStamping`
 * (2) — scan initiation time plus each value’s offset
 * from that time. Default is `timeStampingOff`. ITU-T
 * Rec. X.738 (11/93)
 * [§8.1.12.4](https://www.itu.int/rec/T-REC-X.738-199311-I),
 * A.4, A.9.
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
 * How time stamps appear in summary reports when
 * `timeStampReportPackage` is present.
 * `timeStampingOff`(0) — none; `globalTimeStampOnly`(1)
 * — only scan initiation time; `individualTimeStamping`
 * (2) — scan initiation time plus each value’s offset.
 * Default is `timeStampingOff`. ITU-T Rec. X.738 (11/93)
 * [§8.1.12.4](https://www.itu.int/rec/T-REC-X.738-199311-I).
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
 * Namespace of `TimeStampReportMode` enumerators. ITU-T
 * Rec. X.738 (11/93)
 * [§8.1.12.4](https://www.itu.int/rec/T-REC-X.738-199311-I).
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
 * @description
 *
 * No time stamping in the summary report. Default of
 * `timeStampReportMode`. X.738 §8.1.12.4.
 *
 * @constant
 * @type {number}
 */
export const TimeStampReportMode_timeStampingOff: TimeStampReportMode =
    TimeStampReportMode.timeStampingOff; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary timeStampingOff
 * @description
 *
 * No time stamping in the summary report. Default of
 * `timeStampReportMode`. X.738 §8.1.12.4.
 *
 * @constant
 * @type {number}
 */
export const timeStampingOff: TimeStampReportMode =
    TimeStampReportMode.timeStampingOff; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary TimeStampReportMode_globalTimeStampOnly
 * @description
 *
 * Report only the scan initiation time (or first-scan
 * time in a buffered report). Per-value offsets are
 * omitted. X.738 §8.1.12.4.
 *
 * @constant
 * @type {number}
 */
export const TimeStampReportMode_globalTimeStampOnly: TimeStampReportMode =
    TimeStampReportMode.globalTimeStampOnly; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary globalTimeStampOnly
 * @description
 *
 * Report only the scan initiation time (or first-scan
 * time in a buffered report). Per-value offsets are
 * omitted. X.738 §8.1.12.4.
 *
 * @constant
 * @type {number}
 */
export const globalTimeStampOnly: TimeStampReportMode =
    TimeStampReportMode.globalTimeStampOnly; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary TimeStampReportMode_individualTimeStamping
 * @description
 *
 * Report scan initiation time and each value’s offset
 * from that time (`timeStamp` in `AttributeMeasure` /
 * `NumericMeasure`). Required when this mode is in
 * force. X.738 §8.1.12.4, A.9.
 *
 * @constant
 * @type {number}
 */
export const TimeStampReportMode_individualTimeStamping: TimeStampReportMode =
    TimeStampReportMode.individualTimeStamping; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary individualTimeStamping
 * @description
 *
 * Report scan initiation time and each value’s offset
 * from that time. X.738 §8.1.12.4, A.9.
 *
 * @constant
 * @type {number}
 */
export const individualTimeStamping: TimeStampReportMode =
    TimeStampReportMode.individualTimeStamping; /* SHORT_NAMED_ENUMERATED_VALUE */


export const _decode_TimeStampReportMode = $._decodeEnumerated;


export const _encode_TimeStampReportMode = $._encodeEnumerated;


/* eslint-enable */
