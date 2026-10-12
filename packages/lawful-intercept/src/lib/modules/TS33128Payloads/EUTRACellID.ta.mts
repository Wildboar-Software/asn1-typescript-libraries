/* eslint-disable */
import {
    ASN1Element as _Element,
    BIT_STRING
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary EUTRACellID
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * EUTRACellID  ::=  BIT STRING (SIZE(28))
 * ```
 */
export
type EUTRACellID = BIT_STRING;

let _cached_decoder_for_EUTRACellID: $.ASN1Decoder<EUTRACellID> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) EUTRACellID
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_EUTRACellID (el: _Element): EUTRACellID {
    if (!_cached_decoder_for_EUTRACellID) { _cached_decoder_for_EUTRACellID = $._decodeBitString; }
    return _cached_decoder_for_EUTRACellID(el);
}

let _cached_encoder_for_EUTRACellID: $.ASN1Encoder<EUTRACellID> | null = null;

/**
 * @summary Encodes a(n) EUTRACellID into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The EUTRACellID, encoded as an ASN.1 Element.
 */
export
function _encode_EUTRACellID (value: EUTRACellID, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_EUTRACellID) { _cached_encoder_for_EUTRACellID = $._encodeBitString; }
    return _cached_encoder_for_EUTRACellID(value, elGetter);
}


/* eslint-enable */
