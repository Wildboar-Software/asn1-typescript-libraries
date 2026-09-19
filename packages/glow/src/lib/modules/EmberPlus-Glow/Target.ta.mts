/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { Signal, _decode_Signal, _encode_Signal } from "../EmberPlus-Glow/Signal.ta.mjs";
// export { Signal, _decode_Signal, _encode_Signal } from "../EmberPlus-Glow/Signal.ta.mjs";


/**
 * @summary Target
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * Target  ::= 
 *     [APPLICATION 14] IMPLICIT
 *         Signal
 * ```
 */
export
type Target = Signal; // DefinedType

let _cached_decoder_for_Target: $.ASN1Decoder<Target> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) Target
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_Target (el: _Element): Target {
    if (!_cached_decoder_for_Target) { _cached_decoder_for_Target = $._decode_implicit<Target>(() => _decode_Signal); }
    return _cached_decoder_for_Target(el);
}

let _cached_encoder_for_Target: $.ASN1Encoder<Target> | null = null;

/**
 * @summary Encodes a(n) Target into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Target, encoded as an ASN.1 Element.
 */
export
function _encode_Target (value: Target, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_Target) { _cached_encoder_for_Target = $._encode_implicit(_TagClass.application, 14, () => _encode_Signal, $.BER); }
    return _cached_encoder_for_Target(value, elGetter);
}


/* eslint-enable */
