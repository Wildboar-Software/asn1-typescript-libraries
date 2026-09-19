/* eslint-disable */
import {
    ASN1Element as _Element,
    NumericString
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary X121Address
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * X121Address  ::=  NumericString (SIZE (1..ub-x121-address-length))
 * ```
 */
export
type X121Address = NumericString; // NumericString

let _cached_decoder_for_X121Address: $.ASN1Decoder<X121Address> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) X121Address
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_X121Address (el: _Element): X121Address {
    if (!_cached_decoder_for_X121Address) { _cached_decoder_for_X121Address = $._decodeNumericString; }
    return _cached_decoder_for_X121Address(el);
}

let _cached_encoder_for_X121Address: $.ASN1Encoder<X121Address> | null = null;

/**
 * @summary Encodes a(n) X121Address into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The X121Address, encoded as an ASN.1 Element.
 */
export
function _encode_X121Address (value: X121Address, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_X121Address) { _cached_encoder_for_X121Address = $._encodeNumericString; }
    return _cached_encoder_for_X121Address(value, elGetter);
}


/* eslint-enable */
