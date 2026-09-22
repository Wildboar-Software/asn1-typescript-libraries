/* eslint-disable */
import {
    ASN1Element as _Element,
    OCTET_STRING
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary Octet1
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * Octet1  ::=  OCTET STRING(SIZE(1))
 * ```
 */
export
type Octet1 = OCTET_STRING; // OctetStringType

let _cached_decoder_for_Octet1: $.ASN1Decoder<Octet1> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) Octet1
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_Octet1 (el: _Element): Octet1 {
    if (!_cached_decoder_for_Octet1) { _cached_decoder_for_Octet1 = $._decodeOctetString; }
    return _cached_decoder_for_Octet1(el);
}

let _cached_encoder_for_Octet1: $.ASN1Encoder<Octet1> | null = null;

/**
 * @summary Encodes a(n) Octet1 into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Octet1, encoded as an ASN.1 Element.
 */
export
function _encode_Octet1 (value: Octet1, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_Octet1) { _cached_encoder_for_Octet1 = $._encodeOctetString; }
    return _cached_encoder_for_Octet1(value, elGetter);
}


/* eslint-enable */
