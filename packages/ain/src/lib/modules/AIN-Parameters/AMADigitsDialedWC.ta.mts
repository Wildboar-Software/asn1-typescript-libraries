/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { AINDigits, _decode_AINDigits, _encode_AINDigits } from "../AIN-Parameters/AINDigits.ta.mjs";
// export { AINDigits, _decode_AINDigits, _encode_AINDigits } from "../AIN-Parameters/AINDigits.ta.mjs";


/**
 * @summary AMADigitsDialedWC
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * AMADigitsDialedWC  ::=  [8] IMPLICIT AINDigits
 * ```
 */
export
type AMADigitsDialedWC = AINDigits; // DefinedType

let _cached_decoder_for_AMADigitsDialedWC: $.ASN1Decoder<AMADigitsDialedWC> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) AMADigitsDialedWC
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_AMADigitsDialedWC (el: _Element): AMADigitsDialedWC {
    if (!_cached_decoder_for_AMADigitsDialedWC) { _cached_decoder_for_AMADigitsDialedWC = $._decode_implicit<AMADigitsDialedWC>(() => _decode_AINDigits); }
    return _cached_decoder_for_AMADigitsDialedWC(el);
}

let _cached_encoder_for_AMADigitsDialedWC: $.ASN1Encoder<AMADigitsDialedWC> | null = null;

/**
 * @summary Encodes a(n) AMADigitsDialedWC into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AMADigitsDialedWC, encoded as an ASN.1 Element.
 */
export
function _encode_AMADigitsDialedWC (value: AMADigitsDialedWC, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_AMADigitsDialedWC) { _cached_encoder_for_AMADigitsDialedWC = $._encode_implicit(_TagClass.context, 8, () => _encode_AINDigits, $.BER); }
    return _cached_encoder_for_AMADigitsDialedWC(value, elGetter);
}


/* eslint-enable */
