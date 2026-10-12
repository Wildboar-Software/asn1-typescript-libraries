/* eslint-disable */
import {
    ASN1Element as _Element,
    ENUMERATED
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



export
enum _enum_for_Messaging_Property_Priority {
    low = 1,
    medium = 2,
    high = 3,
    private_ = 4,
}

/**
 * @summary Messaging_Property_Priority
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * Messaging-Property-Priority  ::=  ENUMERATED
 * {
 *     low(1),
 *     medium(2),
 *     high(3),
 *     private(4),
 *     ...
 * }
 * ```
 * 
 * @enum {number}
 */
export
type Messaging_Property_Priority = _enum_for_Messaging_Property_Priority | ENUMERATED;

/**
 * @summary Messaging_Property_Priority_low
 * @constant
 * @type {number}
 */
export
const Messaging_Property_Priority_low: Messaging_Property_Priority = 1; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary low
 * @constant
 * @type {number}
 */
export
const low: Messaging_Property_Priority = Messaging_Property_Priority_low; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary Messaging_Property_Priority_medium
 * @constant
 * @type {number}
 */
export
const Messaging_Property_Priority_medium: Messaging_Property_Priority = 2; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary medium
 * @constant
 * @type {number}
 */
export
const medium: Messaging_Property_Priority = Messaging_Property_Priority_medium; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary Messaging_Property_Priority_high
 * @constant
 * @type {number}
 */
export
const Messaging_Property_Priority_high: Messaging_Property_Priority = 3; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary high
 * @constant
 * @type {number}
 */
export
const high: Messaging_Property_Priority = Messaging_Property_Priority_high; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary Messaging_Property_Priority_private_
 * @constant
 * @type {number}
 */
export
const Messaging_Property_Priority_private_: Messaging_Property_Priority = 4; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary private_
 * @constant
 * @type {number}
 */
export
const private_: Messaging_Property_Priority = Messaging_Property_Priority_private_; /* SHORT_NAMED_ENUMERATED_VALUE */

let _cached_decoder_for_Messaging_Property_Priority: $.ASN1Decoder<Messaging_Property_Priority> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) Messaging_Property_Priority
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_Messaging_Property_Priority (el: _Element): Messaging_Property_Priority {
    if (!_cached_decoder_for_Messaging_Property_Priority) { _cached_decoder_for_Messaging_Property_Priority = $._decodeEnumerated; }
    return _cached_decoder_for_Messaging_Property_Priority(el);
}

let _cached_encoder_for_Messaging_Property_Priority: $.ASN1Encoder<Messaging_Property_Priority> | null = null;

/**
 * @summary Encodes a(n) Messaging_Property_Priority into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Messaging_Property_Priority, encoded as an ASN.1 Element.
 */
export
function _encode_Messaging_Property_Priority (value: Messaging_Property_Priority, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_Messaging_Property_Priority) { _cached_encoder_for_Messaging_Property_Priority = $._encodeEnumerated; }
    return _cached_encoder_for_Messaging_Property_Priority(value, elGetter);
}


/* eslint-enable */
