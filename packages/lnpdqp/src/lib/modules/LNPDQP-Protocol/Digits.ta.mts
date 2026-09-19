/* eslint-disable */
import {
    ASN1Element as _Element,
    OCTET_STRING
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary Digits
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * Digits  ::=  OCTET STRING (SIZE(4..9))
 * ```
 */
export
type Digits = OCTET_STRING; // OctetStringType

let _cached_decoder_for_Digits: $.ASN1Decoder<Digits> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) Digits
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_Digits (el: _Element): Digits {
    if (!_cached_decoder_for_Digits) { _cached_decoder_for_Digits = $._decodeOctetString; }
    return _cached_decoder_for_Digits(el);
}

let _cached_encoder_for_Digits: $.ASN1Encoder<Digits> | null = null;

/**
 * @summary Encodes a(n) Digits into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Digits, encoded as an ASN.1 Element.
 */
export
function _encode_Digits (value: Digits, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_Digits) { _cached_encoder_for_Digits = $._encodeOctetString; }
    return _cached_encoder_for_Digits(value, elGetter);
}


/* eslint-enable */
