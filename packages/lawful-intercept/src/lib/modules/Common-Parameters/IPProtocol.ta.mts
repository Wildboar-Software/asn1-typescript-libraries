/* eslint-disable */
import {
    ASN1Element as _Element,
    INTEGER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary IPProtocol
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * IPProtocol  ::=  INTEGER (0..255)
 * ```
 */
export
type IPProtocol = INTEGER;

let _cached_decoder_for_IPProtocol: $.ASN1Decoder<IPProtocol> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) IPProtocol
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_IPProtocol (el: _Element): IPProtocol {
    if (!_cached_decoder_for_IPProtocol) { _cached_decoder_for_IPProtocol = $._decodeInteger; }
    return _cached_decoder_for_IPProtocol(el);
}

let _cached_encoder_for_IPProtocol: $.ASN1Encoder<IPProtocol> | null = null;

/**
 * @summary Encodes a(n) IPProtocol into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The IPProtocol, encoded as an ASN.1 Element.
 */
export
function _encode_IPProtocol (value: IPProtocol, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_IPProtocol) { _cached_encoder_for_IPProtocol = $._encodeInteger; }
    return _cached_encoder_for_IPProtocol(value, elGetter);
}


/* eslint-enable */
