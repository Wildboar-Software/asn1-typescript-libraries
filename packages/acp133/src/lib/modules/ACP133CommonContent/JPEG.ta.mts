/* eslint-disable */
import {
    ASN1Element as _Element,
    OCTET_STRING
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary JPEG
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * JPEG  ::=  OCTET STRING
 * ```
 */
export
type JPEG = OCTET_STRING; // OctetStringType

let _cached_decoder_for_JPEG: $.ASN1Decoder<JPEG> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) JPEG
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_JPEG (el: _Element): JPEG {
    if (!_cached_decoder_for_JPEG) { _cached_decoder_for_JPEG = $._decodeOctetString; }
    return _cached_decoder_for_JPEG(el);
}

let _cached_encoder_for_JPEG: $.ASN1Encoder<JPEG> | null = null;

/**
 * @summary Encodes a(n) JPEG into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The JPEG, encoded as an ASN.1 Element.
 */
export
function _encode_JPEG (value: JPEG, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_JPEG) { _cached_encoder_for_JPEG = $._encodeOctetString; }
    return _cached_encoder_for_JPEG(value, elGetter);
}


/* eslint-enable */
