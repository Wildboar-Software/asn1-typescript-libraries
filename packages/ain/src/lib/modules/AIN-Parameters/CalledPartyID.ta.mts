/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { AINDigits, _decode_AINDigits, _encode_AINDigits } from "../AIN-Parameters/AINDigits.ta.mjs";
// export { AINDigits, _decode_AINDigits, _encode_AINDigits } from "../AIN-Parameters/AINDigits.ta.mjs";


/**
 * @summary CalledPartyID
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * CalledPartyID  ::=  [15] IMPLICIT AINDigits
 * ```
 */
export
type CalledPartyID = AINDigits; // DefinedType

let _cached_decoder_for_CalledPartyID: $.ASN1Decoder<CalledPartyID> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) CalledPartyID
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_CalledPartyID (el: _Element): CalledPartyID {
    if (!_cached_decoder_for_CalledPartyID) { _cached_decoder_for_CalledPartyID = $._decode_implicit<CalledPartyID>(() => _decode_AINDigits); }
    return _cached_decoder_for_CalledPartyID(el);
}

let _cached_encoder_for_CalledPartyID: $.ASN1Encoder<CalledPartyID> | null = null;

/**
 * @summary Encodes a(n) CalledPartyID into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CalledPartyID, encoded as an ASN.1 Element.
 */
export
function _encode_CalledPartyID (value: CalledPartyID, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_CalledPartyID) { _cached_encoder_for_CalledPartyID = $._encode_implicit(_TagClass.context, 15, () => _encode_AINDigits, $.BER); }
    return _cached_encoder_for_CalledPartyID(value, elGetter);
}


/* eslint-enable */
