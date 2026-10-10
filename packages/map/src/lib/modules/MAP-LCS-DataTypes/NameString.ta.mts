/* eslint-disable */
import {
    ASN1Element as _Element
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { _decode_USSD_String, _encode_USSD_String, USSD_String } from "../MAP-SS-DataTypes/USSD-String.ta.mjs";



/**
 * @summary NameString
 * @description
 *
 * USSD-String SIZE (1..maxNameStringLength) (3GPP TS 29.002 V19.1.0 clause
 * 17.7.13).
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * NameString  ::=  USSD-String (SIZE (1..maxNameStringLength))
 * ```
 */
export
type NameString = USSD_String; // DefinedType

let _cached_decoder_for_NameString: $.ASN1Decoder<NameString> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) NameString
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_NameString (el: _Element): NameString {
    if (!_cached_decoder_for_NameString) { _cached_decoder_for_NameString = _decode_USSD_String; }
    return _cached_decoder_for_NameString(el);
}

let _cached_encoder_for_NameString: $.ASN1Encoder<NameString> | null = null;

/**
 * @summary Encodes a(n) NameString into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The NameString, encoded as an ASN.1 Element.
 */
export
function _encode_NameString (value: NameString, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_NameString) { _cached_encoder_for_NameString = _encode_USSD_String; }
    return _cached_encoder_for_NameString(value, elGetter);
}


/* eslint-enable */
