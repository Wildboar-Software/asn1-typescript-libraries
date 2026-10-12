/* eslint-disable */
import {
    ASN1Element as _Element
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary VerticalDirection
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * VerticalDirection  ::=  ENUMERATED
 * {
 *     upward(1),
 *     downward(2)
 * }
 * ```
 * 
 * @enum {number}
 */
export
enum _enum_for_VerticalDirection {
    upward = 1,
    downward = 2,
}

/**
 * @summary VerticalDirection
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * VerticalDirection  ::=  ENUMERATED
 * {
 *     upward(1),
 *     downward(2)
 * }
 * ```
 * 
 * @enum {number}
 */
export
type VerticalDirection = _enum_for_VerticalDirection;

/**
 * @summary VerticalDirection
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * VerticalDirection  ::=  ENUMERATED
 * {
 *     upward(1),
 *     downward(2)
 * }
 * ```
 * 
 * @enum {number}
 */
export
const VerticalDirection = _enum_for_VerticalDirection;

/**
 * @summary VerticalDirection_upward
 * @constant
 * @type {number}
 */
export
const VerticalDirection_upward: VerticalDirection = VerticalDirection.upward; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary upward
 * @constant
 * @type {number}
 */
export
const upward: VerticalDirection = VerticalDirection.upward; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary VerticalDirection_downward
 * @constant
 * @type {number}
 */
export
const VerticalDirection_downward: VerticalDirection = VerticalDirection.downward; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary downward
 * @constant
 * @type {number}
 */
export
const downward: VerticalDirection = VerticalDirection.downward; /* SHORT_NAMED_ENUMERATED_VALUE */

let _cached_decoder_for_VerticalDirection: $.ASN1Decoder<VerticalDirection> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) VerticalDirection
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_VerticalDirection (el: _Element): VerticalDirection {
    if (!_cached_decoder_for_VerticalDirection) { _cached_decoder_for_VerticalDirection = $._decodeEnumerated; }
    return _cached_decoder_for_VerticalDirection(el);
}

let _cached_encoder_for_VerticalDirection: $.ASN1Encoder<VerticalDirection> | null = null;

/**
 * @summary Encodes a(n) VerticalDirection into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The VerticalDirection, encoded as an ASN.1 Element.
 */
export
function _encode_VerticalDirection (value: VerticalDirection, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_VerticalDirection) { _cached_encoder_for_VerticalDirection = $._encodeEnumerated; }
    return _cached_encoder_for_VerticalDirection(value, elGetter);
}


/* eslint-enable */
