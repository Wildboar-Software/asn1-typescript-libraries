/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { TupleItemDescription, _decode_TupleItemDescription, _encode_TupleItemDescription } from "../EmberPlus-Glow/TupleItemDescription.ta.mjs";
// export { TupleItemDescription, _decode_TupleItemDescription, _encode_TupleItemDescription } from "../EmberPlus-Glow/TupleItemDescription.ta.mjs";


/**
 * @summary TupleDescription
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * TupleDescription  ::= 
 *     SEQUENCE OF [0] TupleItemDescription
 * ```
 */
export
type TupleDescription = TupleItemDescription[]; // SequenceOfType

let _cached_decoder_for_TupleDescription: $.ASN1Decoder<TupleDescription> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) TupleDescription
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_TupleDescription (el: _Element): TupleDescription {
    if (!_cached_decoder_for_TupleDescription) { _cached_decoder_for_TupleDescription = $._decodeSequenceOf<TupleItemDescription>(() => $._decode_implicit<TupleDescription>(() => _decode_TupleItemDescription)); }
    return _cached_decoder_for_TupleDescription(el);
}

let _cached_encoder_for_TupleDescription: $.ASN1Encoder<TupleDescription> | null = null;

/**
 * @summary Encodes a(n) TupleDescription into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The TupleDescription, encoded as an ASN.1 Element.
 */
export
function _encode_TupleDescription (value: TupleDescription, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_TupleDescription) { _cached_encoder_for_TupleDescription = $._encodeSequenceOf<TupleItemDescription>(() => $._encode_implicit(_TagClass.context, 0, () => _encode_TupleItemDescription, $.BER), $.BER); }
    return _cached_encoder_for_TupleDescription(value, elGetter);
}


/* eslint-enable */
