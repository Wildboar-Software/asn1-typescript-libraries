/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { AINDigits, _decode_AINDigits, _encode_AINDigits } from "../AIN-Parameters/AINDigits.ta.mjs";
// export { AINDigits, _decode_AINDigits, _encode_AINDigits } from "../AIN-Parameters/AINDigits.ta.mjs";


/**
 * @summary CallingPartyID
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * CallingPartyID  ::=  [18] IMPLICIT AINDigits
 * ```
 */
export
type CallingPartyID = AINDigits; // DefinedType

let _cached_decoder_for_CallingPartyID: $.ASN1Decoder<CallingPartyID> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) CallingPartyID
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_CallingPartyID (el: _Element): CallingPartyID {
    if (!_cached_decoder_for_CallingPartyID) { _cached_decoder_for_CallingPartyID = $._decode_implicit<CallingPartyID>(() => _decode_AINDigits); }
    return _cached_decoder_for_CallingPartyID(el);
}

let _cached_encoder_for_CallingPartyID: $.ASN1Encoder<CallingPartyID> | null = null;

/**
 * @summary Encodes a(n) CallingPartyID into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CallingPartyID, encoded as an ASN.1 Element.
 */
export
function _encode_CallingPartyID (value: CallingPartyID, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_CallingPartyID) { _cached_encoder_for_CallingPartyID = $._encode_implicit(_TagClass.context, 18, () => _encode_AINDigits, $.BER); }
    return _cached_encoder_for_CallingPartyID(value, elGetter);
}


/* eslint-enable */
