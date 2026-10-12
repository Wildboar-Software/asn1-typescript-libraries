/* eslint-disable */
import {
    ASN1Element as _Element,
    ENUMERATED
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



export
enum _enum_for_FlowDirection {
    downstream = 1,
    upstream = 2,
    downstream_and_upstream = 3,
}

/**
 * @summary FlowDirection
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * FlowDirection  ::=  ENUMERATED {
 *     downstream (1),
 *     upstream (2),
 *     downstream-and-upstream (3),
 *     ...
 * }
 * ```
 * 
 * @enum {number}
 */
export
type FlowDirection = _enum_for_FlowDirection | ENUMERATED;

/**
 * @summary FlowDirection_downstream
 * @constant
 * @type {number}
 */
export
const FlowDirection_downstream: FlowDirection = 1; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary downstream
 * @constant
 * @type {number}
 */
export
const downstream: FlowDirection = FlowDirection_downstream; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary FlowDirection_upstream
 * @constant
 * @type {number}
 */
export
const FlowDirection_upstream: FlowDirection = 2; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary upstream
 * @constant
 * @type {number}
 */
export
const upstream: FlowDirection = FlowDirection_upstream; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary FlowDirection_downstream_and_upstream
 * @constant
 * @type {number}
 */
export
const FlowDirection_downstream_and_upstream: FlowDirection = 3; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary downstream_and_upstream
 * @constant
 * @type {number}
 */
export
const downstream_and_upstream: FlowDirection = FlowDirection_downstream_and_upstream; /* SHORT_NAMED_ENUMERATED_VALUE */
export const _decode_FlowDirection: $.ASN1Decoder<FlowDirection> = $._decodeEnumerated;
export const _encode_FlowDirection: $.ASN1Encoder<FlowDirection> = $._encodeEnumerated;


/* eslint-enable */
