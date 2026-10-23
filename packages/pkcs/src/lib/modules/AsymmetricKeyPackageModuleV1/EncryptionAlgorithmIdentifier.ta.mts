/* eslint-disable */
import { ASN1Element as _Element } from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import {
    AlgorithmIdentifier,
    _decode_AlgorithmIdentifier,
    _encode_AlgorithmIdentifier,
} from "@wildboar/x500/AuthenticationFramework";


/**
 * @summary EncryptionAlgorithmIdentifier
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * EncryptionAlgorithmIdentifier  ::=  AlgorithmIdentifier
 *                                     { CONTENT-ENCRYPTION,
 *                                         { KeyEncryptionAlgorithms } }
 * ```
 */
export type EncryptionAlgorithmIdentifier = AlgorithmIdentifier; // DefinedType

/**
 * @summary Decodes an ASN.1 element into a(n) EncryptionAlgorithmIdentifier
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {EncryptionAlgorithmIdentifier} The decoded data structure.
 */
export const _decode_EncryptionAlgorithmIdentifier: $.ASN1Decoder<EncryptionAlgorithmIdentifier> = _decode_AlgorithmIdentifier;

/**
 * @summary Encodes a(n) EncryptionAlgorithmIdentifier into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The EncryptionAlgorithmIdentifier, encoded as an ASN.1 Element.
 */
export const _encode_EncryptionAlgorithmIdentifier: $.ASN1Encoder<EncryptionAlgorithmIdentifier> = _encode_AlgorithmIdentifier;


/* eslint-enable */
