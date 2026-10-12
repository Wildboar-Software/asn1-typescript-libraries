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

let _cached_decoder_for_FlowDirection: $.ASN1Decoder<FlowDirection> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) FlowDirection
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_FlowDirection (el: _Element): FlowDirection {
    if (!_cached_decoder_for_FlowDirection) { _cached_decoder_for_FlowDirection = $._decodeEnumerated; }
    return _cached_decoder_for_FlowDirection(el);
}

let _cached_encoder_for_FlowDirection: $.ASN1Encoder<FlowDirection> | null = null;

/**
 * @summary Encodes a(n) FlowDirection into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The FlowDirection, encoded as an ASN.1 Element.
 */
export
function _encode_FlowDirection (value: FlowDirection, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_FlowDirection) { _cached_encoder_for_FlowDirection = $._encodeEnumerated; }
    return _cached_encoder_for_FlowDirection(value, elGetter);
}


/* eslint-enable */
