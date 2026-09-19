/* eslint-disable */
import {
    ASN1Element as _Element,
    OCTET_STRING
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary Key_id_element
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * Key-id-element  ::=  OCTET STRING (SIZE(1))
 * ```
 */
export
type Key_id_element = OCTET_STRING; // OctetStringType

let _cached_decoder_for_Key_id_element: $.ASN1Decoder<Key_id_element> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) Key_id_element
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_Key_id_element (el: _Element): Key_id_element {
    if (!_cached_decoder_for_Key_id_element) { _cached_decoder_for_Key_id_element = $._decodeOctetString; }
    return _cached_decoder_for_Key_id_element(el);
}

let _cached_encoder_for_Key_id_element: $.ASN1Encoder<Key_id_element> | null = null;

/**
 * @summary Encodes a(n) Key_id_element into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Key_id_element, encoded as an ASN.1 Element.
 */
export
function _encode_Key_id_element (value: Key_id_element, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_Key_id_element) { _cached_encoder_for_Key_id_element = $._encodeOctetString; }
    return _cached_encoder_for_Key_id_element(value, elGetter);
}


/* eslint-enable */
