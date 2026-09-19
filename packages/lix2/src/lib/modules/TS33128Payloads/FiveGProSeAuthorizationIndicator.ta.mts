/* eslint-disable */
import {
    ASN1Element as _Element
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary FiveGProSeAuthorizationIndicator
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * FiveGProSeAuthorizationIndicator  ::=  ENUMERATED
 * {
 *     authorized(1),
 *     notAuthorized(2)
 * }
 * ```
 * 
 * @enum {number}
 */
export
enum _enum_for_FiveGProSeAuthorizationIndicator {
    authorized = 1,
    notAuthorized = 2,
}

/**
 * @summary FiveGProSeAuthorizationIndicator
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * FiveGProSeAuthorizationIndicator  ::=  ENUMERATED
 * {
 *     authorized(1),
 *     notAuthorized(2)
 * }
 * ```
 * 
 * @enum {number}
 */
export
type FiveGProSeAuthorizationIndicator = _enum_for_FiveGProSeAuthorizationIndicator;

/**
 * @summary FiveGProSeAuthorizationIndicator
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * FiveGProSeAuthorizationIndicator  ::=  ENUMERATED
 * {
 *     authorized(1),
 *     notAuthorized(2)
 * }
 * ```
 * 
 * @enum {number}
 */
export
const FiveGProSeAuthorizationIndicator = _enum_for_FiveGProSeAuthorizationIndicator;

/**
 * @summary FiveGProSeAuthorizationIndicator_authorized
 * @constant
 * @type {number}
 */
export
const FiveGProSeAuthorizationIndicator_authorized: FiveGProSeAuthorizationIndicator = FiveGProSeAuthorizationIndicator.authorized; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary authorized
 * @constant
 * @type {number}
 */
export
const authorized: FiveGProSeAuthorizationIndicator = FiveGProSeAuthorizationIndicator.authorized; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary FiveGProSeAuthorizationIndicator_notAuthorized
 * @constant
 * @type {number}
 */
export
const FiveGProSeAuthorizationIndicator_notAuthorized: FiveGProSeAuthorizationIndicator = FiveGProSeAuthorizationIndicator.notAuthorized; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary notAuthorized
 * @constant
 * @type {number}
 */
export
const notAuthorized: FiveGProSeAuthorizationIndicator = FiveGProSeAuthorizationIndicator.notAuthorized; /* SHORT_NAMED_ENUMERATED_VALUE */

let _cached_decoder_for_FiveGProSeAuthorizationIndicator: $.ASN1Decoder<FiveGProSeAuthorizationIndicator> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) FiveGProSeAuthorizationIndicator
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_FiveGProSeAuthorizationIndicator (el: _Element): FiveGProSeAuthorizationIndicator {
    if (!_cached_decoder_for_FiveGProSeAuthorizationIndicator) { _cached_decoder_for_FiveGProSeAuthorizationIndicator = $._decodeEnumerated; }
    return _cached_decoder_for_FiveGProSeAuthorizationIndicator(el);
}

let _cached_encoder_for_FiveGProSeAuthorizationIndicator: $.ASN1Encoder<FiveGProSeAuthorizationIndicator> | null = null;

/**
 * @summary Encodes a(n) FiveGProSeAuthorizationIndicator into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The FiveGProSeAuthorizationIndicator, encoded as an ASN.1 Element.
 */
export
function _encode_FiveGProSeAuthorizationIndicator (value: FiveGProSeAuthorizationIndicator, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_FiveGProSeAuthorizationIndicator) { _cached_encoder_for_FiveGProSeAuthorizationIndicator = $._encodeEnumerated; }
    return _cached_encoder_for_FiveGProSeAuthorizationIndicator(value, elGetter);
}


/* eslint-enable */
