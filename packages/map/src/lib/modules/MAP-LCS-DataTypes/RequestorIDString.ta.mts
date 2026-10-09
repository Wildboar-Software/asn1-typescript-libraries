/* eslint-disable */
import {
    ASN1Element as _Element
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { _decode_USSD_String, _encode_USSD_String, USSD_String } from "../MAP-SS-DataTypes/USSD-String.ta.mjs";



/**
 * @summary RequestorIDString
 * @description
 *
 * USSD-String SIZE (1..maxRequestorIDStringLength) (3GPP TS 29.002 V19.1.0
 * clause 17.7.13).
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * RequestorIDString  ::=  USSD-String (SIZE (1..maxRequestorIDStringLength))
 * ```
 */
export
type RequestorIDString = USSD_String; // DefinedType

let _cached_decoder_for_RequestorIDString: $.ASN1Decoder<RequestorIDString> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) RequestorIDString
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_RequestorIDString (el: _Element): RequestorIDString {
    if (!_cached_decoder_for_RequestorIDString) { _cached_decoder_for_RequestorIDString = _decode_USSD_String; }
    return _cached_decoder_for_RequestorIDString(el);
}

let _cached_encoder_for_RequestorIDString: $.ASN1Encoder<RequestorIDString> | null = null;

/**
 * @summary Encodes a(n) RequestorIDString into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The RequestorIDString, encoded as an ASN.1 Element.
 */
export
function _encode_RequestorIDString (value: RequestorIDString, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_RequestorIDString) { _cached_encoder_for_RequestorIDString = _encode_USSD_String; }
    return _cached_encoder_for_RequestorIDString(value, elGetter);
}


/* eslint-enable */
