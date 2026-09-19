/* eslint-disable */
import {
    ASN1Element as _Element,
    PrintableString
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary X520SerialNumber
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * X520SerialNumber  ::=     PrintableString (SIZE (1..ub-serial-number))
 * ```
 */
export
type X520SerialNumber = PrintableString; // PrintableString

let _cached_decoder_for_X520SerialNumber: $.ASN1Decoder<X520SerialNumber> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) X520SerialNumber
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_X520SerialNumber (el: _Element): X520SerialNumber {
    if (!_cached_decoder_for_X520SerialNumber) { _cached_decoder_for_X520SerialNumber = $._decodePrintableString; }
    return _cached_decoder_for_X520SerialNumber(el);
}

let _cached_encoder_for_X520SerialNumber: $.ASN1Encoder<X520SerialNumber> | null = null;

/**
 * @summary Encodes a(n) X520SerialNumber into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The X520SerialNumber, encoded as an ASN.1 Element.
 */
export
function _encode_X520SerialNumber (value: X520SerialNumber, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_X520SerialNumber) { _cached_encoder_for_X520SerialNumber = $._encodePrintableString; }
    return _cached_encoder_for_X520SerialNumber(value, elGetter);
}


/* eslint-enable */
