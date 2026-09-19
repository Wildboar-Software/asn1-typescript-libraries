/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { AINDigits, _decode_AINDigits, _encode_AINDigits } from "../AIN-Parameters/AINDigits.ta.mjs";
// export { AINDigits, _decode_AINDigits, _encode_AINDigits } from "../AIN-Parameters/AINDigits.ta.mjs";


/**
 * @summary ODTMFDigitsString
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ODTMFDigitsString  ::=  [154] IMPLICIT AINDigits
 * ```
 */
export
type ODTMFDigitsString = AINDigits; // DefinedType

let _cached_decoder_for_ODTMFDigitsString: $.ASN1Decoder<ODTMFDigitsString> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ODTMFDigitsString
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_ODTMFDigitsString (el: _Element): ODTMFDigitsString {
    if (!_cached_decoder_for_ODTMFDigitsString) { _cached_decoder_for_ODTMFDigitsString = $._decode_implicit<ODTMFDigitsString>(() => _decode_AINDigits); }
    return _cached_decoder_for_ODTMFDigitsString(el);
}

let _cached_encoder_for_ODTMFDigitsString: $.ASN1Encoder<ODTMFDigitsString> | null = null;

/**
 * @summary Encodes a(n) ODTMFDigitsString into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ODTMFDigitsString, encoded as an ASN.1 Element.
 */
export
function _encode_ODTMFDigitsString (value: ODTMFDigitsString, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_ODTMFDigitsString) { _cached_encoder_for_ODTMFDigitsString = $._encode_implicit(_TagClass.context, 154, () => _encode_AINDigits, $.BER); }
    return _cached_encoder_for_ODTMFDigitsString(value, elGetter);
}


/* eslint-enable */
