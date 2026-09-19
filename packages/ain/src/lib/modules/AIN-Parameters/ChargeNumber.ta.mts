/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { AINDigits, _decode_AINDigits, _encode_AINDigits } from "../AIN-Parameters/AINDigits.ta.mjs";
// export { AINDigits, _decode_AINDigits, _encode_AINDigits } from "../AIN-Parameters/AINDigits.ta.mjs";


/**
 * @summary ChargeNumber
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ChargeNumber  ::=  [19] IMPLICIT AINDigits
 * ```
 */
export
type ChargeNumber = AINDigits; // DefinedType

let _cached_decoder_for_ChargeNumber: $.ASN1Decoder<ChargeNumber> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ChargeNumber
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_ChargeNumber (el: _Element): ChargeNumber {
    if (!_cached_decoder_for_ChargeNumber) { _cached_decoder_for_ChargeNumber = $._decode_implicit<ChargeNumber>(() => _decode_AINDigits); }
    return _cached_decoder_for_ChargeNumber(el);
}

let _cached_encoder_for_ChargeNumber: $.ASN1Encoder<ChargeNumber> | null = null;

/**
 * @summary Encodes a(n) ChargeNumber into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ChargeNumber, encoded as an ASN.1 Element.
 */
export
function _encode_ChargeNumber (value: ChargeNumber, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_ChargeNumber) { _cached_encoder_for_ChargeNumber = $._encode_implicit(_TagClass.context, 19, () => _encode_AINDigits, $.BER); }
    return _cached_encoder_for_ChargeNumber(value, elGetter);
}


/* eslint-enable */
