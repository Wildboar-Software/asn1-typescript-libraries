/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { Target, _decode_Target, _encode_Target } from "../EmberPlus-Glow/Target.ta.mjs";
// export { Target, _decode_Target, _encode_Target } from "../EmberPlus-Glow/Target.ta.mjs";


/**
 * @summary TargetCollection
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * TargetCollection  ::= 
 *     SEQUENCE OF [0] Target
 * ```
 */
export
type TargetCollection = Target[]; // SequenceOfType

let _cached_decoder_for_TargetCollection: $.ASN1Decoder<TargetCollection> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) TargetCollection
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_TargetCollection (el: _Element): TargetCollection {
    if (!_cached_decoder_for_TargetCollection) { _cached_decoder_for_TargetCollection = $._decodeSequenceOf<Target>(() => $._decode_implicit<TargetCollection>(() => _decode_Target)); }
    return _cached_decoder_for_TargetCollection(el);
}

let _cached_encoder_for_TargetCollection: $.ASN1Encoder<TargetCollection> | null = null;

/**
 * @summary Encodes a(n) TargetCollection into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The TargetCollection, encoded as an ASN.1 Element.
 */
export
function _encode_TargetCollection (value: TargetCollection, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_TargetCollection) { _cached_encoder_for_TargetCollection = $._encodeSequenceOf<Target>(() => $._encode_implicit(_TagClass.context, 0, () => _encode_Target, $.BER), $.BER); }
    return _cached_encoder_for_TargetCollection(value, elGetter);
}


/* eslint-enable */
