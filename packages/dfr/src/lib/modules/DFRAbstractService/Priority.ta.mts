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
 * @summary Priority
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * Priority  ::=  ENUMERATED {
 *     low         (0),
 *     medium      (1),
 *     high        (2)
 * }
 * ```
 * 
 * @enum {number}
 */
export
enum _enum_for_Priority {
    low = 0,
    medium = 1,
    high = 2,
}

/**
 * @summary Priority
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * Priority  ::=  ENUMERATED {
 *     low         (0),
 *     medium      (1),
 *     high        (2)
 * }
 * ```
 * 
 * @enum {number}
 */
export
type Priority = _enum_for_Priority;

/**
 * @summary Priority
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * Priority  ::=  ENUMERATED {
 *     low         (0),
 *     medium      (1),
 *     high        (2)
 * }
 * ```
 * 
 * @enum {number}
 */
export
const Priority = _enum_for_Priority;

/**
 * @summary Priority_low
 * @constant
 * @type {number}
 */
export
const Priority_low: Priority = Priority.low; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary low
 * @constant
 * @type {number}
 */
export
const low: Priority = Priority.low; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary Priority_medium
 * @constant
 * @type {number}
 */
export
const Priority_medium: Priority = Priority.medium; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary medium
 * @constant
 * @type {number}
 */
export
const medium: Priority = Priority.medium; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary Priority_high
 * @constant
 * @type {number}
 */
export
const Priority_high: Priority = Priority.high; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary high
 * @constant
 * @type {number}
 */
export
const high: Priority = Priority.high; /* SHORT_NAMED_ENUMERATED_VALUE */
export const _decode_Priority = $._decodeEnumerated;
export const _encode_Priority = $._encodeEnumerated;


/* eslint-enable */
