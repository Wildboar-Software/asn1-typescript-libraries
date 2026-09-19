/* eslint-disable */
import {
    ASN1Element as _Element,
    OCTET_STRING
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary X25Address
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * X25Address  ::=  OCTET STRING (SIZE(1..25))
 * ```
 */
export
type X25Address = OCTET_STRING; // OctetStringType

let _cached_decoder_for_X25Address: $.ASN1Decoder<X25Address> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) X25Address
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_X25Address (el: _Element): X25Address {
    if (!_cached_decoder_for_X25Address) { _cached_decoder_for_X25Address = $._decodeOctetString; }
    return _cached_decoder_for_X25Address(el);
}

let _cached_encoder_for_X25Address: $.ASN1Encoder<X25Address> | null = null;

/**
 * @summary Encodes a(n) X25Address into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The X25Address, encoded as an ASN.1 Element.
 */
export
function _encode_X25Address (value: X25Address, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_X25Address) { _cached_encoder_for_X25Address = $._encodeOctetString; }
    return _cached_encoder_for_X25Address(value, elGetter);
}


/* eslint-enable */
