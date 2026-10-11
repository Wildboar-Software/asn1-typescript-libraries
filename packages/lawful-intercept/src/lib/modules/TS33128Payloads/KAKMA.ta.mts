/* eslint-disable */
import {
    ASN1Element as _Element,
    OCTET_STRING
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary KAKMA
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * KAKMA  ::=  OCTET STRING
 * ```
 */
export
type KAKMA = OCTET_STRING; // OctetStringType

let _cached_decoder_for_KAKMA: $.ASN1Decoder<KAKMA> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) KAKMA
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_KAKMA (el: _Element): KAKMA {
    if (!_cached_decoder_for_KAKMA) { _cached_decoder_for_KAKMA = $._decodeOctetString; }
    return _cached_decoder_for_KAKMA(el);
}

let _cached_encoder_for_KAKMA: $.ASN1Encoder<KAKMA> | null = null;

/**
 * @summary Encodes a(n) KAKMA into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The KAKMA, encoded as an ASN.1 Element.
 */
export
function _encode_KAKMA (value: KAKMA, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_KAKMA) { _cached_encoder_for_KAKMA = $._encodeOctetString; }
    return _cached_encoder_for_KAKMA(value, elGetter);
}


/* eslint-enable */
