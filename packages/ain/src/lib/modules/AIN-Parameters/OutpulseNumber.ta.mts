/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { AINDigits, _decode_AINDigits, _encode_AINDigits } from "../AIN-Parameters/AINDigits.ta.mjs";
// export { AINDigits, _decode_AINDigits, _encode_AINDigits } from "../AIN-Parameters/AINDigits.ta.mjs";


/**
 * @summary OutpulseNumber
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * OutpulseNumber  ::=  [37] IMPLICIT AINDigits
 * ```
 */
export
type OutpulseNumber = AINDigits; // DefinedType

let _cached_decoder_for_OutpulseNumber: $.ASN1Decoder<OutpulseNumber> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) OutpulseNumber
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_OutpulseNumber (el: _Element): OutpulseNumber {
    if (!_cached_decoder_for_OutpulseNumber) { _cached_decoder_for_OutpulseNumber = $._decode_implicit<OutpulseNumber>(() => _decode_AINDigits); }
    return _cached_decoder_for_OutpulseNumber(el);
}

let _cached_encoder_for_OutpulseNumber: $.ASN1Encoder<OutpulseNumber> | null = null;

/**
 * @summary Encodes a(n) OutpulseNumber into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The OutpulseNumber, encoded as an ASN.1 Element.
 */
export
function _encode_OutpulseNumber (value: OutpulseNumber, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_OutpulseNumber) { _cached_encoder_for_OutpulseNumber = $._encode_implicit(_TagClass.context, 37, () => _encode_AINDigits, $.BER); }
    return _cached_encoder_for_OutpulseNumber(value, elGetter);
}


/* eslint-enable */
