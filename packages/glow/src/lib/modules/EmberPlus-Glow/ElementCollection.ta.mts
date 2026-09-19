/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { Element, _decode_Element, _encode_Element } from "../EmberPlus-Glow/Element.ta.mjs";
// export { Element, _decode_Element, _encode_Element } from "../EmberPlus-Glow/Element.ta.mjs";


/**
 * @summary ElementCollection
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ElementCollection  ::= 
 *     [APPLICATION 4] IMPLICIT
 *         SEQUENCE OF [0] Element
 * ```
 */
export
type ElementCollection = Element[]; // SequenceOfType

let _cached_decoder_for_ElementCollection: $.ASN1Decoder<ElementCollection> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ElementCollection
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_ElementCollection (el: _Element): ElementCollection {
    if (!_cached_decoder_for_ElementCollection) { _cached_decoder_for_ElementCollection = $._decode_implicit<ElementCollection>(() => $._decodeSequenceOf<Element>(() => $._decode_explicit<ElementCollection>(() => _decode_Element))); }
    return _cached_decoder_for_ElementCollection(el);
}

let _cached_encoder_for_ElementCollection: $.ASN1Encoder<ElementCollection> | null = null;

/**
 * @summary Encodes a(n) ElementCollection into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ElementCollection, encoded as an ASN.1 Element.
 */
export
function _encode_ElementCollection (value: ElementCollection, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_ElementCollection) { _cached_encoder_for_ElementCollection = $._encode_implicit(_TagClass.application, 4, () => $._encodeSequenceOf<Element>(() => $._encode_explicit(_TagClass.context, 0, () => _encode_Element, $.BER), $.BER), $.BER); }
    return _cached_encoder_for_ElementCollection(value, elGetter);
}


/* eslint-enable */
