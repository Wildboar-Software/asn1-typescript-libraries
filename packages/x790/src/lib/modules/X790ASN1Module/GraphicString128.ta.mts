/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1SizeError,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import {
    GraphicStringBase,
    _decode_GraphicStringBase,
    _encode_GraphicStringBase,
} from "../X790ASN1Module/GraphicStringBase.ta.mjs";



/**
 * @summary GraphicString128
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * GraphicString128  ::=  GraphicStringBase(SIZE (0..128))
 * ```
 */
export
type GraphicString128 = GraphicStringBase; // DefinedType

let _cached_decoder_for_GraphicString128: $.ASN1Decoder<GraphicString128> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) GraphicString128
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_GraphicString128 (el: _Element): GraphicString128 {
    if (!_cached_decoder_for_GraphicString128) { _cached_decoder_for_GraphicString128 = _decode_GraphicStringBase; }
    const value = _cached_decoder_for_GraphicString128(el);
    if (value.length > 128) {
        throw new ASN1SizeError("GraphicString128 violates SIZE constraint");
    }
    return value;
}

let _cached_encoder_for_GraphicString128: $.ASN1Encoder<GraphicString128> | null = null;

/**
 * @summary Encodes a(n) GraphicString128 into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The GraphicString128, encoded as an ASN.1 Element.
 */
export
function _encode_GraphicString128 (value: GraphicString128, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_GraphicString128) { _cached_encoder_for_GraphicString128 = _encode_GraphicStringBase; }
    return _cached_encoder_for_GraphicString128(value, elGetter);
}


/* eslint-enable */
