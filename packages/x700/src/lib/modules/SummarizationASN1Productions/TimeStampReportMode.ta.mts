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

/* START_OF_SYMBOL_DEFINITION _enum_for_TimeStampReportMode */
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
 * ```@enum {number}
 */
export enum _enum_for_TimeStampReportMode {
    timeStampingOff = 0,
    globalTimeStampOnly = 1,
    individualTimeStamping = 2,
}
/* END_OF_SYMBOL_DEFINITION _enum_for_TimeStampReportMode */

/* START_OF_SYMBOL_DEFINITION TimeStampReportMode */
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
 * ```@enum {number}
 */
export type TimeStampReportMode = _enum_for_TimeStampReportMode;
/* END_OF_SYMBOL_DEFINITION TimeStampReportMode */

/* START_OF_SYMBOL_DEFINITION TimeStampReportMode */
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
 * ```@enum {number}
 */
export const TimeStampReportMode = _enum_for_TimeStampReportMode;
/* END_OF_SYMBOL_DEFINITION TimeStampReportMode */

/* START_OF_SYMBOL_DEFINITION TimeStampReportMode_timeStampingOff */
/**
 * @summary TimeStampReportMode_timeStampingOff
 * @constant
 * @type {number}
 */
export const TimeStampReportMode_timeStampingOff: TimeStampReportMode =
    TimeStampReportMode.timeStampingOff; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION TimeStampReportMode_timeStampingOff */

/* START_OF_SYMBOL_DEFINITION timeStampingOff */
/**
 * @summary timeStampingOff
 * @constant
 * @type {number}
 */
export const timeStampingOff: TimeStampReportMode =
    TimeStampReportMode.timeStampingOff; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION timeStampingOff */

/* START_OF_SYMBOL_DEFINITION TimeStampReportMode_globalTimeStampOnly */
/**
 * @summary TimeStampReportMode_globalTimeStampOnly
 * @constant
 * @type {number}
 */
export const TimeStampReportMode_globalTimeStampOnly: TimeStampReportMode =
    TimeStampReportMode.globalTimeStampOnly; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION TimeStampReportMode_globalTimeStampOnly */

/* START_OF_SYMBOL_DEFINITION globalTimeStampOnly */
/**
 * @summary globalTimeStampOnly
 * @constant
 * @type {number}
 */
export const globalTimeStampOnly: TimeStampReportMode =
    TimeStampReportMode.globalTimeStampOnly; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION globalTimeStampOnly */

/* START_OF_SYMBOL_DEFINITION TimeStampReportMode_individualTimeStamping */
/**
 * @summary TimeStampReportMode_individualTimeStamping
 * @constant
 * @type {number}
 */
export const TimeStampReportMode_individualTimeStamping: TimeStampReportMode =
    TimeStampReportMode.individualTimeStamping; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION TimeStampReportMode_individualTimeStamping */

/* START_OF_SYMBOL_DEFINITION individualTimeStamping */
/**
 * @summary individualTimeStamping
 * @constant
 * @type {number}
 */
export const individualTimeStamping: TimeStampReportMode =
    TimeStampReportMode.individualTimeStamping; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION individualTimeStamping */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_TimeStampReportMode */
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_TimeStampReportMode */

/* START_OF_SYMBOL_DEFINITION _decode_TimeStampReportMode */
export const _decode_TimeStampReportMode = $._decodeEnumerated;
/* END_OF_SYMBOL_DEFINITION _decode_TimeStampReportMode */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_TimeStampReportMode */
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_TimeStampReportMode */

/* START_OF_SYMBOL_DEFINITION _encode_TimeStampReportMode */
export const _encode_TimeStampReportMode = $._encodeEnumerated;

/* END_OF_SYMBOL_DEFINITION _encode_TimeStampReportMode */

/* eslint-enable */
