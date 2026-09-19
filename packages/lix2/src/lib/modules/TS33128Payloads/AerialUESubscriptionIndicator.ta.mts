/* eslint-disable */
import {
    ASN1Element as _Element
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary AerialUESubscriptionIndicator
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * AerialUESubscriptionIndicator  ::=  ENUMERATED
 * {
 *     authorized(1),
 *     notAuthorized(2)
 * }
 * ```
 * 
 * @enum {number}
 */
export
enum _enum_for_AerialUESubscriptionIndicator {
    authorized = 1,
    notAuthorized = 2,
}

/**
 * @summary AerialUESubscriptionIndicator
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * AerialUESubscriptionIndicator  ::=  ENUMERATED
 * {
 *     authorized(1),
 *     notAuthorized(2)
 * }
 * ```
 * 
 * @enum {number}
 */
export
type AerialUESubscriptionIndicator = _enum_for_AerialUESubscriptionIndicator;

/**
 * @summary AerialUESubscriptionIndicator
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * AerialUESubscriptionIndicator  ::=  ENUMERATED
 * {
 *     authorized(1),
 *     notAuthorized(2)
 * }
 * ```
 * 
 * @enum {number}
 */
export
const AerialUESubscriptionIndicator = _enum_for_AerialUESubscriptionIndicator;

/**
 * @summary AerialUESubscriptionIndicator_authorized
 * @constant
 * @type {number}
 */
export
const AerialUESubscriptionIndicator_authorized: AerialUESubscriptionIndicator = AerialUESubscriptionIndicator.authorized; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary authorized
 * @constant
 * @type {number}
 */
export
const authorized: AerialUESubscriptionIndicator = AerialUESubscriptionIndicator.authorized; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary AerialUESubscriptionIndicator_notAuthorized
 * @constant
 * @type {number}
 */
export
const AerialUESubscriptionIndicator_notAuthorized: AerialUESubscriptionIndicator = AerialUESubscriptionIndicator.notAuthorized; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary notAuthorized
 * @constant
 * @type {number}
 */
export
const notAuthorized: AerialUESubscriptionIndicator = AerialUESubscriptionIndicator.notAuthorized; /* SHORT_NAMED_ENUMERATED_VALUE */

let _cached_decoder_for_AerialUESubscriptionIndicator: $.ASN1Decoder<AerialUESubscriptionIndicator> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) AerialUESubscriptionIndicator
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_AerialUESubscriptionIndicator (el: _Element): AerialUESubscriptionIndicator {
    if (!_cached_decoder_for_AerialUESubscriptionIndicator) { _cached_decoder_for_AerialUESubscriptionIndicator = $._decodeEnumerated; }
    return _cached_decoder_for_AerialUESubscriptionIndicator(el);
}

let _cached_encoder_for_AerialUESubscriptionIndicator: $.ASN1Encoder<AerialUESubscriptionIndicator> | null = null;

/**
 * @summary Encodes a(n) AerialUESubscriptionIndicator into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AerialUESubscriptionIndicator, encoded as an ASN.1 Element.
 */
export
function _encode_AerialUESubscriptionIndicator (value: AerialUESubscriptionIndicator, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_AerialUESubscriptionIndicator) { _cached_encoder_for_AerialUESubscriptionIndicator = $._encodeEnumerated; }
    return _cached_encoder_for_AerialUESubscriptionIndicator(value, elGetter);
}


/* eslint-enable */
