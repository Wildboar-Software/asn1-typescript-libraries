/* eslint-disable */
import {
    ASN1Element as _Element,
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

let _cached_decoder_for_Priority: $.ASN1Decoder<Priority> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) Priority
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_Priority (el: _Element): Priority {
    if (!_cached_decoder_for_Priority) { _cached_decoder_for_Priority = $._decodeEnumerated; }
    return _cached_decoder_for_Priority(el);
}

let _cached_encoder_for_Priority: $.ASN1Encoder<Priority> | null = null;

/**
 * @summary Encodes a(n) Priority into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Priority, encoded as an ASN.1 Element.
 */
export
function _encode_Priority (value: Priority, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_Priority) { _cached_encoder_for_Priority = $._encodeEnumerated; }
    return _cached_encoder_for_Priority(value, elGetter);
}


/* eslint-enable */
