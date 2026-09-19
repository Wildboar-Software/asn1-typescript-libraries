/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { AINDigits, _decode_AINDigits, _encode_AINDigits } from "../AIN-Parameters/AINDigits.ta.mjs";
// export { AINDigits, _decode_AINDigits, _encode_AINDigits } from "../AIN-Parameters/AINDigits.ta.mjs";


/**
 * @summary AMAAlternateBillingNumber
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * AMAAlternateBillingNumber  ::=  [6] IMPLICIT AINDigits
 * ```
 */
export
type AMAAlternateBillingNumber = AINDigits; // DefinedType

let _cached_decoder_for_AMAAlternateBillingNumber: $.ASN1Decoder<AMAAlternateBillingNumber> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) AMAAlternateBillingNumber
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_AMAAlternateBillingNumber (el: _Element): AMAAlternateBillingNumber {
    if (!_cached_decoder_for_AMAAlternateBillingNumber) { _cached_decoder_for_AMAAlternateBillingNumber = $._decode_implicit<AMAAlternateBillingNumber>(() => _decode_AINDigits); }
    return _cached_decoder_for_AMAAlternateBillingNumber(el);
}

let _cached_encoder_for_AMAAlternateBillingNumber: $.ASN1Encoder<AMAAlternateBillingNumber> | null = null;

/**
 * @summary Encodes a(n) AMAAlternateBillingNumber into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AMAAlternateBillingNumber, encoded as an ASN.1 Element.
 */
export
function _encode_AMAAlternateBillingNumber (value: AMAAlternateBillingNumber, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_AMAAlternateBillingNumber) { _cached_encoder_for_AMAAlternateBillingNumber = $._encode_implicit(_TagClass.context, 6, () => _encode_AINDigits, $.BER); }
    return _cached_encoder_for_AMAAlternateBillingNumber(value, elGetter);
}


/* eslint-enable */
