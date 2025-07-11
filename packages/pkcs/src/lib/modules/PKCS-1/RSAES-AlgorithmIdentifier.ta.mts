/* eslint-disable */
import { ASN1Element as _Element } from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import {
    AlgorithmIdentifier,
    _decode_AlgorithmIdentifier,
    _encode_AlgorithmIdentifier,
} from "../PKCS-1/AlgorithmIdentifier.ta.mjs";

/**
 * @summary RSAES_AlgorithmIdentifier
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * RSAES-AlgorithmIdentifier  ::=  AlgorithmIdentifier {
 *     {PKCS1Algorithms}
 * }
 * ```
 */
export type RSAES_AlgorithmIdentifier = AlgorithmIdentifier; // DefinedType


let _cached_decoder_for_RSAES_AlgorithmIdentifier: $.ASN1Decoder<RSAES_AlgorithmIdentifier> | null = null;


/**
 * @summary Decodes an ASN.1 element into a(n) RSAES_AlgorithmIdentifier
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {RSAES_AlgorithmIdentifier} The decoded data structure.
 */
export function _decode_RSAES_AlgorithmIdentifier(el: _Element): RSAES_AlgorithmIdentifier {
    if (!_cached_decoder_for_RSAES_AlgorithmIdentifier) {
        _cached_decoder_for_RSAES_AlgorithmIdentifier = _decode_AlgorithmIdentifier;
    }
    return _cached_decoder_for_RSAES_AlgorithmIdentifier(el);
}


let _cached_encoder_for_RSAES_AlgorithmIdentifier: $.ASN1Encoder<RSAES_AlgorithmIdentifier> | null = null;


/**
 * @summary Encodes a(n) RSAES_AlgorithmIdentifier into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The RSAES_AlgorithmIdentifier, encoded as an ASN.1 Element.
 */
export function _encode_RSAES_AlgorithmIdentifier(
    value: RSAES_AlgorithmIdentifier,
    elGetter: $.ASN1Encoder<RSAES_AlgorithmIdentifier>
): _Element {
    if (!_cached_encoder_for_RSAES_AlgorithmIdentifier) {
        _cached_encoder_for_RSAES_AlgorithmIdentifier = _encode_AlgorithmIdentifier;
    }
    return _cached_encoder_for_RSAES_AlgorithmIdentifier(value, elGetter);
}


/* eslint-enable */
