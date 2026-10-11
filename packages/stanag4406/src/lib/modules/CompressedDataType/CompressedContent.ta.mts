/* eslint-disable */
import {
    ASN1Element as _Element,
    OCTET_STRING
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary CompressedContent
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * CompressedContent  ::=  OCTET STRING
 * ```
 */
export
type CompressedContent = OCTET_STRING; // OctetStringType

let _cached_decoder_for_CompressedContent: $.ASN1Decoder<CompressedContent> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) CompressedContent
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_CompressedContent (el: _Element): CompressedContent {
    if (!_cached_decoder_for_CompressedContent) { _cached_decoder_for_CompressedContent = $._decodeOctetString; }
    return _cached_decoder_for_CompressedContent(el);
}

let _cached_encoder_for_CompressedContent: $.ASN1Encoder<CompressedContent> | null = null;

/**
 * @summary Encodes a(n) CompressedContent into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CompressedContent, encoded as an ASN.1 Element.
 */
export
function _encode_CompressedContent (value: CompressedContent, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_CompressedContent) { _cached_encoder_for_CompressedContent = $._encodeOctetString; }
    return _cached_encoder_for_CompressedContent(value, elGetter);
}


/* eslint-enable */
