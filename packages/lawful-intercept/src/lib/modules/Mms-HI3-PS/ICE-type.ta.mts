/* eslint-disable */
import {
    ASN1Element as _Element,
    ENUMERATED
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



export
enum _enum_for_ICE_type {
    mMSC = 1,
    mMSProxyRelay = 2,
}

/**
 * @summary ICE_type
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ICE-type  ::=  ENUMERATED
 * {
 *     mMSC (1),
 *     mMSProxyRelay    (2),
 *     ...
 * }
 * ```
 * 
 * @enum {number}
 */
export
type ICE_type = _enum_for_ICE_type | ENUMERATED;

/**
 * @summary ICE_type_mMSC
 * @constant
 * @type {number}
 */
export
const ICE_type_mMSC: ICE_type = 1; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary mMSC
 * @constant
 * @type {number}
 */
export
const mMSC: ICE_type = ICE_type_mMSC; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ICE_type_mMSProxyRelay
 * @constant
 * @type {number}
 */
export
const ICE_type_mMSProxyRelay: ICE_type = 2; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary mMSProxyRelay
 * @constant
 * @type {number}
 */
export
const mMSProxyRelay: ICE_type = ICE_type_mMSProxyRelay; /* SHORT_NAMED_ENUMERATED_VALUE */

let _cached_decoder_for_ICE_type: $.ASN1Decoder<ICE_type> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ICE_type
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_ICE_type (el: _Element): ICE_type {
    if (!_cached_decoder_for_ICE_type) { _cached_decoder_for_ICE_type = $._decodeEnumerated; }
    return _cached_decoder_for_ICE_type(el);
}

let _cached_encoder_for_ICE_type: $.ASN1Encoder<ICE_type> | null = null;

/**
 * @summary Encodes a(n) ICE_type into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ICE_type, encoded as an ASN.1 Element.
 */
export
function _encode_ICE_type (value: ICE_type, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_ICE_type) { _cached_encoder_for_ICE_type = $._encodeEnumerated; }
    return _cached_encoder_for_ICE_type(value, elGetter);
}


/* eslint-enable */
