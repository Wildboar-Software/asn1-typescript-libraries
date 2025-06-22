/* eslint-disable */
import { ASN1Element as _Element } from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import {
    AlgorithmIdentifier,
    _decode_AlgorithmIdentifier,
    _encode_AlgorithmIdentifier,
} from "../AuthenticationFramework/AlgorithmIdentifier.ta.mjs";
/**
 * @summary PwdEncAlg
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * PwdEncAlg  ::=  AlgorithmIdentifier{{SupportedAlgorithms}}
 * ```
 */
export type PwdEncAlg = AlgorithmIdentifier; // DefinedType

let _cached_decoder_for_PwdEncAlg: $.ASN1Decoder<PwdEncAlg> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) PwdEncAlg
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {PwdEncAlg} The decoded data structure.
 */
export function _decode_PwdEncAlg(el: _Element) {
    if (!_cached_decoder_for_PwdEncAlg) {
        _cached_decoder_for_PwdEncAlg = _decode_AlgorithmIdentifier;
    }
    return _cached_decoder_for_PwdEncAlg(el);
}

let _cached_encoder_for_PwdEncAlg: $.ASN1Encoder<PwdEncAlg> | null = null;

/**
 * @summary Encodes a(n) PwdEncAlg into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The PwdEncAlg, encoded as an ASN.1 Element.
 */
export function _encode_PwdEncAlg(
    value: PwdEncAlg,
    elGetter: $.ASN1Encoder<PwdEncAlg>
) {
    if (!_cached_encoder_for_PwdEncAlg) {
        _cached_encoder_for_PwdEncAlg = _encode_AlgorithmIdentifier;
    }
    return _cached_encoder_for_PwdEncAlg(value, elGetter);
}


/* eslint-enable */
