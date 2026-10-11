/* eslint-disable */
import {
    ASN1Element as _Element,
    ENUMERATED
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



export
enum _enum_for_OperatorLeaMessagePriority {
    error = 1,
    informational = 2,
}

/**
 * @summary OperatorLeaMessagePriority
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * OperatorLeaMessagePriority  ::=  ENUMERATED
 * {
 *     error(1),
 *         -- reporting of error conditions that have impact on the quality of the
 *         -- intercepted data
 *     informational(2),
 *         -- reporting of conditions that will not have direct impact on the quality of
 *         -- the intercepted data
 *     ...
 * }
 * ```
 * 
 * @enum {number}
 */
export
type OperatorLeaMessagePriority = _enum_for_OperatorLeaMessagePriority | ENUMERATED;

/**
 * @summary OperatorLeaMessagePriority_error
 * @constant
 * @type {number}
 */
export
const OperatorLeaMessagePriority_error: OperatorLeaMessagePriority = 1; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary error
 * @constant
 * @type {number}
 */
export
const error: OperatorLeaMessagePriority = OperatorLeaMessagePriority_error; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary OperatorLeaMessagePriority_informational
 * @constant
 * @type {number}
 */
export
const OperatorLeaMessagePriority_informational: OperatorLeaMessagePriority = 2; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary informational
 * @constant
 * @type {number}
 */
export
const informational: OperatorLeaMessagePriority = OperatorLeaMessagePriority_informational; /* SHORT_NAMED_ENUMERATED_VALUE */

let _cached_decoder_for_OperatorLeaMessagePriority: $.ASN1Decoder<OperatorLeaMessagePriority> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) OperatorLeaMessagePriority
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_OperatorLeaMessagePriority (el: _Element): OperatorLeaMessagePriority {
    if (!_cached_decoder_for_OperatorLeaMessagePriority) { _cached_decoder_for_OperatorLeaMessagePriority = $._decodeEnumerated; }
    return _cached_decoder_for_OperatorLeaMessagePriority(el);
}

let _cached_encoder_for_OperatorLeaMessagePriority: $.ASN1Encoder<OperatorLeaMessagePriority> | null = null;

/**
 * @summary Encodes a(n) OperatorLeaMessagePriority into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The OperatorLeaMessagePriority, encoded as an ASN.1 Element.
 */
export
function _encode_OperatorLeaMessagePriority (value: OperatorLeaMessagePriority, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_OperatorLeaMessagePriority) { _cached_encoder_for_OperatorLeaMessagePriority = $._encodeEnumerated; }
    return _cached_encoder_for_OperatorLeaMessagePriority(value, elGetter);
}


/* eslint-enable */
