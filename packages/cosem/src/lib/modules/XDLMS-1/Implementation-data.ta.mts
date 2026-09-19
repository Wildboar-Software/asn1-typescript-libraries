/* eslint-disable */
import {
    ASN1Element as _Element,
    GraphicString
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary Implementation_data
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * Implementation-data  ::=  GraphicString
 * ```
 */
export
type Implementation_data = GraphicString; // GraphicString

let _cached_decoder_for_Implementation_data: $.ASN1Decoder<Implementation_data> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) Implementation_data
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_Implementation_data (el: _Element): Implementation_data {
    if (!_cached_decoder_for_Implementation_data) { _cached_decoder_for_Implementation_data = $._decodeGraphicString; }
    return _cached_decoder_for_Implementation_data(el);
}

let _cached_encoder_for_Implementation_data: $.ASN1Encoder<Implementation_data> | null = null;

/**
 * @summary Encodes a(n) Implementation_data into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Implementation_data, encoded as an ASN.1 Element.
 */
export
function _encode_Implementation_data (value: Implementation_data, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_Implementation_data) { _cached_encoder_for_Implementation_data = $._encodeGraphicString; }
    return _cached_encoder_for_Implementation_data(value, elGetter);
}


/* eslint-enable */
