/* eslint-disable */
import {
    ASN1Element as _Element
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary MobileIABAuthorizedIndicator
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * MobileIABAuthorizedIndicator  ::=  ENUMERATED
 * {
 *     authorized(1),
 *     notAuthorized(2)
 * }
 * ```
 * 
 * @enum {number}
 */
export
enum _enum_for_MobileIABAuthorizedIndicator {
    authorized = 1,
    notAuthorized = 2,
}

/**
 * @summary MobileIABAuthorizedIndicator
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * MobileIABAuthorizedIndicator  ::=  ENUMERATED
 * {
 *     authorized(1),
 *     notAuthorized(2)
 * }
 * ```
 * 
 * @enum {number}
 */
export
type MobileIABAuthorizedIndicator = _enum_for_MobileIABAuthorizedIndicator;

/**
 * @summary MobileIABAuthorizedIndicator
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * MobileIABAuthorizedIndicator  ::=  ENUMERATED
 * {
 *     authorized(1),
 *     notAuthorized(2)
 * }
 * ```
 * 
 * @enum {number}
 */
export
const MobileIABAuthorizedIndicator = _enum_for_MobileIABAuthorizedIndicator;

/**
 * @summary MobileIABAuthorizedIndicator_authorized
 * @constant
 * @type {number}
 */
export
const MobileIABAuthorizedIndicator_authorized: MobileIABAuthorizedIndicator = MobileIABAuthorizedIndicator.authorized; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary authorized
 * @constant
 * @type {number}
 */
export
const authorized: MobileIABAuthorizedIndicator = MobileIABAuthorizedIndicator.authorized; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary MobileIABAuthorizedIndicator_notAuthorized
 * @constant
 * @type {number}
 */
export
const MobileIABAuthorizedIndicator_notAuthorized: MobileIABAuthorizedIndicator = MobileIABAuthorizedIndicator.notAuthorized; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary notAuthorized
 * @constant
 * @type {number}
 */
export
const notAuthorized: MobileIABAuthorizedIndicator = MobileIABAuthorizedIndicator.notAuthorized; /* SHORT_NAMED_ENUMERATED_VALUE */

let _cached_decoder_for_MobileIABAuthorizedIndicator: $.ASN1Decoder<MobileIABAuthorizedIndicator> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) MobileIABAuthorizedIndicator
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_MobileIABAuthorizedIndicator (el: _Element): MobileIABAuthorizedIndicator {
    if (!_cached_decoder_for_MobileIABAuthorizedIndicator) { _cached_decoder_for_MobileIABAuthorizedIndicator = $._decodeEnumerated; }
    return _cached_decoder_for_MobileIABAuthorizedIndicator(el);
}

let _cached_encoder_for_MobileIABAuthorizedIndicator: $.ASN1Encoder<MobileIABAuthorizedIndicator> | null = null;

/**
 * @summary Encodes a(n) MobileIABAuthorizedIndicator into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The MobileIABAuthorizedIndicator, encoded as an ASN.1 Element.
 */
export
function _encode_MobileIABAuthorizedIndicator (value: MobileIABAuthorizedIndicator, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_MobileIABAuthorizedIndicator) { _cached_encoder_for_MobileIABAuthorizedIndicator = $._encodeEnumerated; }
    return _cached_encoder_for_MobileIABAuthorizedIndicator(value, elGetter);
}


/* eslint-enable */
