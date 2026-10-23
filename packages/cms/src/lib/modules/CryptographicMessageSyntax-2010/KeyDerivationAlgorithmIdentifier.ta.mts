/* eslint-disable */
import { ASN1Element as _Element } from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { AlgorithmIdentifier, _decode_AlgorithmIdentifier, _encode_AlgorithmIdentifier } from "@wildboar/x500/AuthenticationFramework";

/**
 * @summary KeyDerivationAlgorithmIdentifier
 * @description
 *
 * AlgorithmIdentifier for a key-derivation algorithm
 * ([RFC 5652 §10.1.6](https://datatracker.ietf.org/doc/html/rfc5652#section-10.1.6)).
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * KeyDerivationAlgorithmIdentifier  ::=  AlgorithmIdentifier
 * {KEY-DERIVATION, {KeyDerivationAlgs, ...}}
 * ```
 */
export type KeyDerivationAlgorithmIdentifier = AlgorithmIdentifier; // DefinedType

/**
 * @summary Decodes an ASN.1 element into a(n) KeyDerivationAlgorithmIdentifier
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {KeyDerivationAlgorithmIdentifier} The decoded data structure.
 */
export const _decode_KeyDerivationAlgorithmIdentifier: $.ASN1Decoder<KeyDerivationAlgorithmIdentifier> = _decode_AlgorithmIdentifier;

/**
 * @summary Encodes a(n) KeyDerivationAlgorithmIdentifier into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The KeyDerivationAlgorithmIdentifier, encoded as an ASN.1 Element.
 */
export const _encode_KeyDerivationAlgorithmIdentifier: $.ASN1Encoder<KeyDerivationAlgorithmIdentifier> = _encode_AlgorithmIdentifier;


/* eslint-enable */
