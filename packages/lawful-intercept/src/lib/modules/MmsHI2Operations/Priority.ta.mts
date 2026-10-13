/* eslint-disable */
import {
    ENUMERATED
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



export
enum _enum_for_Priority {
    low = 0,
    normal = 1,
    high = 2,
}

/**
 * @summary Priority
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * Priority  ::=  ENUMERATED
 * {
 *     low     (0),
 *     normal     (1),
 *     high    (2),
 *     ...
 * }
 * ```
 * 
 * @enum {number}
 */
export
type Priority = _enum_for_Priority | ENUMERATED;

/**
 * @summary Priority_low
 * @constant
 * @type {number}
 */
export
const Priority_low: Priority = 0; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary low
 * @constant
 * @type {number}
 */
export
const low: Priority = Priority_low; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary Priority_normal
 * @constant
 * @type {number}
 */
export
const Priority_normal: Priority = 1; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary normal
 * @constant
 * @type {number}
 */
export
const normal: Priority = Priority_normal; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary Priority_high
 * @constant
 * @type {number}
 */
export
const Priority_high: Priority = 2; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary high
 * @constant
 * @type {number}
 */
export
const high: Priority = Priority_high; /* SHORT_NAMED_ENUMERATED_VALUE */
export const _decode_Priority: $.ASN1Decoder<Priority> = $._decodeEnumerated;
export const _encode_Priority: $.ASN1Encoder<Priority> = $._encodeEnumerated;


/* eslint-enable */
