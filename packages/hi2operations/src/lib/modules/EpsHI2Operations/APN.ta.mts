/* eslint-disable */
import {
    ASN1Element as _Element,
    OCTET_STRING
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary APN
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * APN  ::=  OCTET STRING (SIZE (1..100))
 * ```
 */
export
type APN = OCTET_STRING; // OctetStringType

let _cached_decoder_for_APN: $.ASN1Decoder<APN> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) APN
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_APN (el: _Element): APN {
    if (!_cached_decoder_for_APN) { _cached_decoder_for_APN = $._decodeOctetString; }
    return _cached_decoder_for_APN(el);
}

let _cached_encoder_for_APN: $.ASN1Encoder<APN> | null = null;

/**
 * @summary Encodes a(n) APN into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The APN, encoded as an ASN.1 Element.
 */
export
function _encode_APN (value: APN, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_APN) { _cached_encoder_for_APN = $._encodeOctetString; }
    return _cached_encoder_for_APN(value, elGetter);
}


/* eslint-enable */
