/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { StringIntegerPair, _decode_StringIntegerPair, _encode_StringIntegerPair } from "../EmberPlus-Glow/StringIntegerPair.ta.mjs";
// export { StringIntegerPair, _decode_StringIntegerPair, _encode_StringIntegerPair } from "../EmberPlus-Glow/StringIntegerPair.ta.mjs";


/**
 * @summary StringIntegerCollection
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * StringIntegerCollection  ::= 
 *     [APPLICATION 8] IMPLICIT
 *         SEQUENCE OF [0] StringIntegerPair
 * ```
 */
export
type StringIntegerCollection = StringIntegerPair[]; // SequenceOfType

let _cached_decoder_for_StringIntegerCollection: $.ASN1Decoder<StringIntegerCollection> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) StringIntegerCollection
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_StringIntegerCollection (el: _Element): StringIntegerCollection {
    if (!_cached_decoder_for_StringIntegerCollection) { _cached_decoder_for_StringIntegerCollection = $._decode_implicit<StringIntegerCollection>(() => $._decodeSequenceOf<StringIntegerPair>(() => $._decode_implicit<StringIntegerCollection>(() => _decode_StringIntegerPair))); }
    return _cached_decoder_for_StringIntegerCollection(el);
}

let _cached_encoder_for_StringIntegerCollection: $.ASN1Encoder<StringIntegerCollection> | null = null;

/**
 * @summary Encodes a(n) StringIntegerCollection into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The StringIntegerCollection, encoded as an ASN.1 Element.
 */
export
function _encode_StringIntegerCollection (value: StringIntegerCollection, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_StringIntegerCollection) { _cached_encoder_for_StringIntegerCollection = $._encode_implicit(_TagClass.application, 8, () => $._encodeSequenceOf<StringIntegerPair>(() => $._encode_implicit(_TagClass.context, 0, () => _encode_StringIntegerPair, $.BER), $.BER), $.BER); }
    return _cached_encoder_for_StringIntegerCollection(value, elGetter);
}


/* eslint-enable */
