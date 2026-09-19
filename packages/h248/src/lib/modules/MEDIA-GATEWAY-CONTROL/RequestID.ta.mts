/* eslint-disable */
import {
    ASN1Element as _Element,
    INTEGER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary RequestID
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * RequestID  ::=  INTEGER(0..4294967295)
 * ```
 */
export
type RequestID = INTEGER;

let _cached_decoder_for_RequestID: $.ASN1Decoder<RequestID> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) RequestID
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_RequestID (el: _Element): RequestID {
    if (!_cached_decoder_for_RequestID) { _cached_decoder_for_RequestID = $._decodeInteger; }
    return _cached_decoder_for_RequestID(el);
}

let _cached_encoder_for_RequestID: $.ASN1Encoder<RequestID> | null = null;

/**
 * @summary Encodes a(n) RequestID into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The RequestID, encoded as an ASN.1 Element.
 */
export
function _encode_RequestID (value: RequestID, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_RequestID) { _cached_encoder_for_RequestID = $._encodeInteger; }
    return _cached_encoder_for_RequestID(value, elGetter);
}


/* eslint-enable */
