/* eslint-disable */
import { ASN1Element as _Element } from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import {
    AlgorithmIdentifier,
    _decode_AlgorithmIdentifier,
    _encode_AlgorithmIdentifier,
} from "@wildboar/x500/AuthenticationFramework";


/**
 * @summary PrivateKeyAlgorithmIdentifier
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * PrivateKeyAlgorithmIdentifier  ::=  AlgorithmIdentifier
 *                                     { PUBLIC-KEY,
 *                                     { PrivateKeyAlgorithms } }
 * ```
 */
export type PrivateKeyAlgorithmIdentifier = AlgorithmIdentifier; // DefinedType

/**
 * @summary Decodes an ASN.1 element into a(n) PrivateKeyAlgorithmIdentifier
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {PrivateKeyAlgorithmIdentifier} The decoded data structure.
 */
export const _decode_PrivateKeyAlgorithmIdentifier: $.ASN1Decoder<PrivateKeyAlgorithmIdentifier> = _decode_AlgorithmIdentifier;

/**
 * @summary Encodes a(n) PrivateKeyAlgorithmIdentifier into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The PrivateKeyAlgorithmIdentifier, encoded as an ASN.1 Element.
 */
export const _encode_PrivateKeyAlgorithmIdentifier: $.ASN1Encoder<PrivateKeyAlgorithmIdentifier> = _encode_AlgorithmIdentifier;


/* eslint-enable */
