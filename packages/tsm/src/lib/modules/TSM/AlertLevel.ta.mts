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
 * @constant
 * @type {number}
 */
export
const AlertLevel_warning: AlertLevel = AlertLevel.warning; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary warning
 * @constant
 * @type {number}
 */
export
const warning: AlertLevel = AlertLevel.warning; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary AlertLevel_fatal
 * @constant
 * @type {number}
 */
export
const AlertLevel_fatal: AlertLevel = AlertLevel.fatal; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary fatal
 * @constant
 * @type {number}
 */
export
const fatal: AlertLevel = AlertLevel.fatal; /* SHORT_NAMED_ENUMERATED_VALUE */
export const _decode_AlertLevel = $._decodeEnumerated;
export const _encode_AlertLevel = $._encodeEnumerated;


/* eslint-enable */
