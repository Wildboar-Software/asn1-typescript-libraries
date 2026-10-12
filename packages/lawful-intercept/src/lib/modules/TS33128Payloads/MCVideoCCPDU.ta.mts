/* eslint-disable */
import {
    ASN1Element as _Element,
    OCTET_STRING
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary MCVideoCCPDU
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * MCVideoCCPDU  ::=  OCTET STRING
 * ```
 */
export
type MCVideoCCPDU = OCTET_STRING; // OctetStringType

let _cached_decoder_for_MCVideoCCPDU: $.ASN1Decoder<MCVideoCCPDU> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) MCVideoCCPDU
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_MCVideoCCPDU (el: _Element): MCVideoCCPDU {
    if (!_cached_decoder_for_MCVideoCCPDU) { _cached_decoder_for_MCVideoCCPDU = $._decodeOctetString; }
    return _cached_decoder_for_MCVideoCCPDU(el);
}

let _cached_encoder_for_MCVideoCCPDU: $.ASN1Encoder<MCVideoCCPDU> | null = null;

/**
 * @summary Encodes a(n) MCVideoCCPDU into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The MCVideoCCPDU, encoded as an ASN.1 Element.
 */
export
function _encode_MCVideoCCPDU (value: MCVideoCCPDU, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_MCVideoCCPDU) { _cached_encoder_for_MCVideoCCPDU = $._encodeOctetString; }
    return _cached_encoder_for_MCVideoCCPDU(value, elGetter);
}


/* eslint-enable */
