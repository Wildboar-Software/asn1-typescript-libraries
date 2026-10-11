/* eslint-disable */
import {
    ASN1Element as _Element,
    ENUMERATED
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



export
enum _enum_for_PayloadDirection {
    fromTarget = 0,
    toTarget = 1,
    indeterminate = 2,
    combined = 3,
    notapplicable = 4,
}

/**
 * @summary PayloadDirection
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * PayloadDirection  ::=  ENUMERATED
 * {
 *     fromTarget(0),
 *     toTarget(1),
 *     ...,
 *     indeterminate(2),
 *         -- Indication that the direction was indeterminate
 *     combined(3),
 *         -- Indication applicable to some services that the traffic is actually a combination
 *         -- of To and From
 *     notapplicable(4)
 *         -- Indication that direction of interceptable service does not make sense
 * }
 * ```
 * 
 * @enum {number}
 */
export
type PayloadDirection = _enum_for_PayloadDirection | ENUMERATED;

/**
 * @summary PayloadDirection_fromTarget
 * @constant
 * @type {number}
 */
export
const PayloadDirection_fromTarget: PayloadDirection = 0; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary fromTarget
 * @constant
 * @type {number}
 */
export
const fromTarget: PayloadDirection = PayloadDirection_fromTarget; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary PayloadDirection_toTarget
 * @constant
 * @type {number}
 */
export
const PayloadDirection_toTarget: PayloadDirection = 1; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary toTarget
 * @constant
 * @type {number}
 */
export
const toTarget: PayloadDirection = PayloadDirection_toTarget; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary PayloadDirection_indeterminate
 * @constant
 * @type {number}
 */
export
const PayloadDirection_indeterminate: PayloadDirection = 2; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary indeterminate
 * @constant
 * @type {number}
 */
export
const indeterminate: PayloadDirection = PayloadDirection_indeterminate; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary PayloadDirection_combined
 * @constant
 * @type {number}
 */
export
const PayloadDirection_combined: PayloadDirection = 3; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary combined
 * @constant
 * @type {number}
 */
export
const combined: PayloadDirection = PayloadDirection_combined; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary PayloadDirection_notapplicable
 * @constant
 * @type {number}
 */
export
const PayloadDirection_notapplicable: PayloadDirection = 4; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary notapplicable
 * @constant
 * @type {number}
 */
export
const notapplicable: PayloadDirection = PayloadDirection_notapplicable; /* SHORT_NAMED_ENUMERATED_VALUE */

let _cached_decoder_for_PayloadDirection: $.ASN1Decoder<PayloadDirection> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) PayloadDirection
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_PayloadDirection (el: _Element): PayloadDirection {
    if (!_cached_decoder_for_PayloadDirection) { _cached_decoder_for_PayloadDirection = $._decodeEnumerated; }
    return _cached_decoder_for_PayloadDirection(el);
}

let _cached_encoder_for_PayloadDirection: $.ASN1Encoder<PayloadDirection> | null = null;

/**
 * @summary Encodes a(n) PayloadDirection into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The PayloadDirection, encoded as an ASN.1 Element.
 */
export
function _encode_PayloadDirection (value: PayloadDirection, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_PayloadDirection) { _cached_encoder_for_PayloadDirection = $._encodeEnumerated; }
    return _cached_encoder_for_PayloadDirection(value, elGetter);
}


/* eslint-enable */
