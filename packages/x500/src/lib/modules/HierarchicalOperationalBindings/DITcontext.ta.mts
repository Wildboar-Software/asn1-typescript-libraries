/* eslint-disable */
import { ASN1Element as _Element } from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import {
    Vertex,
    _decode_Vertex,
    _encode_Vertex,
} from "../HierarchicalOperationalBindings/Vertex.ta.mjs";
/**
 * @summary DITcontext
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * DITcontext  ::=  SEQUENCE OF Vertex
 * ```
 */
export type DITcontext = Vertex[]; // SequenceOfType

let _cached_decoder_for_DITcontext: $.ASN1Decoder<DITcontext> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) DITcontext
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {DITcontext} The decoded data structure.
 */
export function _decode_DITcontext(el: _Element) {
    if (!_cached_decoder_for_DITcontext) {
        _cached_decoder_for_DITcontext = $._decodeSequenceOf<Vertex>(
            () => _decode_Vertex
        );
    }
    return _cached_decoder_for_DITcontext(el);
}

let _cached_encoder_for_DITcontext: $.ASN1Encoder<DITcontext> | null = null;

/**
 * @summary Encodes a(n) DITcontext into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The DITcontext, encoded as an ASN.1 Element.
 */
export function _encode_DITcontext(
    value: DITcontext,
    elGetter: $.ASN1Encoder<DITcontext>
) {
    if (!_cached_encoder_for_DITcontext) {
        _cached_encoder_for_DITcontext = $._encodeSequenceOf<Vertex>(
            () => _encode_Vertex,
            $.DER
        );
    }
    return _cached_encoder_for_DITcontext(value, elGetter);
}


/* eslint-enable */
