/* eslint-disable */
import {
    ASN1Element as _Element,
    BIT_STRING
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary UniqueIdentifier
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * UniqueIdentifier   ::=   BIT STRING
 * ```
 */
export
type UniqueIdentifier = BIT_STRING;

let _cached_decoder_for_UniqueIdentifier: $.ASN1Decoder<UniqueIdentifier> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) UniqueIdentifier
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_UniqueIdentifier (el: _Element): UniqueIdentifier {
    if (!_cached_decoder_for_UniqueIdentifier) { _cached_decoder_for_UniqueIdentifier = $._decodeBitString; }
    return _cached_decoder_for_UniqueIdentifier(el);
}

let _cached_encoder_for_UniqueIdentifier: $.ASN1Encoder<UniqueIdentifier> | null = null;

/**
 * @summary Encodes a(n) UniqueIdentifier into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The UniqueIdentifier, encoded as an ASN.1 Element.
 */
export
function _encode_UniqueIdentifier (value: UniqueIdentifier, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_UniqueIdentifier) { _cached_encoder_for_UniqueIdentifier = $._encodeBitString; }
    return _cached_encoder_for_UniqueIdentifier(value, elGetter);
}


/* eslint-enable */
