/* eslint-disable */
import {
    ASN1Element as _Element,
    INTEGER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary CSGID
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * CSGID  ::=  INTEGER
 * ```
 */
export
type CSGID = INTEGER;

let _cached_decoder_for_CSGID: $.ASN1Decoder<CSGID> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) CSGID
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_CSGID (el: _Element): CSGID {
    if (!_cached_decoder_for_CSGID) { _cached_decoder_for_CSGID = $._decodeInteger; }
    return _cached_decoder_for_CSGID(el);
}

let _cached_encoder_for_CSGID: $.ASN1Encoder<CSGID> | null = null;

/**
 * @summary Encodes a(n) CSGID into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CSGID, encoded as an ASN.1 Element.
 */
export
function _encode_CSGID (value: CSGID, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_CSGID) { _cached_encoder_for_CSGID = $._encodeInteger; }
    return _cached_encoder_for_CSGID(value, elGetter);
}


/* eslint-enable */
