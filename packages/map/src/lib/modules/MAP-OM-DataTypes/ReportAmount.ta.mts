/* eslint-disable */
import {
    ASN1Element as _Element
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary ReportAmount
 * @description
 *
 * d1..d64 or infinity (3GPP TS 29.002 V19.1.0 clause 17.7.2).
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ReportAmount  ::=  ENUMERATED {
 *     d1 (0),
 *     d2 (1),
 *     d4 (2),
 *     d8 (3),
 *     d16 (4),
 *     d32 (5),
 *     d64 (6),
 *     infinity (7)}
 * ```
 * 
 * @enum {number}
 */
export
enum _enum_for_ReportAmount {
    d1 = 0,
    d2 = 1,
    d4 = 2,
    d8 = 3,
    d16 = 4,
    d32 = 5,
    d64 = 6,
    infinity = 7,
}

/**
 * @summary ReportAmount
 * @description
 *
 * d1..d64 or infinity (3GPP TS 29.002 V19.1.0 clause 17.7.2).
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ReportAmount  ::=  ENUMERATED {
 *     d1 (0),
 *     d2 (1),
 *     d4 (2),
 *     d8 (3),
 *     d16 (4),
 *     d32 (5),
 *     d64 (6),
 *     infinity (7)}
 * ```
 * 
 * @enum {number}
 */
export
type ReportAmount = _enum_for_ReportAmount;

/**
 * @summary ReportAmount
 * @description
 *
 * d1..d64 or infinity (3GPP TS 29.002 V19.1.0 clause 17.7.2).
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ReportAmount  ::=  ENUMERATED {
 *     d1 (0),
 *     d2 (1),
 *     d4 (2),
 *     d8 (3),
 *     d16 (4),
 *     d32 (5),
 *     d64 (6),
 *     infinity (7)}
 * ```
 * 
 * @enum {number}
 */
export
const ReportAmount = _enum_for_ReportAmount;

/**
 * @summary ReportAmount_d1
 * @description
 *
 * `d1 (0)` (3GPP TS 29.002 V19.1.0 clause 17.7.2).
 *
 * @constant
 * @type {number}
 */
export
const ReportAmount_d1: ReportAmount = ReportAmount.d1; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary d1
 * @description
 *
 * `d1 (0)` (3GPP TS 29.002 V19.1.0 clause 17.7.2).
 *
 * @constant
 * @type {number}
 */
export
const d1: ReportAmount = ReportAmount.d1; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ReportAmount_d2
 * @description
 *
 * `d2 (1)` (3GPP TS 29.002 V19.1.0 clause 17.7.2).
 *
 * @constant
 * @type {number}
 */
export
const ReportAmount_d2: ReportAmount = ReportAmount.d2; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary d2
 * @description
 *
 * `d2 (1)` (3GPP TS 29.002 V19.1.0 clause 17.7.2).
 *
 * @constant
 * @type {number}
 */
export
const d2: ReportAmount = ReportAmount.d2; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ReportAmount_d4
 * @description
 *
 * `d4 (2)` (3GPP TS 29.002 V19.1.0 clause 17.7.2).
 *
 * @constant
 * @type {number}
 */
export
const ReportAmount_d4: ReportAmount = ReportAmount.d4; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary d4
 * @description
 *
 * `d4 (2)` (3GPP TS 29.002 V19.1.0 clause 17.7.2).
 *
 * @constant
 * @type {number}
 */
export
const d4: ReportAmount = ReportAmount.d4; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ReportAmount_d8
 * @description
 *
 * `d8 (3)` (3GPP TS 29.002 V19.1.0 clause 17.7.2).
 *
 * @constant
 * @type {number}
 */
export
const ReportAmount_d8: ReportAmount = ReportAmount.d8; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary d8
 * @description
 *
 * `d8 (3)` (3GPP TS 29.002 V19.1.0 clause 17.7.2).
 *
 * @constant
 * @type {number}
 */
export
const d8: ReportAmount = ReportAmount.d8; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ReportAmount_d16
 * @description
 *
 * `d16 (4)` (3GPP TS 29.002 V19.1.0 clause 17.7.2).
 *
 * @constant
 * @type {number}
 */
export
const ReportAmount_d16: ReportAmount = ReportAmount.d16; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary d16
 * @description
 *
 * `d16 (4)` (3GPP TS 29.002 V19.1.0 clause 17.7.2).
 *
 * @constant
 * @type {number}
 */
export
const d16: ReportAmount = ReportAmount.d16; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ReportAmount_d32
 * @description
 *
 * `d32 (5)` (3GPP TS 29.002 V19.1.0 clause 17.7.2).
 *
 * @constant
 * @type {number}
 */
export
const ReportAmount_d32: ReportAmount = ReportAmount.d32; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary d32
 * @description
 *
 * `d32 (5)` (3GPP TS 29.002 V19.1.0 clause 17.7.2).
 *
 * @constant
 * @type {number}
 */
export
const d32: ReportAmount = ReportAmount.d32; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ReportAmount_d64
 * @description
 *
 * `d64 (6)` (3GPP TS 29.002 V19.1.0 clause 17.7.2).
 *
 * @constant
 * @type {number}
 */
export
const ReportAmount_d64: ReportAmount = ReportAmount.d64; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary d64
 * @description
 *
 * `d64 (6)` (3GPP TS 29.002 V19.1.0 clause 17.7.2).
 *
 * @constant
 * @type {number}
 */
export
const d64: ReportAmount = ReportAmount.d64; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ReportAmount_infinity
 * @description
 *
 * `infinity (7)` (3GPP TS 29.002 V19.1.0 clause 17.7.2).
 *
 * @constant
 * @type {number}
 */
export
const ReportAmount_infinity: ReportAmount = ReportAmount.infinity; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary infinity
 * @description
 *
 * `infinity (7)` (3GPP TS 29.002 V19.1.0 clause 17.7.2).
 *
 * @constant
 * @type {number}
 */
export
const infinity: ReportAmount = ReportAmount.infinity; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary Decodes an ASN.1 element into a(n) ReportAmount
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export const _decode_ReportAmount = $._decodeEnumerated;

/**
 * @summary Encodes a(n) ReportAmount into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ReportAmount, encoded as an ASN.1 Element.
 */
export const _encode_ReportAmount = $._encodeEnumerated;


/* eslint-enable */
