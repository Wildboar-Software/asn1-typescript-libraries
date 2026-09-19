/* eslint-disable */
import {
    ASN1Element as _Element,
    OCTET_STRING
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary Octet8
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * Octet8  ::=  OCTET STRING (SIZE(8))
 * ```
 */
export
type Octet8 = OCTET_STRING; // OctetStringType

let _cached_decoder_for_Octet8: $.ASN1Decoder<Octet8> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) Octet8
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_Octet8 (el: _Element): Octet8 {
    if (!_cached_decoder_for_Octet8) { _cached_decoder_for_Octet8 = $._decodeOctetString; }
    return _cached_decoder_for_Octet8(el);
}

let _cached_encoder_for_Octet8: $.ASN1Encoder<Octet8> | null = null;

/**
 * @summary Encodes a(n) Octet8 into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Octet8, encoded as an ASN.1 Element.
 */
export
function _encode_Octet8 (value: Octet8, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_Octet8) { _cached_encoder_for_Octet8 = $._encodeOctetString; }
    return _cached_encoder_for_Octet8(value, elGetter);
}


/* eslint-enable */
