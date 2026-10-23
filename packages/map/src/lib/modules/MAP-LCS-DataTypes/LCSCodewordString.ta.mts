/* eslint-disable */
import {
    ASN1Element as _Element
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { _decode_USSD_String, _encode_USSD_String, USSD_String } from "../MAP-SS-DataTypes/USSD-String.ta.mjs";



/**
 * @summary LCSCodewordString
 * @description
 *
 * USSD-String SIZE (1..maxLCSCodewordStringLength) (3GPP TS 29.002 V19.1.0
 * clause 17.7.13).
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * LCSCodewordString  ::=  USSD-String (SIZE (1..maxLCSCodewordStringLength))
 * ```
 */
export
type LCSCodewordString = USSD_String; // DefinedType

let _cached_decoder_for_LCSCodewordString: $.ASN1Decoder<LCSCodewordString> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) LCSCodewordString
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_LCSCodewordString (el: _Element): LCSCodewordString {
    if (!_cached_decoder_for_LCSCodewordString) { _cached_decoder_for_LCSCodewordString = _decode_USSD_String; }
    return _cached_decoder_for_LCSCodewordString(el);
}

let _cached_encoder_for_LCSCodewordString: $.ASN1Encoder<LCSCodewordString> | null = null;

/**
 * @summary Encodes a(n) LCSCodewordString into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The LCSCodewordString, encoded as an ASN.1 Element.
 */
export
function _encode_LCSCodewordString (value: LCSCodewordString, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_LCSCodewordString) { _cached_encoder_for_LCSCodewordString = _encode_USSD_String; }
    return _cached_encoder_for_LCSCodewordString(value, elGetter);
}


/* eslint-enable */
