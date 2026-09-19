/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { AINDigits, _decode_AINDigits, _encode_AINDigits } from "../AIN-Parameters/AINDigits.ta.mjs";
// export { AINDigits, _decode_AINDigits, _encode_AINDigits } from "../AIN-Parameters/AINDigits.ta.mjs";


/**
 * @summary RedirectingPartyID
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * RedirectingPartyID  ::=  [43] IMPLICIT AINDigits
 * ```
 */
export
type RedirectingPartyID = AINDigits; // DefinedType

let _cached_decoder_for_RedirectingPartyID: $.ASN1Decoder<RedirectingPartyID> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) RedirectingPartyID
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_RedirectingPartyID (el: _Element): RedirectingPartyID {
    if (!_cached_decoder_for_RedirectingPartyID) { _cached_decoder_for_RedirectingPartyID = $._decode_implicit<RedirectingPartyID>(() => _decode_AINDigits); }
    return _cached_decoder_for_RedirectingPartyID(el);
}

let _cached_encoder_for_RedirectingPartyID: $.ASN1Encoder<RedirectingPartyID> | null = null;

/**
 * @summary Encodes a(n) RedirectingPartyID into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The RedirectingPartyID, encoded as an ASN.1 Element.
 */
export
function _encode_RedirectingPartyID (value: RedirectingPartyID, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_RedirectingPartyID) { _cached_encoder_for_RedirectingPartyID = $._encode_implicit(_TagClass.context, 43, () => _encode_AINDigits, $.BER); }
    return _cached_encoder_for_RedirectingPartyID(value, elGetter);
}


/* eslint-enable */
