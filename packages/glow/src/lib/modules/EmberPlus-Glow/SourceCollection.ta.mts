/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { Source, _decode_Source, _encode_Source } from "../EmberPlus-Glow/Source.ta.mjs";
// export { Source, _decode_Source, _encode_Source } from "../EmberPlus-Glow/Source.ta.mjs";


/**
 * @summary SourceCollection
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SourceCollection  ::= 
 *     SEQUENCE OF [0] Source
 * ```
 */
export
type SourceCollection = Source[]; // SequenceOfType

let _cached_decoder_for_SourceCollection: $.ASN1Decoder<SourceCollection> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) SourceCollection
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_SourceCollection (el: _Element): SourceCollection {
    if (!_cached_decoder_for_SourceCollection) { _cached_decoder_for_SourceCollection = $._decodeSequenceOf<Source>(() => $._decode_implicit<SourceCollection>(() => _decode_Source)); }
    return _cached_decoder_for_SourceCollection(el);
}

let _cached_encoder_for_SourceCollection: $.ASN1Encoder<SourceCollection> | null = null;

/**
 * @summary Encodes a(n) SourceCollection into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SourceCollection, encoded as an ASN.1 Element.
 */
export
function _encode_SourceCollection (value: SourceCollection, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_SourceCollection) { _cached_encoder_for_SourceCollection = $._encodeSequenceOf<Source>(() => $._encode_implicit(_TagClass.context, 0, () => _encode_Source, $.BER), $.BER); }
    return _cached_encoder_for_SourceCollection(value, elGetter);
}


/* eslint-enable */
