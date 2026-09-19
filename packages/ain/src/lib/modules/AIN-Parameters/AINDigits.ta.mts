/* eslint-disable */
import {
    ASN1Element as _Element,
    OCTET_STRING
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary AINDigits
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * AINDigits  ::=  OCTET STRING
 * ```
 */
export
type AINDigits = OCTET_STRING; // OctetStringType

let _cached_decoder_for_AINDigits: $.ASN1Decoder<AINDigits> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) AINDigits
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_AINDigits (el: _Element): AINDigits {
    if (!_cached_decoder_for_AINDigits) { _cached_decoder_for_AINDigits = $._decodeOctetString; }
    return _cached_decoder_for_AINDigits(el);
}

let _cached_encoder_for_AINDigits: $.ASN1Encoder<AINDigits> | null = null;

/**
 * @summary Encodes a(n) AINDigits into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AINDigits, encoded as an ASN.1 Element.
 */
export
function _encode_AINDigits (value: AINDigits, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_AINDigits) { _cached_encoder_for_AINDigits = $._encodeOctetString; }
    return _cached_encoder_for_AINDigits(value, elGetter);
}


/* eslint-enable */
