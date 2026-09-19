/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { AINDigits, _decode_AINDigits, _encode_AINDigits } from "../AIN-Parameters/AINDigits.ta.mjs";
// export { AINDigits, _decode_AINDigits, _encode_AINDigits } from "../AIN-Parameters/AINDigits.ta.mjs";


/**
 * @summary RTPReroutingNumber
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * RTPReroutingNumber ::=  [143] IMPLICIT AINDigits
 * ```
 */
export
type RTPReroutingNumber = AINDigits; // DefinedType

let _cached_decoder_for_RTPReroutingNumber: $.ASN1Decoder<RTPReroutingNumber> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) RTPReroutingNumber
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_RTPReroutingNumber (el: _Element): RTPReroutingNumber {
    if (!_cached_decoder_for_RTPReroutingNumber) { _cached_decoder_for_RTPReroutingNumber = $._decode_implicit<RTPReroutingNumber>(() => _decode_AINDigits); }
    return _cached_decoder_for_RTPReroutingNumber(el);
}

let _cached_encoder_for_RTPReroutingNumber: $.ASN1Encoder<RTPReroutingNumber> | null = null;

/**
 * @summary Encodes a(n) RTPReroutingNumber into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The RTPReroutingNumber, encoded as an ASN.1 Element.
 */
export
function _encode_RTPReroutingNumber (value: RTPReroutingNumber, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_RTPReroutingNumber) { _cached_encoder_for_RTPReroutingNumber = $._encode_implicit(_TagClass.context, 143, () => _encode_AINDigits, $.BER); }
    return _cached_encoder_for_RTPReroutingNumber(value, elGetter);
}


/* eslint-enable */
