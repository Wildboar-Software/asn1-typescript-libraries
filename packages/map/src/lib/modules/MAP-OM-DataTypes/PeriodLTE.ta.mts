/* eslint-disable */
import {
    ASN1Element as _Element
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary PeriodLTE
 * @description
 *
 * LTE MDT/RRM period enumerations d1024ms..d1min (3GPP TS 29.002 V19.1.0 clause
 * 17.7.2).
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * PeriodLTE  ::=  ENUMERATED {
 *     d1024ms (0),
 *     d1280ms (1),
 *     d2048ms (2),
 *     d2560ms (3),
 *     d5120ms (4),
 *     d10240ms (5),
 *     d1min (6)}
 * ```
 * 
 * @enum {number}
 */
export
enum _enum_for_PeriodLTE {
    d1024ms = 0,
    d1280ms = 1,
    d2048ms = 2,
    d2560ms = 3,
    d5120ms = 4,
    d10240ms = 5,
    d1min = 6,
}

/**
 * @summary PeriodLTE
 * @description
 *
 * LTE MDT/RRM period enumerations d1024ms..d1min (3GPP TS 29.002 V19.1.0 clause
 * 17.7.2).
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * PeriodLTE  ::=  ENUMERATED {
 *     d1024ms (0),
 *     d1280ms (1),
 *     d2048ms (2),
 *     d2560ms (3),
 *     d5120ms (4),
 *     d10240ms (5),
 *     d1min (6)}
 * ```
 * 
 * @enum {number}
 */
export
type PeriodLTE = _enum_for_PeriodLTE;

/**
 * @summary PeriodLTE
 * @description
 *
 * LTE MDT/RRM period enumerations d1024ms..d1min (3GPP TS 29.002 V19.1.0 clause
 * 17.7.2).
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * PeriodLTE  ::=  ENUMERATED {
 *     d1024ms (0),
 *     d1280ms (1),
 *     d2048ms (2),
 *     d2560ms (3),
 *     d5120ms (4),
 *     d10240ms (5),
 *     d1min (6)}
 * ```
 * 
 * @enum {number}
 */
export
const PeriodLTE = _enum_for_PeriodLTE;

/**
 * @summary PeriodLTE_d1024ms
 * @constant
 * @type {number}
 */
export
const PeriodLTE_d1024ms: PeriodLTE = PeriodLTE.d1024ms; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary d1024ms
 * @constant
 * @type {number}
 */
export
const d1024ms: PeriodLTE = PeriodLTE.d1024ms; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary PeriodLTE_d1280ms
 * @constant
 * @type {number}
 */
export
const PeriodLTE_d1280ms: PeriodLTE = PeriodLTE.d1280ms; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary d1280ms
 * @constant
 * @type {number}
 */
export
const d1280ms: PeriodLTE = PeriodLTE.d1280ms; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary PeriodLTE_d2048ms
 * @constant
 * @type {number}
 */
export
const PeriodLTE_d2048ms: PeriodLTE = PeriodLTE.d2048ms; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary d2048ms
 * @constant
 * @type {number}
 */
export
const d2048ms: PeriodLTE = PeriodLTE.d2048ms; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary PeriodLTE_d2560ms
 * @constant
 * @type {number}
 */
export
const PeriodLTE_d2560ms: PeriodLTE = PeriodLTE.d2560ms; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary d2560ms
 * @constant
 * @type {number}
 */
export
const d2560ms: PeriodLTE = PeriodLTE.d2560ms; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary PeriodLTE_d5120ms
 * @constant
 * @type {number}
 */
export
const PeriodLTE_d5120ms: PeriodLTE = PeriodLTE.d5120ms; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary d5120ms
 * @constant
 * @type {number}
 */
export
const d5120ms: PeriodLTE = PeriodLTE.d5120ms; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary PeriodLTE_d10240ms
 * @constant
 * @type {number}
 */
export
const PeriodLTE_d10240ms: PeriodLTE = PeriodLTE.d10240ms; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary d10240ms
 * @constant
 * @type {number}
 */
export
const d10240ms: PeriodLTE = PeriodLTE.d10240ms; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary PeriodLTE_d1min
 * @constant
 * @type {number}
 */
export
const PeriodLTE_d1min: PeriodLTE = PeriodLTE.d1min; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary d1min
 * @constant
 * @type {number}
 */
export
const d1min: PeriodLTE = PeriodLTE.d1min; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary Decodes an ASN.1 element into a(n) PeriodLTE
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export const _decode_PeriodLTE = $._decodeEnumerated;

/**
 * @summary Encodes a(n) PeriodLTE into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The PeriodLTE, encoded as an ASN.1 Element.
 */
export const _encode_PeriodLTE = $._encodeEnumerated;


/* eslint-enable */
