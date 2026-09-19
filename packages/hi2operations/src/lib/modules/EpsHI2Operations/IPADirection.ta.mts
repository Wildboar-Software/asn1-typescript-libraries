/* eslint-disable */
import {
    ASN1Element as _Element,
    ENUMERATED
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



export
enum _enum_for_IPADirection {
    toTarget = 0,
    fromTarget = 1,
}

/**
 * @summary IPADirection
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * IPADirection  ::=  ENUMERATED
 * {
 *  toTarget (0),
 *  fromTarget (1),
 * ...
 * }
 * ```
 * 
 * @enum {number}
 */
export
type IPADirection = _enum_for_IPADirection | ENUMERATED;

/**
 * @summary IPADirection_toTarget
 * @constant
 * @type {number}
 */
export
const IPADirection_toTarget: IPADirection = 0; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary toTarget
 * @constant
 * @type {number}
 */
export
const toTarget: IPADirection = IPADirection_toTarget; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary IPADirection_fromTarget
 * @constant
 * @type {number}
 */
export
const IPADirection_fromTarget: IPADirection = 1; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary fromTarget
 * @constant
 * @type {number}
 */
export
const fromTarget: IPADirection = IPADirection_fromTarget; /* SHORT_NAMED_ENUMERATED_VALUE */

let _cached_decoder_for_IPADirection: $.ASN1Decoder<IPADirection> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) IPADirection
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_IPADirection (el: _Element): IPADirection {
    if (!_cached_decoder_for_IPADirection) { _cached_decoder_for_IPADirection = $._decodeEnumerated; }
    return _cached_decoder_for_IPADirection(el);
}

let _cached_encoder_for_IPADirection: $.ASN1Encoder<IPADirection> | null = null;

/**
 * @summary Encodes a(n) IPADirection into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The IPADirection, encoded as an ASN.1 Element.
 */
export
function _encode_IPADirection (value: IPADirection, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_IPADirection) { _cached_encoder_for_IPADirection = $._encodeEnumerated; }
    return _cached_encoder_for_IPADirection(value, elGetter);
}


/* eslint-enable */
