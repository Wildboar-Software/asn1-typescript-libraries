/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { SavPdu, _decode_SavPdu, _encode_SavPdu } from "../IEC61850/SavPdu.ta.mjs";
// export { SavPdu, _decode_SavPdu, _encode_SavPdu } from "../IEC61850/SavPdu.ta.mjs";


/**
 * @summary SampledValues
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SampledValues  ::=  CHOICE {
 *     savPdu    [APPLICATION 0]    IMPLICIT SavPdu,
 *     ...
 * }
 * ```
 */
export
type SampledValues =
    { savPdu: SavPdu } /* CHOICE_ALT_ROOT */
    | _Element /* CHOICE_ALT_UNRECOGNIZED_EXT */;

let _cached_decoder_for_SampledValues: $.ASN1Decoder<SampledValues> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) SampledValues
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_SampledValues (el: _Element): SampledValues {
    if (!_cached_decoder_for_SampledValues) { _cached_decoder_for_SampledValues = $._decode_extensible_choice<SampledValues>({
    "APPLICATION 0": [ "savPdu", $._decode_implicit<SavPdu>(() => _decode_SavPdu) ]
}); }
    return _cached_decoder_for_SampledValues(el);
}

let _cached_encoder_for_SampledValues: $.ASN1Encoder<SampledValues> | null = null;

/**
 * @summary Encodes a(n) SampledValues into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SampledValues, encoded as an ASN.1 Element.
 */
export
function _encode_SampledValues (value: SampledValues, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_SampledValues) { _cached_encoder_for_SampledValues = $._encode_choice<SampledValues>({
    "savPdu": $._encode_implicit(_TagClass.application, 0, () => _encode_SavPdu, $.BER),
}, $.BER); }
    return _cached_encoder_for_SampledValues(value, elGetter);
}


/* eslint-enable */
