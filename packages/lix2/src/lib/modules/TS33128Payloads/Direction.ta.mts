/* eslint-disable */
import {
    ASN1Element as _Element
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary Direction
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * Direction  ::=  ENUMERATED
 * {
 *     fromTarget(1),
 *     toTarget(2)
 * }
 * ```
 * 
 * @enum {number}
 */
export
enum _enum_for_Direction {
    fromTarget = 1,
    toTarget = 2,
}

/**
 * @summary Direction
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * Direction  ::=  ENUMERATED
 * {
 *     fromTarget(1),
 *     toTarget(2)
 * }
 * ```
 * 
 * @enum {number}
 */
export
type Direction = _enum_for_Direction;

/**
 * @summary Direction
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * Direction  ::=  ENUMERATED
 * {
 *     fromTarget(1),
 *     toTarget(2)
 * }
 * ```
 * 
 * @enum {number}
 */
export
const Direction = _enum_for_Direction;

/**
 * @summary Direction_fromTarget
 * @constant
 * @type {number}
 */
export
const Direction_fromTarget: Direction = Direction.fromTarget; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary fromTarget
 * @constant
 * @type {number}
 */
export
const fromTarget: Direction = Direction.fromTarget; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary Direction_toTarget
 * @constant
 * @type {number}
 */
export
const Direction_toTarget: Direction = Direction.toTarget; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary toTarget
 * @constant
 * @type {number}
 */
export
const toTarget: Direction = Direction.toTarget; /* SHORT_NAMED_ENUMERATED_VALUE */

let _cached_decoder_for_Direction: $.ASN1Decoder<Direction> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) Direction
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_Direction (el: _Element): Direction {
    if (!_cached_decoder_for_Direction) { _cached_decoder_for_Direction = $._decodeEnumerated; }
    return _cached_decoder_for_Direction(el);
}

let _cached_encoder_for_Direction: $.ASN1Encoder<Direction> | null = null;

/**
 * @summary Encodes a(n) Direction into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Direction, encoded as an ASN.1 Element.
 */
export
function _encode_Direction (value: Direction, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_Direction) { _cached_encoder_for_Direction = $._encodeEnumerated; }
    return _cached_encoder_for_Direction(value, elGetter);
}


/* eslint-enable */
