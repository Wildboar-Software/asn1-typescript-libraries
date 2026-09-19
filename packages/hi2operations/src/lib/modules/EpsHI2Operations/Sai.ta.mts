/* eslint-disable */
import {
    ASN1Element as _Element,
    OCTET_STRING
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary Sai
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * Sai  ::=  OCTET STRING (SIZE (7))
 * ```
 */
export
type Sai = OCTET_STRING; // OctetStringType

let _cached_decoder_for_Sai: $.ASN1Decoder<Sai> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) Sai
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_Sai (el: _Element): Sai {
    if (!_cached_decoder_for_Sai) { _cached_decoder_for_Sai = $._decodeOctetString; }
    return _cached_decoder_for_Sai(el);
}

let _cached_encoder_for_Sai: $.ASN1Encoder<Sai> | null = null;

/**
 * @summary Encodes a(n) Sai into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Sai, encoded as an ASN.1 Element.
 */
export
function _encode_Sai (value: Sai, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_Sai) { _cached_encoder_for_Sai = $._encodeOctetString; }
    return _cached_encoder_for_Sai(value, elGetter);
}


/* eslint-enable */
