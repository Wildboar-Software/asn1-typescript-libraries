/* eslint-disable */
import {
    ASN1Element as _Element,
    ENUMERATED
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



export
enum _enum_for_SignalDirection {
    internal = 0,
    external = 1,
    both = 2,
}

/**
 * @summary SignalDirection
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SignalDirection  ::=  ENUMERATED
 *     {
 *         internal(0),
 *         external(1),
 *         both(2),
 *         ...
 *     }
 * ```
 * 
 * @enum {number}
 */
export
type SignalDirection = _enum_for_SignalDirection | ENUMERATED;

/**
 * @summary SignalDirection_internal
 * @constant
 * @type {number}
 */
export
const SignalDirection_internal: SignalDirection = 0; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary internal
 * @constant
 * @type {number}
 */
export
const internal: SignalDirection = SignalDirection_internal; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary SignalDirection_external
 * @constant
 * @type {number}
 */
export
const SignalDirection_external: SignalDirection = 1; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary external
 * @constant
 * @type {number}
 */
export
const external: SignalDirection = SignalDirection_external; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary SignalDirection_both
 * @constant
 * @type {number}
 */
export
const SignalDirection_both: SignalDirection = 2; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary both
 * @constant
 * @type {number}
 */
export
const both: SignalDirection = SignalDirection_both; /* SHORT_NAMED_ENUMERATED_VALUE */

let _cached_decoder_for_SignalDirection: $.ASN1Decoder<SignalDirection> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) SignalDirection
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_SignalDirection (el: _Element): SignalDirection {
    if (!_cached_decoder_for_SignalDirection) { _cached_decoder_for_SignalDirection = $._decodeEnumerated; }
    return _cached_decoder_for_SignalDirection(el);
}

let _cached_encoder_for_SignalDirection: $.ASN1Encoder<SignalDirection> | null = null;

/**
 * @summary Encodes a(n) SignalDirection into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SignalDirection, encoded as an ASN.1 Element.
 */
export
function _encode_SignalDirection (value: SignalDirection, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_SignalDirection) { _cached_encoder_for_SignalDirection = $._encodeEnumerated; }
    return _cached_encoder_for_SignalDirection(value, elGetter);
}


/* eslint-enable */
