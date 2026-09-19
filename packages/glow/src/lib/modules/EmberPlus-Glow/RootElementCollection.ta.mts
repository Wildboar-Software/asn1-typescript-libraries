/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { RootElement, _decode_RootElement, _encode_RootElement } from "../EmberPlus-Glow/RootElement.ta.mjs";
// export { RootElement, _decode_RootElement, _encode_RootElement } from "../EmberPlus-Glow/RootElement.ta.mjs";


/**
 * @summary RootElementCollection
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * RootElementCollection  ::= 
 *     [APPLICATION 11] IMPLICIT
 *         SEQUENCE OF [0] RootElement
 * ```
 */
export
type RootElementCollection = RootElement[]; // SequenceOfType

let _cached_decoder_for_RootElementCollection: $.ASN1Decoder<RootElementCollection> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) RootElementCollection
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_RootElementCollection (el: _Element): RootElementCollection {
    if (!_cached_decoder_for_RootElementCollection) { _cached_decoder_for_RootElementCollection = $._decode_implicit<RootElementCollection>(() => $._decodeSequenceOf<RootElement>(() => $._decode_explicit<RootElementCollection>(() => _decode_RootElement))); }
    return _cached_decoder_for_RootElementCollection(el);
}

let _cached_encoder_for_RootElementCollection: $.ASN1Encoder<RootElementCollection> | null = null;

/**
 * @summary Encodes a(n) RootElementCollection into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The RootElementCollection, encoded as an ASN.1 Element.
 */
export
function _encode_RootElementCollection (value: RootElementCollection, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_RootElementCollection) { _cached_encoder_for_RootElementCollection = $._encode_implicit(_TagClass.application, 11, () => $._encodeSequenceOf<RootElement>(() => $._encode_explicit(_TagClass.context, 0, () => _encode_RootElement, $.BER), $.BER), $.BER); }
    return _cached_encoder_for_RootElementCollection(value, elGetter);
}


/* eslint-enable */
