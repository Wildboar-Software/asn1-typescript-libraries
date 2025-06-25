/* eslint-disable */
import { ASN1Element as _Element } from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { AlgorithmIdentifier, _decode_AlgorithmIdentifier, _encode_AlgorithmIdentifier } from "@wildboar/x500/src/lib/modules/AuthenticationFramework/AlgorithmIdentifier.ta.mjs";

/**
 * @summary PSourceAlgorithm
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * PSourceAlgorithm  ::=  AlgorithmIdentifier{ALGORITHM,{PSS-SourceAlgorithms}}
 * ```
 */
export type PSourceAlgorithm = AlgorithmIdentifier; // DefinedType


let _cached_decoder_for_PSourceAlgorithm: $.ASN1Decoder<PSourceAlgorithm> | null = null;


/**
 * @summary Decodes an ASN.1 element into a(n) PSourceAlgorithm
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {PSourceAlgorithm} The decoded data structure.
 */
export function _decode_PSourceAlgorithm(el: _Element): PSourceAlgorithm {
    if (!_cached_decoder_for_PSourceAlgorithm) {
        _cached_decoder_for_PSourceAlgorithm = _decode_AlgorithmIdentifier;
    }
    return _cached_decoder_for_PSourceAlgorithm(el);
}


let _cached_encoder_for_PSourceAlgorithm: $.ASN1Encoder<PSourceAlgorithm> | null = null;


/**
 * @summary Encodes a(n) PSourceAlgorithm into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The PSourceAlgorithm, encoded as an ASN.1 Element.
 */
export function _encode_PSourceAlgorithm(
    value: PSourceAlgorithm,
    elGetter: $.ASN1Encoder<PSourceAlgorithm>
): _Element {
    if (!_cached_encoder_for_PSourceAlgorithm) {
        _cached_encoder_for_PSourceAlgorithm = _encode_AlgorithmIdentifier;
    }
    return _cached_encoder_for_PSourceAlgorithm(value, elGetter);
}


/* eslint-enable */
