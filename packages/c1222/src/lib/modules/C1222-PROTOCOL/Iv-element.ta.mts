/* eslint-disable */
import {
    ASN1Element as _Element,
    OCTET_STRING
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary Iv_element
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * Iv-element  ::=  OCTET STRING (SIZE(4))
 * ```
 */
export
type Iv_element = OCTET_STRING; // OctetStringType

let _cached_decoder_for_Iv_element: $.ASN1Decoder<Iv_element> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) Iv_element
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_Iv_element (el: _Element): Iv_element {
    if (!_cached_decoder_for_Iv_element) { _cached_decoder_for_Iv_element = $._decodeOctetString; }
    return _cached_decoder_for_Iv_element(el);
}

let _cached_encoder_for_Iv_element: $.ASN1Encoder<Iv_element> | null = null;

/**
 * @summary Encodes a(n) Iv_element into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Iv_element, encoded as an ASN.1 Element.
 */
export
function _encode_Iv_element (value: Iv_element, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_Iv_element) { _cached_encoder_for_Iv_element = $._encodeOctetString; }
    return _cached_encoder_for_Iv_element(value, elGetter);
}


/* eslint-enable */
