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
 * @summary GraphicString64
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * GraphicString64  ::=  GraphicStringBase(SIZE (0..64))
 * ```
 */
export
type GraphicString64 = GraphicStringBase; // DefinedType

let _cached_decoder_for_GraphicString64: $.ASN1Decoder<GraphicString64> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) GraphicString64
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_GraphicString64 (el: _Element): GraphicString64 {
    if (!_cached_decoder_for_GraphicString64) { _cached_decoder_for_GraphicString64 = _decode_GraphicStringBase; }
    const value = _cached_decoder_for_GraphicString64(el);
    if (value.length > 64) {
        throw new ASN1SizeError("GraphicString64 violates SIZE constraint");
    }
    return value;
}

let _cached_encoder_for_GraphicString64: $.ASN1Encoder<GraphicString64> | null = null;

/**
 * @summary Encodes a(n) GraphicString64 into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The GraphicString64, encoded as an ASN.1 Element.
 */
export
function _encode_GraphicString64 (value: GraphicString64, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_GraphicString64) { _cached_encoder_for_GraphicString64 = _encode_GraphicStringBase; }
    return _cached_encoder_for_GraphicString64(value, elGetter);
}


/* eslint-enable */
