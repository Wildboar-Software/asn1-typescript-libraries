/* eslint-disable */
import {
    ASN1Element as _Element,
    OCTET_STRING
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary TMSI
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * TMSI  ::=  OCTET STRING (SIZE(4))
 * ```
 */
export
type TMSI = OCTET_STRING; // OctetStringType

let _cached_decoder_for_TMSI: $.ASN1Decoder<TMSI> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) TMSI
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_TMSI (el: _Element): TMSI {
    if (!_cached_decoder_for_TMSI) { _cached_decoder_for_TMSI = $._decodeOctetString; }
    return _cached_decoder_for_TMSI(el);
}

let _cached_encoder_for_TMSI: $.ASN1Encoder<TMSI> | null = null;

/**
 * @summary Encodes a(n) TMSI into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The TMSI, encoded as an ASN.1 Element.
 */
export
function _encode_TMSI (value: TMSI, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_TMSI) { _cached_encoder_for_TMSI = $._encodeOctetString; }
    return _cached_encoder_for_TMSI(value, elGetter);
}


/* eslint-enable */
