/* eslint-disable */
import {
    ASN1Element as _Element,
    OCTET_STRING
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary DHNonce
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * DHNonce  ::=  OCTET STRING
 * ```
 */
export
type DHNonce = OCTET_STRING; // OctetStringType

let _cached_decoder_for_DHNonce: $.ASN1Decoder<DHNonce> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) DHNonce
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_DHNonce (el: _Element): DHNonce {
    if (!_cached_decoder_for_DHNonce) { _cached_decoder_for_DHNonce = $._decodeOctetString; }
    return _cached_decoder_for_DHNonce(el);
}

let _cached_encoder_for_DHNonce: $.ASN1Encoder<DHNonce> | null = null;

/**
 * @summary Encodes a(n) DHNonce into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The DHNonce, encoded as an ASN.1 Element.
 */
export
function _encode_DHNonce (value: DHNonce, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_DHNonce) { _cached_encoder_for_DHNonce = $._encodeOctetString; }
    return _cached_encoder_for_DHNonce(value, elGetter);
}


/* eslint-enable */
