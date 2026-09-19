/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { AINDigits, _decode_AINDigits, _encode_AINDigits } from "../AIN-Parameters/AINDigits.ta.mjs";
// export { AINDigits, _decode_AINDigits, _encode_AINDigits } from "../AIN-Parameters/AINDigits.ta.mjs";


/**
 * @summary AlternateDialingPlanInd
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * AlternateDialingPlanInd  ::=  [115] IMPLICIT AINDigits
 * ```
 */
export
type AlternateDialingPlanInd = AINDigits; // DefinedType

let _cached_decoder_for_AlternateDialingPlanInd: $.ASN1Decoder<AlternateDialingPlanInd> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) AlternateDialingPlanInd
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_AlternateDialingPlanInd (el: _Element): AlternateDialingPlanInd {
    if (!_cached_decoder_for_AlternateDialingPlanInd) { _cached_decoder_for_AlternateDialingPlanInd = $._decode_implicit<AlternateDialingPlanInd>(() => _decode_AINDigits); }
    return _cached_decoder_for_AlternateDialingPlanInd(el);
}

let _cached_encoder_for_AlternateDialingPlanInd: $.ASN1Encoder<AlternateDialingPlanInd> | null = null;

/**
 * @summary Encodes a(n) AlternateDialingPlanInd into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AlternateDialingPlanInd, encoded as an ASN.1 Element.
 */
export
function _encode_AlternateDialingPlanInd (value: AlternateDialingPlanInd, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_AlternateDialingPlanInd) { _cached_encoder_for_AlternateDialingPlanInd = $._encode_implicit(_TagClass.context, 115, () => _encode_AINDigits, $.BER); }
    return _cached_encoder_for_AlternateDialingPlanInd(value, elGetter);
}


/* eslint-enable */
