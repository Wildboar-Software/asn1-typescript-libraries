/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { AINDigits, _decode_AINDigits, _encode_AINDigits } from "../AIN-Parameters/AINDigits.ta.mjs";
// export { AINDigits, _decode_AINDigits, _encode_AINDigits } from "../AIN-Parameters/AINDigits.ta.mjs";


/**
 * @summary Lata
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * Lata  ::=  [35] IMPLICIT AINDigits
 * ```
 */
export
type Lata = AINDigits; // DefinedType

let _cached_decoder_for_Lata: $.ASN1Decoder<Lata> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) Lata
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_Lata (el: _Element): Lata {
    if (!_cached_decoder_for_Lata) { _cached_decoder_for_Lata = $._decode_implicit<Lata>(() => _decode_AINDigits); }
    return _cached_decoder_for_Lata(el);
}

let _cached_encoder_for_Lata: $.ASN1Encoder<Lata> | null = null;

/**
 * @summary Encodes a(n) Lata into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Lata, encoded as an ASN.1 Element.
 */
export
function _encode_Lata (value: Lata, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_Lata) { _cached_encoder_for_Lata = $._encode_implicit(_TagClass.context, 35, () => _encode_AINDigits, $.BER); }
    return _cached_encoder_for_Lata(value, elGetter);
}


/* eslint-enable */
