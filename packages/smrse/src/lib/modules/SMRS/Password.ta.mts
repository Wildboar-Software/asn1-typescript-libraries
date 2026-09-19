/* eslint-disable */
import {
    ASN1Element as _Element,
    PrintableString
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary Password
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * Password  ::=  PrintableString
 * ```
 */
export
type Password = PrintableString; // PrintableString

let _cached_decoder_for_Password: $.ASN1Decoder<Password> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) Password
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_Password (el: _Element): Password {
    if (!_cached_decoder_for_Password) { _cached_decoder_for_Password = $._decodePrintableString; }
    return _cached_decoder_for_Password(el);
}

let _cached_encoder_for_Password: $.ASN1Encoder<Password> | null = null;

/**
 * @summary Encodes a(n) Password into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Password, encoded as an ASN.1 Element.
 */
export
function _encode_Password (value: Password, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_Password) { _cached_encoder_for_Password = $._encodePrintableString; }
    return _cached_encoder_for_Password(value, elGetter);
}


/* eslint-enable */
