/* eslint-disable */
import { ASN1Element as _Element } from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { AlgorithmIdentifier, _decode_AlgorithmIdentifier, _encode_AlgorithmIdentifier } from "@wildboar/x500/AuthenticationFramework";

/**
 * @summary SigncryptedDataAlgorithmIdentifier
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * SigncryptedDataAlgorithmIdentifier  ::=
 * AlgorithmIdentifier{ALGORITHM,{SigncryptAlgorithms}}
 * ```
 */
export type SigncryptedDataAlgorithmIdentifier = AlgorithmIdentifier; // DefinedType


let _cached_decoder_for_SigncryptedDataAlgorithmIdentifier: $.ASN1Decoder<SigncryptedDataAlgorithmIdentifier> | null = null;


/**
 * @summary Decodes an ASN.1 element into a(n) SigncryptedDataAlgorithmIdentifier
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {SigncryptedDataAlgorithmIdentifier} The decoded data structure.
 */
export function _decode_SigncryptedDataAlgorithmIdentifier(el: _Element): SigncryptedDataAlgorithmIdentifier {
    if (!_cached_decoder_for_SigncryptedDataAlgorithmIdentifier) {
        _cached_decoder_for_SigncryptedDataAlgorithmIdentifier = _decode_AlgorithmIdentifier;
    }
    return _cached_decoder_for_SigncryptedDataAlgorithmIdentifier(el);
}


let _cached_encoder_for_SigncryptedDataAlgorithmIdentifier: $.ASN1Encoder<SigncryptedDataAlgorithmIdentifier> | null = null;


/**
 * @summary Encodes a(n) SigncryptedDataAlgorithmIdentifier into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SigncryptedDataAlgorithmIdentifier, encoded as an ASN.1 Element.
 */
export function _encode_SigncryptedDataAlgorithmIdentifier(
    value: SigncryptedDataAlgorithmIdentifier,
    elGetter: $.ASN1Encoder<SigncryptedDataAlgorithmIdentifier>
): _Element {
    if (!_cached_encoder_for_SigncryptedDataAlgorithmIdentifier) {
        _cached_encoder_for_SigncryptedDataAlgorithmIdentifier = _encode_AlgorithmIdentifier;
    }
    return _cached_encoder_for_SigncryptedDataAlgorithmIdentifier(
        value,
        elGetter
    );
}


/* eslint-enable */
