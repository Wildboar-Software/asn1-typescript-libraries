/* eslint-disable */
import {
    ASN1Element as _Element
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary AnyIPAddress
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * AnyIPAddress  ::=  ENUMERATED
 * {
 *     any(1)
 * }
 * ```
 * 
 * @enum {number}
 */
export
enum _enum_for_AnyIPAddress {
    any_ = 1,
}

/**
 * @summary AnyIPAddress
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * AnyIPAddress  ::=  ENUMERATED
 * {
 *     any(1)
 * }
 * ```
 * 
 * @enum {number}
 */
export
type AnyIPAddress = _enum_for_AnyIPAddress;

/**
 * @summary AnyIPAddress
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * AnyIPAddress  ::=  ENUMERATED
 * {
 *     any(1)
 * }
 * ```
 * 
 * @enum {number}
 */
export
const AnyIPAddress = _enum_for_AnyIPAddress;

/**
 * @summary AnyIPAddress_any_
 * @constant
 * @type {number}
 */
export
const AnyIPAddress_any_: AnyIPAddress = AnyIPAddress.any_; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary any_
 * @constant
 * @type {number}
 */
export
const any_: AnyIPAddress = AnyIPAddress.any_; /* SHORT_NAMED_ENUMERATED_VALUE */

let _cached_decoder_for_AnyIPAddress: $.ASN1Decoder<AnyIPAddress> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) AnyIPAddress
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_AnyIPAddress (el: _Element): AnyIPAddress {
    if (!_cached_decoder_for_AnyIPAddress) { _cached_decoder_for_AnyIPAddress = $._decodeEnumerated; }
    return _cached_decoder_for_AnyIPAddress(el);
}

let _cached_encoder_for_AnyIPAddress: $.ASN1Encoder<AnyIPAddress> | null = null;

/**
 * @summary Encodes a(n) AnyIPAddress into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AnyIPAddress, encoded as an ASN.1 Element.
 */
export
function _encode_AnyIPAddress (value: AnyIPAddress, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_AnyIPAddress) { _cached_encoder_for_AnyIPAddress = $._encodeEnumerated; }
    return _cached_encoder_for_AnyIPAddress(value, elGetter);
}


/* eslint-enable */
