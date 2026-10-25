/* eslint-disable */
import {
    type ASN1Element as _Element,
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
export const AlarmSeverityCode_non_alarmed =
    AlarmSeverityCode.non_alarmed satisfies AlarmSeverityCode; /* LONG_NAMED_ENUMERATED_VALUE */


/**
 * @summary non_alarmed
 * @constant
 * @type {number}
 */
export const non_alarmed =
    AlarmSeverityCode.non_alarmed satisfies AlarmSeverityCode; /* SHORT_NAMED_ENUMERATED_VALUE */


/**
 * @summary AlarmSeverityCode_minor
 * @constant
 * @type {number}
 */
export const AlarmSeverityCode_minor =
    AlarmSeverityCode.minor satisfies AlarmSeverityCode; /* LONG_NAMED_ENUMERATED_VALUE */


/**
 * @summary minor
 * @constant
 * @type {number}
 */
export const minor =
    AlarmSeverityCode.minor satisfies AlarmSeverityCode; /* SHORT_NAMED_ENUMERATED_VALUE */


/**
 * @summary AlarmSeverityCode_major
 * @constant
 * @type {number}
 */
export const AlarmSeverityCode_major =
    AlarmSeverityCode.major satisfies AlarmSeverityCode; /* LONG_NAMED_ENUMERATED_VALUE */


/**
 * @summary major
 * @constant
 * @type {number}
 */
export const major =
    AlarmSeverityCode.major satisfies AlarmSeverityCode; /* SHORT_NAMED_ENUMERATED_VALUE */


/**
 * @summary AlarmSeverityCode_critical
 * @constant
 * @type {number}
 */
export const AlarmSeverityCode_critical =
    AlarmSeverityCode.critical satisfies AlarmSeverityCode; /* LONG_NAMED_ENUMERATED_VALUE */


/**
 * @summary critical
 * @constant
 * @type {number}
 */
export const critical =
    AlarmSeverityCode.critical satisfies AlarmSeverityCode; /* SHORT_NAMED_ENUMERATED_VALUE */


/**
 * @summary AlarmSeverityCode_warning
 * @constant
 * @type {number}
 */
export const AlarmSeverityCode_warning =
    AlarmSeverityCode.warning satisfies AlarmSeverityCode; /* LONG_NAMED_ENUMERATED_VALUE */


/**
 * @summary warning
 * @constant
 * @type {number}
 */
export const warning =
    AlarmSeverityCode.warning satisfies AlarmSeverityCode; /* SHORT_NAMED_ENUMERATED_VALUE */




export function _decode_AlarmSeverityCode(el: _Element): AlarmSeverityCode {
    const enumerated = $._decodeEnumerated(el);
    switch (enumerated) {
        case AlarmSeverityCode.non_alarmed: return AlarmSeverityCode.non_alarmed;
        case AlarmSeverityCode.minor: return AlarmSeverityCode.minor;
        case AlarmSeverityCode.major: return AlarmSeverityCode.major;
        case AlarmSeverityCode.critical: return AlarmSeverityCode.critical;
        case AlarmSeverityCode.warning: return AlarmSeverityCode.warning;
        default:
            throw new _ConstructionError(
                'Invalid ENUMERATED value ' + enumerated + ' for AlarmSeverityCode.',
                el,
            );
    }
}




export const _encode_AlarmSeverityCode: $.ASN1Encoder<AlarmSeverityCode> = $._encodeEnumerated as $.ASN1Encoder<AlarmSeverityCode>;


/* eslint-enable */
