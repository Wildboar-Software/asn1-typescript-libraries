/* eslint-disable */
import {
    ASN1Element as _Element,
    ENUMERATED
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
const TraceDepth_minimum: TraceDepth = 0; /* LONG_NAMED_ENUMERATED_VALUE */

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
const minimum: TraceDepth = TraceDepth_minimum; /* SHORT_NAMED_ENUMERATED_VALUE */

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
const TraceDepth_medium: TraceDepth = 1; /* LONG_NAMED_ENUMERATED_VALUE */

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
const medium: TraceDepth = TraceDepth_medium; /* SHORT_NAMED_ENUMERATED_VALUE */

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
const TraceDepth_maximum: TraceDepth = 2; /* LONG_NAMED_ENUMERATED_VALUE */

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
const maximum: TraceDepth = TraceDepth_maximum; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary Decodes an ASN.1 element into a(n) TraceDepth
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export const _decode_TraceDepth = $._decodeEnumerated;

/**
 * @summary Encodes a(n) TraceDepth into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The TraceDepth, encoded as an ASN.1 Element.
 */
export const _encode_TraceDepth = $._encodeEnumerated;


/* eslint-enable */
