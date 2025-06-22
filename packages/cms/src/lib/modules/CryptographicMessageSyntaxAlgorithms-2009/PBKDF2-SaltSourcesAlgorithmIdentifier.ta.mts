/* eslint-disable */
import { ASN1Element as _Element } from "asn1-ts";
import * as $ from "@wildboar/asn1/functional";
import { AlgorithmIdentifier, _decode_AlgorithmIdentifier, _encode_AlgorithmIdentifier } from "@wildboar/x500/src/lib/modules/AuthenticationFramework/AlgorithmIdentifier.ta.mjs";

/**
 * @summary PBKDF2_SaltSourcesAlgorithmIdentifier
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * PBKDF2-SaltSourcesAlgorithmIdentifier  ::=
 * AlgorithmIdentifier {ALGORITHM, {PBKDF2-SaltSources}}
 * ```
 */
export type PBKDF2_SaltSourcesAlgorithmIdentifier = AlgorithmIdentifier; // DefinedType


let _cached_decoder_for_PBKDF2_SaltSourcesAlgorithmIdentifier: $.ASN1Decoder<PBKDF2_SaltSourcesAlgorithmIdentifier> | null = null;


/**
 * @summary Decodes an ASN.1 element into a(n) PBKDF2_SaltSourcesAlgorithmIdentifier
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {PBKDF2_SaltSourcesAlgorithmIdentifier} The decoded data structure.
 */
export function _decode_PBKDF2_SaltSourcesAlgorithmIdentifier(el: _Element) {
    if (!_cached_decoder_for_PBKDF2_SaltSourcesAlgorithmIdentifier) {
        _cached_decoder_for_PBKDF2_SaltSourcesAlgorithmIdentifier = _decode_AlgorithmIdentifier;
    }
    return _cached_decoder_for_PBKDF2_SaltSourcesAlgorithmIdentifier(el);
}


let _cached_encoder_for_PBKDF2_SaltSourcesAlgorithmIdentifier: $.ASN1Encoder<PBKDF2_SaltSourcesAlgorithmIdentifier> | null = null;


/**
 * @summary Encodes a(n) PBKDF2_SaltSourcesAlgorithmIdentifier into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The PBKDF2_SaltSourcesAlgorithmIdentifier, encoded as an ASN.1 Element.
 */
export function _encode_PBKDF2_SaltSourcesAlgorithmIdentifier(
    value: PBKDF2_SaltSourcesAlgorithmIdentifier,
    elGetter: $.ASN1Encoder<PBKDF2_SaltSourcesAlgorithmIdentifier>
) {
    if (!_cached_encoder_for_PBKDF2_SaltSourcesAlgorithmIdentifier) {
        _cached_encoder_for_PBKDF2_SaltSourcesAlgorithmIdentifier = _encode_AlgorithmIdentifier;
    }
    return _cached_encoder_for_PBKDF2_SaltSourcesAlgorithmIdentifier(
        value,
        elGetter
    );
}


/* eslint-enable */
