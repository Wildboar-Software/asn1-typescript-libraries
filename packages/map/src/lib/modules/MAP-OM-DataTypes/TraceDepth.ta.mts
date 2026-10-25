/* eslint-disable */
import {
    type ASN1Element as _Element,
    type ENUMERATED
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



export
enum _enum_for_TraceDepth {
    minimum = 0,
    medium = 1,
    maximum = 2,
}

/**
 * @summary TraceDepth
 * @description
 *
 * minimum, medium, maximum. medium applies only to RNC; other NEs treat medium
 * as minimum (3GPP TS 29.002 V19.1.0 clause 17.7.2).
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * TraceDepth  ::=  ENUMERATED {
 *     minimum (0),
 *     medium (1),
 *     maximum (2),
 *     ...}
 * ```
 * 
 * @enum {number}
 */
export
type TraceDepth = _enum_for_TraceDepth | ENUMERATED;

/**
 * @summary TraceDepth_minimum
 * @description
 *
 * `minimum (0)` (3GPP TS 29.002 V19.1.0 clause 17.7.2).
 *
 * @constant
 * @type {number}
 */
export
const TraceDepth_minimum: _enum_for_TraceDepth.minimum = _enum_for_TraceDepth.minimum; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary minimum
 * @description
 *
 * `minimum (0)` (3GPP TS 29.002 V19.1.0 clause 17.7.2).
 *
 * @constant
 * @type {number}
 */
export
const minimum: _enum_for_TraceDepth.minimum = TraceDepth_minimum; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary TraceDepth_medium
 * @description
 *
 * `medium (1)` RNC only; others apply minimum (3GPP TS 29.002 V19.1.0 clause
 * 17.7.2).
 *
 * @constant
 * @type {number}
 */
export
const TraceDepth_medium: _enum_for_TraceDepth.medium = _enum_for_TraceDepth.medium; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary medium
 * @description
 *
 * `medium (1)` RNC only; others apply minimum (3GPP TS 29.002 V19.1.0 clause
 * 17.7.2).
 *
 * @constant
 * @type {number}
 */
export
const medium: _enum_for_TraceDepth.medium = TraceDepth_medium; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary TraceDepth_maximum
 * @description
 *
 * `maximum (2)` (3GPP TS 29.002 V19.1.0 clause 17.7.2).
 *
 * @constant
 * @type {number}
 */
export
const TraceDepth_maximum: _enum_for_TraceDepth.maximum = _enum_for_TraceDepth.maximum; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary maximum
 * @description
 *
 * `maximum (2)` (3GPP TS 29.002 V19.1.0 clause 17.7.2).
 *
 * @constant
 * @type {number}
 */
export
const maximum: _enum_for_TraceDepth.maximum = TraceDepth_maximum; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary Decodes an ASN.1 element into a(n) TraceDepth
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export const _decode_TraceDepth: $.ASN1Decoder<number> = $._decodeEnumerated;

/**
 * @summary Encodes a(n) TraceDepth into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The TraceDepth, encoded as an ASN.1 Element.
 */
export const _encode_TraceDepth: $.ASN1Encoder<number> = $._encodeEnumerated;


/* eslint-enable */
