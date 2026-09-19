/* eslint-disable */
import {
    ASN1Element as _Element
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { AINDigits, _decode_AINDigits, _encode_AINDigits } from "../AIN-Parameters/AINDigits.ta.mjs";
// export { AINDigits, _decode_AINDigits, _encode_AINDigits } from "../AIN-Parameters/AINDigits.ta.mjs";


/**
 * @summary SrhrID
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SrhrID  ::=  AINDigits
 * ```
 */
export
type SrhrID = AINDigits; // DefinedType

let _cached_decoder_for_SrhrID: $.ASN1Decoder<SrhrID> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) SrhrID
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_SrhrID (el: _Element): SrhrID {
    if (!_cached_decoder_for_SrhrID) { _cached_decoder_for_SrhrID = _decode_AINDigits; }
    return _cached_decoder_for_SrhrID(el);
}

let _cached_encoder_for_SrhrID: $.ASN1Encoder<SrhrID> | null = null;

/**
 * @summary Encodes a(n) SrhrID into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SrhrID, encoded as an ASN.1 Element.
 */
export
function _encode_SrhrID (value: SrhrID, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_SrhrID) { _cached_encoder_for_SrhrID = _encode_AINDigits; }
    return _cached_encoder_for_SrhrID(value, elGetter);
}


/* eslint-enable */
