/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { AINDigits, _decode_AINDigits, _encode_AINDigits } from "../AIN-Parameters/AINDigits.ta.mjs";
// export { AINDigits, _decode_AINDigits, _encode_AINDigits } from "../AIN-Parameters/AINDigits.ta.mjs";


/**
 * @summary OriginalCalledPartyID
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * OriginalCalledPartyID  ::=  [36] IMPLICIT AINDigits
 * ```
 */
export
type OriginalCalledPartyID = AINDigits; // DefinedType

let _cached_decoder_for_OriginalCalledPartyID: $.ASN1Decoder<OriginalCalledPartyID> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) OriginalCalledPartyID
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_OriginalCalledPartyID (el: _Element): OriginalCalledPartyID {
    if (!_cached_decoder_for_OriginalCalledPartyID) { _cached_decoder_for_OriginalCalledPartyID = $._decode_implicit<OriginalCalledPartyID>(() => _decode_AINDigits); }
    return _cached_decoder_for_OriginalCalledPartyID(el);
}

let _cached_encoder_for_OriginalCalledPartyID: $.ASN1Encoder<OriginalCalledPartyID> | null = null;

/**
 * @summary Encodes a(n) OriginalCalledPartyID into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The OriginalCalledPartyID, encoded as an ASN.1 Element.
 */
export
function _encode_OriginalCalledPartyID (value: OriginalCalledPartyID, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_OriginalCalledPartyID) { _cached_encoder_for_OriginalCalledPartyID = $._encode_implicit(_TagClass.context, 36, () => _encode_AINDigits, $.BER); }
    return _cached_encoder_for_OriginalCalledPartyID(value, elGetter);
}


/* eslint-enable */
