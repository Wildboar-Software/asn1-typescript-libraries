/* eslint-disable */
import {
    ASN1Element as _Element,
    OCTET_STRING
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary MMECode
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * MMECode  ::=  OCTET STRING (SIZE(1))
 * ```
 */
export
type MMECode = OCTET_STRING; // OctetStringType

let _cached_decoder_for_MMECode: $.ASN1Decoder<MMECode> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) MMECode
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_MMECode (el: _Element): MMECode {
    if (!_cached_decoder_for_MMECode) { _cached_decoder_for_MMECode = $._decodeOctetString; }
    return _cached_decoder_for_MMECode(el);
}

let _cached_encoder_for_MMECode: $.ASN1Encoder<MMECode> | null = null;

/**
 * @summary Encodes a(n) MMECode into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The MMECode, encoded as an ASN.1 Element.
 */
export
function _encode_MMECode (value: MMECode, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_MMECode) { _cached_encoder_for_MMECode = $._encodeOctetString; }
    return _cached_encoder_for_MMECode(value, elGetter);
}


/* eslint-enable */
