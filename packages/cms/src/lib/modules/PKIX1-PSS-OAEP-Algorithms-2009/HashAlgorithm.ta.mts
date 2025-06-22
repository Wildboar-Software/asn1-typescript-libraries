/* eslint-disable */
import { ASN1Element as _Element } from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { AlgorithmIdentifier, _decode_AlgorithmIdentifier, _encode_AlgorithmIdentifier } from "@wildboar/x500/src/lib/modules/AuthenticationFramework/AlgorithmIdentifier.ta.mjs";

/**
 * @summary HashAlgorithm
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * HashAlgorithm   ::=   AlgorithmIdentifier{DIGEST-ALGORITHM,{HashAlgorithms}}
 * ```
 */
export type HashAlgorithm = AlgorithmIdentifier; // DefinedType


let _cached_decoder_for_HashAlgorithm: $.ASN1Decoder<HashAlgorithm> | null = null;


/**
 * @summary Decodes an ASN.1 element into a(n) HashAlgorithm
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {HashAlgorithm} The decoded data structure.
 */
export function _decode_HashAlgorithm(el: _Element) {
    if (!_cached_decoder_for_HashAlgorithm) {
        _cached_decoder_for_HashAlgorithm = _decode_AlgorithmIdentifier;
    }
    return _cached_decoder_for_HashAlgorithm(el);
}


let _cached_encoder_for_HashAlgorithm: $.ASN1Encoder<HashAlgorithm> | null = null;


/**
 * @summary Encodes a(n) HashAlgorithm into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The HashAlgorithm, encoded as an ASN.1 Element.
 */
export function _encode_HashAlgorithm(
    value: HashAlgorithm,
    elGetter: $.ASN1Encoder<HashAlgorithm>
) {
    if (!_cached_encoder_for_HashAlgorithm) {
        _cached_encoder_for_HashAlgorithm = _encode_AlgorithmIdentifier;
    }
    return _cached_encoder_for_HashAlgorithm(value, elGetter);
}


/* eslint-enable */
