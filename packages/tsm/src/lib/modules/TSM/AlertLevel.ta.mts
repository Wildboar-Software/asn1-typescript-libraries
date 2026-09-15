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
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary AlertLevel
 * @description
 *
 * Severity of an `Alert`. TSM biometric handshake alerts 115–117 are always
 * fatal. ITU-T Rec. X.1084 (05/2008) §10.2, Annex A.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * AlertLevel     ::=     ENUMERATED {
 * warning (1),
 * fatal (2)
 * }
 * ```
 * 
 * @enum {number}
 */
export
enum _enum_for_AlertLevel {
    warning = 1,
    fatal = 2,
}

/**
 * @summary AlertLevel
 * @description
 *
 * Severity of an `Alert`. TSM biometric handshake alerts 115–117 are always
 * fatal. ITU-T Rec. X.1084 (05/2008) §10.2, Annex A.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * AlertLevel     ::=     ENUMERATED {
 * warning (1),
 * fatal (2)
 * }
 * ```
 * 
 * @enum {number}
 */
export
type AlertLevel = _enum_for_AlertLevel;

/**
 * @summary AlertLevel
 * @description
 *
 * Severity of an `Alert`. TSM biometric handshake alerts 115–117 are always
 * fatal. ITU-T Rec. X.1084 (05/2008) §10.2, Annex A.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * AlertLevel     ::=     ENUMERATED {
 * warning (1),
 * fatal (2)
 * }
 * ```
 * 
 * @enum {number}
 */
export
const AlertLevel = _enum_for_AlertLevel;

/**
 * @summary AlertLevel_warning
 * @description Non-fatal alert. TSM biometric alerts 115–117 are not this
 * level. X.1084 §10.2.
 * @constant
 * @type {number}
 */
export
const AlertLevel_warning: AlertLevel = AlertLevel.warning; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary warning
 * @description Non-fatal alert. TSM biometric alerts 115–117 are not this
 * level. X.1084 §10.2.
 * @constant
 * @type {number}
 */
export
const warning: AlertLevel = AlertLevel.warning; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary AlertLevel_fatal
 * @description Immediate abort. Required for TSM alerts 115–117. X.1084
 * §10.2.
 * @constant
 * @type {number}
 */
export
const AlertLevel_fatal: AlertLevel = AlertLevel.fatal; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary fatal
 * @description Immediate abort. Required for TSM alerts 115–117. X.1084
 * §10.2.
 * @constant
 * @type {number}
 */
export
const fatal: AlertLevel = AlertLevel.fatal; /* SHORT_NAMED_ENUMERATED_VALUE */
export const _decode_AlertLevel = $._decodeEnumerated;
export const _encode_AlertLevel = $._encodeEnumerated;


/* eslint-enable */
