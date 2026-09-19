/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { GenericDigits, _decode_GenericDigits, _encode_GenericDigits } from "../AIN-Parameters/GenericDigits.ta.mjs";
// export { GenericDigits, _decode_GenericDigits, _encode_GenericDigits } from "../AIN-Parameters/GenericDigits.ta.mjs";


/**
 * @summary GenericDigitsList
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * GenericDigitsList  ::=  [150] IMPLICIT SEQUENCE SIZE (1..5) OF GenericDigits
 * ```
 */
export
type GenericDigitsList = GenericDigits[]; // SequenceOfType

let _cached_decoder_for_GenericDigitsList: $.ASN1Decoder<GenericDigitsList> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) GenericDigitsList
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_GenericDigitsList (el: _Element): GenericDigitsList {
    if (!_cached_decoder_for_GenericDigitsList) { _cached_decoder_for_GenericDigitsList = $._decode_implicit<GenericDigitsList>(() => $._decodeSequenceOf<GenericDigits>(() => _decode_GenericDigits)); }
    return _cached_decoder_for_GenericDigitsList(el);
}

let _cached_encoder_for_GenericDigitsList: $.ASN1Encoder<GenericDigitsList> | null = null;

/**
 * @summary Encodes a(n) GenericDigitsList into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The GenericDigitsList, encoded as an ASN.1 Element.
 */
export
function _encode_GenericDigitsList (value: GenericDigitsList, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_GenericDigitsList) { _cached_encoder_for_GenericDigitsList = $._encode_implicit(_TagClass.context, 150, () => $._encodeSequenceOf<GenericDigits>(() => _encode_GenericDigits, $.BER), $.BER); }
    return _cached_encoder_for_GenericDigitsList(value, elGetter);
}


/* eslint-enable */
