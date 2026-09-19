/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { AINDigits, _decode_AINDigits, _encode_AINDigits } from "../AIN-Parameters/AINDigits.ta.mjs";
// export { AINDigits, _decode_AINDigits, _encode_AINDigits } from "../AIN-Parameters/AINDigits.ta.mjs";


/**
 * @summary Tcm
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * Tcm  ::=  [51] IMPLICIT AINDigits
 * ```
 */
export
type Tcm = AINDigits; // DefinedType

let _cached_decoder_for_Tcm: $.ASN1Decoder<Tcm> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) Tcm
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_Tcm (el: _Element): Tcm {
    if (!_cached_decoder_for_Tcm) { _cached_decoder_for_Tcm = $._decode_implicit<Tcm>(() => _decode_AINDigits); }
    return _cached_decoder_for_Tcm(el);
}

let _cached_encoder_for_Tcm: $.ASN1Encoder<Tcm> | null = null;

/**
 * @summary Encodes a(n) Tcm into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Tcm, encoded as an ASN.1 Element.
 */
export
function _encode_Tcm (value: Tcm, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_Tcm) { _cached_encoder_for_Tcm = $._encode_implicit(_TagClass.context, 51, () => _encode_AINDigits, $.BER); }
    return _cached_encoder_for_Tcm(value, elGetter);
}


/* eslint-enable */
