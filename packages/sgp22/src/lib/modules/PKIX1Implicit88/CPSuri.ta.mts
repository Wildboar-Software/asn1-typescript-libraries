/* eslint-disable */
import {
    ASN1Element as _Element,
    IA5String
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary CPSuri
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * CPSuri  ::=  IA5String
 * ```
 */
export
type CPSuri = IA5String; // IA5String

let _cached_decoder_for_CPSuri: $.ASN1Decoder<CPSuri> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) CPSuri
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_CPSuri (el: _Element): CPSuri {
    if (!_cached_decoder_for_CPSuri) { _cached_decoder_for_CPSuri = $._decodeIA5String; }
    return _cached_decoder_for_CPSuri(el);
}

let _cached_encoder_for_CPSuri: $.ASN1Encoder<CPSuri> | null = null;

/**
 * @summary Encodes a(n) CPSuri into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CPSuri, encoded as an ASN.1 Element.
 */
export
function _encode_CPSuri (value: CPSuri, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_CPSuri) { _cached_encoder_for_CPSuri = $._encodeIA5String; }
    return _cached_encoder_for_CPSuri(value, elGetter);
}


/* eslint-enable */
