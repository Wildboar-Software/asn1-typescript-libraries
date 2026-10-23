/* eslint-disable */
import { ASN1Element as _Element } from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import {
    AlgorithmIdentifier,
    _decode_AlgorithmIdentifier,
    _encode_AlgorithmIdentifier,
} from "@wildboar/x500/AuthenticationFramework";


/**
 * @summary DigestEncryptionAlgorithmIdentifier
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * DigestEncryptionAlgorithmIdentifier  ::=  AlgorithmIdentifier
 * ```
 */
export type DigestEncryptionAlgorithmIdentifier = AlgorithmIdentifier; // DefinedType

/**
 * @summary Decodes an ASN.1 element into a(n) DigestEncryptionAlgorithmIdentifier
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {DigestEncryptionAlgorithmIdentifier} The decoded data structure.
 */
export const _decode_DigestEncryptionAlgorithmIdentifier: $.ASN1Decoder<DigestEncryptionAlgorithmIdentifier> = _decode_AlgorithmIdentifier;

/**
 * @summary Encodes a(n) DigestEncryptionAlgorithmIdentifier into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The DigestEncryptionAlgorithmIdentifier, encoded as an ASN.1 Element.
 */
export const _encode_DigestEncryptionAlgorithmIdentifier: $.ASN1Encoder<DigestEncryptionAlgorithmIdentifier> = _encode_AlgorithmIdentifier;


/* eslint-enable */
