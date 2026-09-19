/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { AINDigits, _decode_AINDigits, _encode_AINDigits } from "../AIN-Parameters/AINDigits.ta.mjs";
// export { AINDigits, _decode_AINDigits, _encode_AINDigits } from "../AIN-Parameters/AINDigits.ta.mjs";


/**
 * @summary TDTMFDigitString
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * TDTMFDigitString  ::=  [157] IMPLICIT AINDigits
 * ```
 */
export
type TDTMFDigitString = AINDigits; // DefinedType

let _cached_decoder_for_TDTMFDigitString: $.ASN1Decoder<TDTMFDigitString> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) TDTMFDigitString
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_TDTMFDigitString (el: _Element): TDTMFDigitString {
    if (!_cached_decoder_for_TDTMFDigitString) { _cached_decoder_for_TDTMFDigitString = $._decode_implicit<TDTMFDigitString>(() => _decode_AINDigits); }
    return _cached_decoder_for_TDTMFDigitString(el);
}

let _cached_encoder_for_TDTMFDigitString: $.ASN1Encoder<TDTMFDigitString> | null = null;

/**
 * @summary Encodes a(n) TDTMFDigitString into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The TDTMFDigitString, encoded as an ASN.1 Element.
 */
export
function _encode_TDTMFDigitString (value: TDTMFDigitString, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_TDTMFDigitString) { _cached_encoder_for_TDTMFDigitString = $._encode_implicit(_TagClass.context, 157, () => _encode_AINDigits, $.BER); }
    return _cached_encoder_for_TDTMFDigitString(value, elGetter);
}


/* eslint-enable */
