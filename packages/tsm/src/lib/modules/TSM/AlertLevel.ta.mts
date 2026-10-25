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
const AlertLevel: typeof _enum_for_AlertLevel = _enum_for_AlertLevel;

/**
 * @summary AlertLevel_warning
 * @description Non-fatal alert. TSM biometric alerts 115–117 are not this
 * level. X.1084 §10.2.
 * @constant
 * @type {number}
 */
export
const AlertLevel_warning: _enum_for_AlertLevel.warning = AlertLevel.warning; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary warning
 * @description Non-fatal alert. TSM biometric alerts 115–117 are not this
 * level. X.1084 §10.2.
 * @constant
 * @type {number}
 */
export
const warning: _enum_for_AlertLevel.warning = AlertLevel.warning; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary AlertLevel_fatal
 * @description Immediate abort. Required for TSM alerts 115–117. X.1084
 * §10.2.
 * @constant
 * @type {number}
 */
export
const AlertLevel_fatal: _enum_for_AlertLevel.fatal = AlertLevel.fatal; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary fatal
 * @description Immediate abort. Required for TSM alerts 115–117. X.1084
 * §10.2.
 * @constant
 * @type {number}
 */
export
const fatal: _enum_for_AlertLevel.fatal = AlertLevel.fatal; /* SHORT_NAMED_ENUMERATED_VALUE */
export function _decode_AlertLevel(el: _Element): AlertLevel {
    const enumerated = $._decodeEnumerated(el);
    switch (enumerated) {
        case AlertLevel.warning: return AlertLevel.warning;
        case AlertLevel.fatal: return AlertLevel.fatal;
        default:
            throw new _ConstructionError(
                "Invalid ENUMERATED value " + enumerated + " for AlertLevel.",
                el,
            );
    }
}
export const _encode_AlertLevel: $.ASN1Encoder<AlertLevel> = $._encodeEnumerated as $.ASN1Encoder<AlertLevel>;


/* eslint-enable */
