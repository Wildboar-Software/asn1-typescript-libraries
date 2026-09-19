/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { AINDigits, _decode_AINDigits, _encode_AINDigits } from "../AIN-Parameters/AINDigits.ta.mjs";
// export { AINDigits, _decode_AINDigits, _encode_AINDigits } from "../AIN-Parameters/AINDigits.ta.mjs";


/**
 * @summary DTMFDigitsDetected
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * DTMFDigitsDetected  ::=  [153] IMPLICIT AINDigits
 * ```
 */
export
type DTMFDigitsDetected = AINDigits; // DefinedType

let _cached_decoder_for_DTMFDigitsDetected: $.ASN1Decoder<DTMFDigitsDetected> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) DTMFDigitsDetected
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_DTMFDigitsDetected (el: _Element): DTMFDigitsDetected {
    if (!_cached_decoder_for_DTMFDigitsDetected) { _cached_decoder_for_DTMFDigitsDetected = $._decode_implicit<DTMFDigitsDetected>(() => _decode_AINDigits); }
    return _cached_decoder_for_DTMFDigitsDetected(el);
}

let _cached_encoder_for_DTMFDigitsDetected: $.ASN1Encoder<DTMFDigitsDetected> | null = null;

/**
 * @summary Encodes a(n) DTMFDigitsDetected into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The DTMFDigitsDetected, encoded as an ASN.1 Element.
 */
export
function _encode_DTMFDigitsDetected (value: DTMFDigitsDetected, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_DTMFDigitsDetected) { _cached_encoder_for_DTMFDigitsDetected = $._encode_implicit(_TagClass.context, 153, () => _encode_AINDigits, $.BER); }
    return _cached_encoder_for_DTMFDigitsDetected(value, elGetter);
}


/* eslint-enable */
