/* eslint-disable */
import {
    ASN1Element as _Element
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary LoggingInterval
 * @description
 *
 * Logged MDT interval d1dot28..d61dot44 (3GPP TS 29.002 V19.1.0 clause 17.7.2).
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * LoggingInterval  ::=  ENUMERATED {
 *     d1dot28 (0),
 *     d2dot56 (1),
 *     d5dot12 (2),
 *     d10dot24 (3),
 *     d20dot48 (4),
 *     d30dot72 (5),
 *     d40dot96 (6),
 *     d61dot44 (7)}
 * ```
 * 
 * @enum {number}
 */
export
enum _enum_for_LoggingInterval {
    d1dot28 = 0,
    d2dot56 = 1,
    d5dot12 = 2,
    d10dot24 = 3,
    d20dot48 = 4,
    d30dot72 = 5,
    d40dot96 = 6,
    d61dot44 = 7,
}

/**
 * @summary LoggingInterval
 * @description
 *
 * Logged MDT interval d1dot28..d61dot44 (3GPP TS 29.002 V19.1.0 clause 17.7.2).
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * LoggingInterval  ::=  ENUMERATED {
 *     d1dot28 (0),
 *     d2dot56 (1),
 *     d5dot12 (2),
 *     d10dot24 (3),
 *     d20dot48 (4),
 *     d30dot72 (5),
 *     d40dot96 (6),
 *     d61dot44 (7)}
 * ```
 * 
 * @enum {number}
 */
export
type LoggingInterval = _enum_for_LoggingInterval;

/**
 * @summary LoggingInterval
 * @description
 *
 * Logged MDT interval d1dot28..d61dot44 (3GPP TS 29.002 V19.1.0 clause 17.7.2).
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * LoggingInterval  ::=  ENUMERATED {
 *     d1dot28 (0),
 *     d2dot56 (1),
 *     d5dot12 (2),
 *     d10dot24 (3),
 *     d20dot48 (4),
 *     d30dot72 (5),
 *     d40dot96 (6),
 *     d61dot44 (7)}
 * ```
 * 
 * @enum {number}
 */
export
const LoggingInterval = _enum_for_LoggingInterval;

/**
 * @summary LoggingInterval_d1dot28
 * @constant
 * @type {number}
 */
export
const LoggingInterval_d1dot28 = LoggingInterval.d1dot28 satisfies LoggingInterval; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary d1dot28
 * @constant
 * @type {number}
 */
export
const d1dot28 = LoggingInterval.d1dot28 satisfies LoggingInterval; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary LoggingInterval_d2dot56
 * @constant
 * @type {number}
 */
export
const LoggingInterval_d2dot56 = LoggingInterval.d2dot56 satisfies LoggingInterval; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary d2dot56
 * @constant
 * @type {number}
 */
export
const d2dot56 = LoggingInterval.d2dot56 satisfies LoggingInterval; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary LoggingInterval_d5dot12
 * @constant
 * @type {number}
 */
export
const LoggingInterval_d5dot12 = LoggingInterval.d5dot12 satisfies LoggingInterval; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary d5dot12
 * @constant
 * @type {number}
 */
export
const d5dot12 = LoggingInterval.d5dot12 satisfies LoggingInterval; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary LoggingInterval_d10dot24
 * @constant
 * @type {number}
 */
export
const LoggingInterval_d10dot24 = LoggingInterval.d10dot24 satisfies LoggingInterval; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary d10dot24
 * @constant
 * @type {number}
 */
export
const d10dot24 = LoggingInterval.d10dot24 satisfies LoggingInterval; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary LoggingInterval_d20dot48
 * @constant
 * @type {number}
 */
export
const LoggingInterval_d20dot48 = LoggingInterval.d20dot48 satisfies LoggingInterval; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary d20dot48
 * @constant
 * @type {number}
 */
export
const d20dot48 = LoggingInterval.d20dot48 satisfies LoggingInterval; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary LoggingInterval_d30dot72
 * @constant
 * @type {number}
 */
export
const LoggingInterval_d30dot72 = LoggingInterval.d30dot72 satisfies LoggingInterval; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary d30dot72
 * @constant
 * @type {number}
 */
export
const d30dot72 = LoggingInterval.d30dot72 satisfies LoggingInterval; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary LoggingInterval_d40dot96
 * @constant
 * @type {number}
 */
export
const LoggingInterval_d40dot96 = LoggingInterval.d40dot96 satisfies LoggingInterval; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary d40dot96
 * @constant
 * @type {number}
 */
export
const d40dot96 = LoggingInterval.d40dot96 satisfies LoggingInterval; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary LoggingInterval_d61dot44
 * @constant
 * @type {number}
 */
export
const LoggingInterval_d61dot44 = LoggingInterval.d61dot44 satisfies LoggingInterval; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary d61dot44
 * @constant
 * @type {number}
 */
export
const d61dot44 = LoggingInterval.d61dot44 satisfies LoggingInterval; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary Decodes an ASN.1 element into a(n) LoggingInterval
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export const _decode_LoggingInterval = $._decodeEnumerated;

/**
 * @summary Encodes a(n) LoggingInterval into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The LoggingInterval, encoded as an ASN.1 Element.
 */
export const _encode_LoggingInterval = $._encodeEnumerated;


/* eslint-enable */
