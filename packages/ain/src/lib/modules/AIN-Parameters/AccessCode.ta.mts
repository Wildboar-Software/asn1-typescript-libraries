/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { AINDigits, _decode_AINDigits, _encode_AINDigits } from "../AIN-Parameters/AINDigits.ta.mjs";
// export { AINDigits, _decode_AINDigits, _encode_AINDigits } from "../AIN-Parameters/AINDigits.ta.mjs";


/**
 * @summary AccessCode
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * AccessCode  ::=  [1] IMPLICIT AINDigits
 * ```
 */
export
type AccessCode = AINDigits; // DefinedType

let _cached_decoder_for_AccessCode: $.ASN1Decoder<AccessCode> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) AccessCode
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_AccessCode (el: _Element): AccessCode {
    if (!_cached_decoder_for_AccessCode) { _cached_decoder_for_AccessCode = $._decode_implicit<AccessCode>(() => _decode_AINDigits); }
    return _cached_decoder_for_AccessCode(el);
}

let _cached_encoder_for_AccessCode: $.ASN1Encoder<AccessCode> | null = null;

/**
 * @summary Encodes a(n) AccessCode into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AccessCode, encoded as an ASN.1 Element.
 */
export
function _encode_AccessCode (value: AccessCode, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_AccessCode) { _cached_encoder_for_AccessCode = $._encode_implicit(_TagClass.context, 1, () => _encode_AINDigits, $.BER); }
    return _cached_encoder_for_AccessCode(value, elGetter);
}


/* eslint-enable */
