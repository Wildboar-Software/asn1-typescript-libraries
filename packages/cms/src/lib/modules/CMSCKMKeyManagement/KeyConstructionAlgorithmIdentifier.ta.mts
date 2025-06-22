/* eslint-disable */
import { ASN1Element as _Element } from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { AlgorithmIdentifier, _decode_AlgorithmIdentifier, _encode_AlgorithmIdentifier } from "@wildboar/x500/src/lib/modules/AuthenticationFramework/AlgorithmIdentifier.ta.mjs";

/**
 * @summary KeyConstructionAlgorithmIdentifier
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * KeyConstructionAlgorithmIdentifier  ::=
 * AlgorithmIdentifier {ALGORITHM,{KeyConstructionAlgorithms}}
 * ```
 */
export type KeyConstructionAlgorithmIdentifier = AlgorithmIdentifier; // DefinedType


let _cached_decoder_for_KeyConstructionAlgorithmIdentifier: $.ASN1Decoder<KeyConstructionAlgorithmIdentifier> | null = null;


/**
 * @summary Decodes an ASN.1 element into a(n) KeyConstructionAlgorithmIdentifier
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {KeyConstructionAlgorithmIdentifier} The decoded data structure.
 */
export function _decode_KeyConstructionAlgorithmIdentifier(el: _Element) {
    if (!_cached_decoder_for_KeyConstructionAlgorithmIdentifier) {
        _cached_decoder_for_KeyConstructionAlgorithmIdentifier = _decode_AlgorithmIdentifier;
    }
    return _cached_decoder_for_KeyConstructionAlgorithmIdentifier(el);
}


let _cached_encoder_for_KeyConstructionAlgorithmIdentifier: $.ASN1Encoder<KeyConstructionAlgorithmIdentifier> | null = null;


/**
 * @summary Encodes a(n) KeyConstructionAlgorithmIdentifier into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The KeyConstructionAlgorithmIdentifier, encoded as an ASN.1 Element.
 */
export function _encode_KeyConstructionAlgorithmIdentifier(
    value: KeyConstructionAlgorithmIdentifier,
    elGetter: $.ASN1Encoder<KeyConstructionAlgorithmIdentifier>
) {
    if (!_cached_encoder_for_KeyConstructionAlgorithmIdentifier) {
        _cached_encoder_for_KeyConstructionAlgorithmIdentifier = _encode_AlgorithmIdentifier;
    }
    return _cached_encoder_for_KeyConstructionAlgorithmIdentifier(
        value,
        elGetter
    );
}


/* eslint-enable */
