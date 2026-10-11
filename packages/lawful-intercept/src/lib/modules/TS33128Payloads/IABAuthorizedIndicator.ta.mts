/* eslint-disable */
import {
    ASN1Element as _Element
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary IABAuthorizedIndicator
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * IABAuthorizedIndicator  ::=  ENUMERATED
 * {
 *     authorized(1),
 *     notAuthorized(2)
 * }
 * ```
 * 
 * @enum {number}
 */
export
enum _enum_for_IABAuthorizedIndicator {
    authorized = 1,
    notAuthorized = 2,
}

/**
 * @summary IABAuthorizedIndicator
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * IABAuthorizedIndicator  ::=  ENUMERATED
 * {
 *     authorized(1),
 *     notAuthorized(2)
 * }
 * ```
 * 
 * @enum {number}
 */
export
type IABAuthorizedIndicator = _enum_for_IABAuthorizedIndicator;

/**
 * @summary IABAuthorizedIndicator
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * IABAuthorizedIndicator  ::=  ENUMERATED
 * {
 *     authorized(1),
 *     notAuthorized(2)
 * }
 * ```
 * 
 * @enum {number}
 */
export
const IABAuthorizedIndicator = _enum_for_IABAuthorizedIndicator;

/**
 * @summary IABAuthorizedIndicator_authorized
 * @constant
 * @type {number}
 */
export
const IABAuthorizedIndicator_authorized: IABAuthorizedIndicator = IABAuthorizedIndicator.authorized; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary authorized
 * @constant
 * @type {number}
 */
export
const authorized: IABAuthorizedIndicator = IABAuthorizedIndicator.authorized; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary IABAuthorizedIndicator_notAuthorized
 * @constant
 * @type {number}
 */
export
const IABAuthorizedIndicator_notAuthorized: IABAuthorizedIndicator = IABAuthorizedIndicator.notAuthorized; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary notAuthorized
 * @constant
 * @type {number}
 */
export
const notAuthorized: IABAuthorizedIndicator = IABAuthorizedIndicator.notAuthorized; /* SHORT_NAMED_ENUMERATED_VALUE */

let _cached_decoder_for_IABAuthorizedIndicator: $.ASN1Decoder<IABAuthorizedIndicator> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) IABAuthorizedIndicator
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_IABAuthorizedIndicator (el: _Element): IABAuthorizedIndicator {
    if (!_cached_decoder_for_IABAuthorizedIndicator) { _cached_decoder_for_IABAuthorizedIndicator = $._decodeEnumerated; }
    return _cached_decoder_for_IABAuthorizedIndicator(el);
}

let _cached_encoder_for_IABAuthorizedIndicator: $.ASN1Encoder<IABAuthorizedIndicator> | null = null;

/**
 * @summary Encodes a(n) IABAuthorizedIndicator into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The IABAuthorizedIndicator, encoded as an ASN.1 Element.
 */
export
function _encode_IABAuthorizedIndicator (value: IABAuthorizedIndicator, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_IABAuthorizedIndicator) { _cached_encoder_for_IABAuthorizedIndicator = $._encodeEnumerated; }
    return _cached_encoder_for_IABAuthorizedIndicator(value, elGetter);
}


/* eslint-enable */
