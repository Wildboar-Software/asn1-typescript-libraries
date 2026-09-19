/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { Signal, _decode_Signal, _encode_Signal } from "../EmberPlus-Glow/Signal.ta.mjs";
// export { Signal, _decode_Signal, _encode_Signal } from "../EmberPlus-Glow/Signal.ta.mjs";


/**
 * @summary Source
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * Source  ::= 
 *     [APPLICATION 15] IMPLICIT
 *         Signal
 * ```
 */
export
type Source = Signal; // DefinedType

let _cached_decoder_for_Source: $.ASN1Decoder<Source> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) Source
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_Source (el: _Element): Source {
    if (!_cached_decoder_for_Source) { _cached_decoder_for_Source = $._decode_implicit<Source>(() => _decode_Signal); }
    return _cached_decoder_for_Source(el);
}

let _cached_encoder_for_Source: $.ASN1Encoder<Source> | null = null;

/**
 * @summary Encodes a(n) Source into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Source, encoded as an ASN.1 Element.
 */
export
function _encode_Source (value: Source, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_Source) { _cached_encoder_for_Source = $._encode_implicit(_TagClass.application, 15, () => _encode_Signal, $.BER); }
    return _cached_encoder_for_Source(value, elGetter);
}


/* eslint-enable */
