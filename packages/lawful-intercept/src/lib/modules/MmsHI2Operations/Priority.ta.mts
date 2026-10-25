/* eslint-disable */
import {
    type ENUMERATED
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
 * Priority the originator MMS client assigned to the MM (table 15.3.6.1.2).
 * Clause 15.3 does not further define the three levels beyond their names.
 * 
 * 3GPP TS 33.108, table 15.3.6.1.2 and annex B.15.
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
 * @description
 * 
 * Low priority assigned by the originator MMS client. Clause 15.3 does not
 * further define this level.
 * @constant
 * @type {number}
 */
export
const Priority_low = _enum_for_Priority.low; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary low
 * @description
 * 
 * Low originator priority. Clause 15.3 does not further define it.
 * @constant
 * @type {number}
 */
export
const low = Priority_low; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary Priority_normal
 * @description
 * 
 * Normal priority assigned by the originator MMS client. Clause 15.3 does not
 * further define this level.
 * @constant
 * @type {number}
 */
export
const Priority_normal = _enum_for_Priority.normal; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary normal
 * @description
 * 
 * Normal originator priority. Clause 15.3 does not further define it.
 * @constant
 * @type {number}
 */
export
const normal = Priority_normal; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary Priority_high
 * @description
 * 
 * High priority assigned by the originator MMS client. Clause 15.3 does not
 * further define this level.
 * @constant
 * @type {number}
 */
export
const Priority_high = _enum_for_Priority.high; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary high
 * @description
 * 
 * High originator priority. Clause 15.3 does not further define it.
 * @constant
 * @type {number}
 */
export
const high = Priority_high; /* SHORT_NAMED_ENUMERATED_VALUE */
export const _decode_Priority: $.ASN1Decoder<Priority> = $._decodeEnumerated;
export const _encode_Priority: $.ASN1Encoder<Priority> = $._encodeEnumerated;


/* eslint-enable */
