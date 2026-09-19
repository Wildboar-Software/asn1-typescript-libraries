/* eslint-disable */
import {
    ASN1Element as _Element
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary AESAlgorithmIdentifier
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * AESAlgorithmIdentifier  ::=  AlgorithmIdentifier {{ AES-Algorithms }}
 * ```
 */
export
type AESAlgorithmIdentifier = AlgorithmIdentifier; // DefinedType

let _cached_decoder_for_AESAlgorithmIdentifier: $.ASN1Decoder<AESAlgorithmIdentifier> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) AESAlgorithmIdentifier
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_AESAlgorithmIdentifier (el: _Element): AESAlgorithmIdentifier {
    if (!_cached_decoder_for_AESAlgorithmIdentifier) { _cached_decoder_for_AESAlgorithmIdentifier = _decode_AlgorithmIdentifier; }
    return _cached_decoder_for_AESAlgorithmIdentifier(el);
}

let _cached_encoder_for_AESAlgorithmIdentifier: $.ASN1Encoder<AESAlgorithmIdentifier> | null = null;

/**
 * @summary Encodes a(n) AESAlgorithmIdentifier into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AESAlgorithmIdentifier, encoded as an ASN.1 Element.
 */
export
function _encode_AESAlgorithmIdentifier (value: AESAlgorithmIdentifier, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_AESAlgorithmIdentifier) { _cached_encoder_for_AESAlgorithmIdentifier = _encode_AlgorithmIdentifier; }
    return _cached_encoder_for_AESAlgorithmIdentifier(value, elGetter);
}


/* eslint-enable */
