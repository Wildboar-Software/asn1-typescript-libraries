/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { AINDigits, _decode_AINDigits, _encode_AINDigits } from "../AIN-Parameters/AINDigits.ta.mjs";
// export { AINDigits, _decode_AINDigits, _encode_AINDigits } from "../AIN-Parameters/AINDigits.ta.mjs";


/**
 * @summary MsrID
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * MsrID  ::=  [106] IMPLICIT AINDigits
 * ```
 */
export
type MsrID = AINDigits; // DefinedType

let _cached_decoder_for_MsrID: $.ASN1Decoder<MsrID> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) MsrID
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_MsrID (el: _Element): MsrID {
    if (!_cached_decoder_for_MsrID) { _cached_decoder_for_MsrID = $._decode_implicit<MsrID>(() => _decode_AINDigits); }
    return _cached_decoder_for_MsrID(el);
}

let _cached_encoder_for_MsrID: $.ASN1Encoder<MsrID> | null = null;

/**
 * @summary Encodes a(n) MsrID into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The MsrID, encoded as an ASN.1 Element.
 */
export
function _encode_MsrID (value: MsrID, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_MsrID) { _cached_encoder_for_MsrID = $._encode_implicit(_TagClass.context, 106, () => _encode_AINDigits, $.BER); }
    return _cached_encoder_for_MsrID(value, elGetter);
}


/* eslint-enable */
