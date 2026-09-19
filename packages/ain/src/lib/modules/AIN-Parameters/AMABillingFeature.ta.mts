/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { AINDigits, _decode_AINDigits, _encode_AINDigits } from "../AIN-Parameters/AINDigits.ta.mjs";
// export { AINDigits, _decode_AINDigits, _encode_AINDigits } from "../AIN-Parameters/AINDigits.ta.mjs";


/**
 * @summary AMABillingFeature
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * AMABillingFeature  ::=  [88] IMPLICIT AINDigits
 * ```
 */
export
type AMABillingFeature = AINDigits; // DefinedType

let _cached_decoder_for_AMABillingFeature: $.ASN1Decoder<AMABillingFeature> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) AMABillingFeature
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_AMABillingFeature (el: _Element): AMABillingFeature {
    if (!_cached_decoder_for_AMABillingFeature) { _cached_decoder_for_AMABillingFeature = $._decode_implicit<AMABillingFeature>(() => _decode_AINDigits); }
    return _cached_decoder_for_AMABillingFeature(el);
}

let _cached_encoder_for_AMABillingFeature: $.ASN1Encoder<AMABillingFeature> | null = null;

/**
 * @summary Encodes a(n) AMABillingFeature into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AMABillingFeature, encoded as an ASN.1 Element.
 */
export
function _encode_AMABillingFeature (value: AMABillingFeature, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_AMABillingFeature) { _cached_encoder_for_AMABillingFeature = $._encode_implicit(_TagClass.context, 88, () => _encode_AINDigits, $.BER); }
    return _cached_encoder_for_AMABillingFeature(value, elGetter);
}


/* eslint-enable */
