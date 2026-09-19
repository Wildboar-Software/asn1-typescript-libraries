/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { AINDigits, _decode_AINDigits, _encode_AINDigits } from "../AIN-Parameters/AINDigits.ta.mjs";
// export { AINDigits, _decode_AINDigits, _encode_AINDigits } from "../AIN-Parameters/AINDigits.ta.mjs";


/**
 * @summary AMALineNumber
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * AMALineNumber  ::=  [9] IMPLICIT AINDigits
 * ```
 */
export
type AMALineNumber = AINDigits; // DefinedType

let _cached_decoder_for_AMALineNumber: $.ASN1Decoder<AMALineNumber> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) AMALineNumber
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_AMALineNumber (el: _Element): AMALineNumber {
    if (!_cached_decoder_for_AMALineNumber) { _cached_decoder_for_AMALineNumber = $._decode_implicit<AMALineNumber>(() => _decode_AINDigits); }
    return _cached_decoder_for_AMALineNumber(el);
}

let _cached_encoder_for_AMALineNumber: $.ASN1Encoder<AMALineNumber> | null = null;

/**
 * @summary Encodes a(n) AMALineNumber into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AMALineNumber, encoded as an ASN.1 Element.
 */
export
function _encode_AMALineNumber (value: AMALineNumber, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_AMALineNumber) { _cached_encoder_for_AMALineNumber = $._encode_implicit(_TagClass.context, 9, () => _encode_AINDigits, $.BER); }
    return _cached_encoder_for_AMALineNumber(value, elGetter);
}


/* eslint-enable */
