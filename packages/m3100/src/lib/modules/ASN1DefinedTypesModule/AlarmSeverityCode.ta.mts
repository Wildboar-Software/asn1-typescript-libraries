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
import * as $ from '@wildboar/asn1/functional';


/**
 * @summary AlarmSeverityCode
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * AlarmSeverityCode  ::=  ENUMERATED {
 *   non-alarmed(0), minor(1), major(2), critical(3), warning(4)}
 * ```
 *
 * @enum {number}
 */
export enum _enum_for_AlarmSeverityCode {
    non_alarmed = 0,
    minor = 1,
    major = 2,
    critical = 3,
    warning = 4,
}


/**
 * @summary AlarmSeverityCode
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * AlarmSeverityCode  ::=  ENUMERATED {
 *   non-alarmed(0), minor(1), major(2), critical(3), warning(4)}
 * ```
 *
 * @enum {number}
 */
export type AlarmSeverityCode = _enum_for_AlarmSeverityCode;


/**
 * @summary AlarmSeverityCode
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * AlarmSeverityCode  ::=  ENUMERATED {
 *   non-alarmed(0), minor(1), major(2), critical(3), warning(4)}
 * ```
 *
 * @enum {number}
 */
export const AlarmSeverityCode = _enum_for_AlarmSeverityCode;


/**
 * @summary AlarmSeverityCode_non_alarmed
 * @constant
 * @type {number}
 */
export const AlarmSeverityCode_non_alarmed: AlarmSeverityCode =
    AlarmSeverityCode.non_alarmed; /* LONG_NAMED_ENUMERATED_VALUE */


/**
 * @summary non_alarmed
 * @constant
 * @type {number}
 */
export const non_alarmed: AlarmSeverityCode =
    AlarmSeverityCode.non_alarmed; /* SHORT_NAMED_ENUMERATED_VALUE */


/**
 * @summary AlarmSeverityCode_minor
 * @constant
 * @type {number}
 */
export const AlarmSeverityCode_minor: AlarmSeverityCode =
    AlarmSeverityCode.minor; /* LONG_NAMED_ENUMERATED_VALUE */


/**
 * @summary minor
 * @constant
 * @type {number}
 */
export const minor: AlarmSeverityCode =
    AlarmSeverityCode.minor; /* SHORT_NAMED_ENUMERATED_VALUE */


/**
 * @summary AlarmSeverityCode_major
 * @constant
 * @type {number}
 */
export const AlarmSeverityCode_major: AlarmSeverityCode =
    AlarmSeverityCode.major; /* LONG_NAMED_ENUMERATED_VALUE */


/**
 * @summary major
 * @constant
 * @type {number}
 */
export const major: AlarmSeverityCode =
    AlarmSeverityCode.major; /* SHORT_NAMED_ENUMERATED_VALUE */


/**
 * @summary AlarmSeverityCode_critical
 * @constant
 * @type {number}
 */
export const AlarmSeverityCode_critical: AlarmSeverityCode =
    AlarmSeverityCode.critical; /* LONG_NAMED_ENUMERATED_VALUE */


/**
 * @summary critical
 * @constant
 * @type {number}
 */
export const critical: AlarmSeverityCode =
    AlarmSeverityCode.critical; /* SHORT_NAMED_ENUMERATED_VALUE */


/**
 * @summary AlarmSeverityCode_warning
 * @constant
 * @type {number}
 */
export const AlarmSeverityCode_warning: AlarmSeverityCode =
    AlarmSeverityCode.warning; /* LONG_NAMED_ENUMERATED_VALUE */


/**
 * @summary warning
 * @constant
 * @type {number}
 */
export const warning: AlarmSeverityCode =
    AlarmSeverityCode.warning; /* SHORT_NAMED_ENUMERATED_VALUE */




export const _decode_AlarmSeverityCode = $._decodeEnumerated;




export const _encode_AlarmSeverityCode = $._encodeEnumerated;


/* eslint-enable */
