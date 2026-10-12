/* eslint-disable */
import {
    ASN1Element as _Element,
    OCTET_STRING
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary LIID
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * LIID  ::=  OCTET STRING (SIZE (1..25))
 * ```
 */
export
type LIID = OCTET_STRING; // OctetStringType

let _cached_decoder_for_LIID: $.ASN1Decoder<LIID> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) LIID
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_LIID (el: _Element): LIID {
    if (!_cached_decoder_for_LIID) { _cached_decoder_for_LIID = $._decodeOctetString; }
    return _cached_decoder_for_LIID(el);
}

let _cached_encoder_for_LIID: $.ASN1Encoder<LIID> | null = null;

/**
 * @summary Encodes a(n) LIID into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The LIID, encoded as an ASN.1 Element.
 */
export
function _encode_LIID (value: LIID, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_LIID) { _cached_encoder_for_LIID = $._encodeOctetString; }
    return _cached_encoder_for_LIID(value, elGetter);
}


/* eslint-enable */
