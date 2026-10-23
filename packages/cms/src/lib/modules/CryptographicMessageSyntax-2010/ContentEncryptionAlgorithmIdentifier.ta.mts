/* eslint-disable */
import { ASN1Element as _Element } from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { AlgorithmIdentifier, _decode_AlgorithmIdentifier, _encode_AlgorithmIdentifier } from "@wildboar/x500/AuthenticationFramework";

/**
 * @summary ContentEncryptionAlgorithmIdentifier
 * @description
 *
 * AlgorithmIdentifier for a content-encryption algorithm
 * ([RFC 5652 §10.1.4](https://datatracker.ietf.org/doc/html/rfc5652#section-10.1.4)).
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ContentEncryptionAlgorithmIdentifier  ::=  AlgorithmIdentifier
 * {CONTENT-ENCRYPTION, {ContentEncryptionAlgorithmSet}}
 * ```
 */
export type ContentEncryptionAlgorithmIdentifier = AlgorithmIdentifier; // DefinedType

/**
 * @summary Decodes an ASN.1 element into a(n) ContentEncryptionAlgorithmIdentifier
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ContentEncryptionAlgorithmIdentifier} The decoded data structure.
 */
export const _decode_ContentEncryptionAlgorithmIdentifier: $.ASN1Decoder<ContentEncryptionAlgorithmIdentifier> = _decode_AlgorithmIdentifier;

/**
 * @summary Encodes a(n) ContentEncryptionAlgorithmIdentifier into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ContentEncryptionAlgorithmIdentifier, encoded as an ASN.1 Element.
 */
export const _encode_ContentEncryptionAlgorithmIdentifier: $.ASN1Encoder<ContentEncryptionAlgorithmIdentifier> = _encode_AlgorithmIdentifier;


/* eslint-enable */
