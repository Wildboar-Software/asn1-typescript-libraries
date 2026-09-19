/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { AINDigits, _decode_AINDigits, _encode_AINDigits } from "../AIN-Parameters/AINDigits.ta.mjs";
// export { AINDigits, _decode_AINDigits, _encode_AINDigits } from "../AIN-Parameters/AINDigits.ta.mjs";


/**
 * @summary AMABusinessCustomerID
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * AMABusinessCustomerID  ::=  [7] IMPLICIT AINDigits
 * ```
 */
export
type AMABusinessCustomerID = AINDigits; // DefinedType

let _cached_decoder_for_AMABusinessCustomerID: $.ASN1Decoder<AMABusinessCustomerID> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) AMABusinessCustomerID
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_AMABusinessCustomerID (el: _Element): AMABusinessCustomerID {
    if (!_cached_decoder_for_AMABusinessCustomerID) { _cached_decoder_for_AMABusinessCustomerID = $._decode_implicit<AMABusinessCustomerID>(() => _decode_AINDigits); }
    return _cached_decoder_for_AMABusinessCustomerID(el);
}

let _cached_encoder_for_AMABusinessCustomerID: $.ASN1Encoder<AMABusinessCustomerID> | null = null;

/**
 * @summary Encodes a(n) AMABusinessCustomerID into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AMABusinessCustomerID, encoded as an ASN.1 Element.
 */
export
function _encode_AMABusinessCustomerID (value: AMABusinessCustomerID, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_AMABusinessCustomerID) { _cached_encoder_for_AMABusinessCustomerID = $._encode_implicit(_TagClass.context, 7, () => _encode_AINDigits, $.BER); }
    return _cached_encoder_for_AMABusinessCustomerID(value, elGetter);
}


/* eslint-enable */
