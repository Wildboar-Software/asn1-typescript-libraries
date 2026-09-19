/* eslint-disable */
import {
    ASN1Element as _Element,
    INTEGER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary ContextID
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ContextID  ::=  INTEGER(0..4294967295)
 * ```
 */
export
type ContextID = INTEGER;

let _cached_decoder_for_ContextID: $.ASN1Decoder<ContextID> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ContextID
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_ContextID (el: _Element): ContextID {
    if (!_cached_decoder_for_ContextID) { _cached_decoder_for_ContextID = $._decodeInteger; }
    return _cached_decoder_for_ContextID(el);
}

let _cached_encoder_for_ContextID: $.ASN1Encoder<ContextID> | null = null;

/**
 * @summary Encodes a(n) ContextID into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ContextID, encoded as an ASN.1 Element.
 */
export
function _encode_ContextID (value: ContextID, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_ContextID) { _cached_encoder_for_ContextID = $._encodeInteger; }
    return _cached_encoder_for_ContextID(value, elGetter);
}


/* eslint-enable */
