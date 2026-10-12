/* eslint-disable */
import {
    ASN1Element as _Element,
    OCTET_STRING
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary IPv6Address
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * IPv6Address  ::=  OCTET STRING (SIZE(16))
 * ```
 */
export
type IPv6Address = OCTET_STRING; // OctetStringType

let _cached_decoder_for_IPv6Address: $.ASN1Decoder<IPv6Address> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) IPv6Address
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_IPv6Address (el: _Element): IPv6Address {
    if (!_cached_decoder_for_IPv6Address) { _cached_decoder_for_IPv6Address = $._decodeOctetString; }
    return _cached_decoder_for_IPv6Address(el);
}

let _cached_encoder_for_IPv6Address: $.ASN1Encoder<IPv6Address> | null = null;

/**
 * @summary Encodes a(n) IPv6Address into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The IPv6Address, encoded as an ASN.1 Element.
 */
export
function _encode_IPv6Address (value: IPv6Address, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_IPv6Address) { _cached_encoder_for_IPv6Address = $._encodeOctetString; }
    return _cached_encoder_for_IPv6Address(value, elGetter);
}


/* eslint-enable */
