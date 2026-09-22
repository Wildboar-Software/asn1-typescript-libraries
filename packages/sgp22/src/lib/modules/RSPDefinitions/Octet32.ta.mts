/* eslint-disable */
import {
    ASN1Element as _Element,
    OCTET_STRING
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary Octet32
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * Octet32  ::=  OCTET STRING (SIZE(32))
 * ```
 */
export
type Octet32 = OCTET_STRING; // OctetStringType

let _cached_decoder_for_Octet32: $.ASN1Decoder<Octet32> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) Octet32
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_Octet32 (el: _Element): Octet32 {
    if (!_cached_decoder_for_Octet32) { _cached_decoder_for_Octet32 = $._decodeOctetString; }
    return _cached_decoder_for_Octet32(el);
}

let _cached_encoder_for_Octet32: $.ASN1Encoder<Octet32> | null = null;

/**
 * @summary Encodes a(n) Octet32 into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Octet32, encoded as an ASN.1 Element.
 */
export
function _encode_Octet32 (value: Octet32, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_Octet32) { _cached_encoder_for_Octet32 = $._encodeOctetString; }
    return _cached_encoder_for_Octet32(value, elGetter);
}


/* eslint-enable */
