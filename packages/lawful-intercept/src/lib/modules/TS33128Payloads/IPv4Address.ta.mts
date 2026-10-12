/* eslint-disable */
import {
    ASN1Element as _Element,
    OCTET_STRING
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary IPv4Address
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * IPv4Address  ::=  OCTET STRING (SIZE(4))
 * ```
 */
export
type IPv4Address = OCTET_STRING; // OctetStringType

let _cached_decoder_for_IPv4Address: $.ASN1Decoder<IPv4Address> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) IPv4Address
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_IPv4Address (el: _Element): IPv4Address {
    if (!_cached_decoder_for_IPv4Address) { _cached_decoder_for_IPv4Address = $._decodeOctetString; }
    return _cached_decoder_for_IPv4Address(el);
}

let _cached_encoder_for_IPv4Address: $.ASN1Encoder<IPv4Address> | null = null;

/**
 * @summary Encodes a(n) IPv4Address into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The IPv4Address, encoded as an ASN.1 Element.
 */
export
function _encode_IPv4Address (value: IPv4Address, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_IPv4Address) { _cached_encoder_for_IPv4Address = $._encodeOctetString; }
    return _cached_encoder_for_IPv4Address(value, elGetter);
}


/* eslint-enable */
