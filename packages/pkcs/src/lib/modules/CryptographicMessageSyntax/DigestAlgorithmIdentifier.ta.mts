/* eslint-disable */
import { ASN1Element as _Element } from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import {
    AlgorithmIdentifier,
    _decode_AlgorithmIdentifier,
    _encode_AlgorithmIdentifier,
} from "@wildboar/x500/AuthenticationFramework";


/**
 * @summary DigestAlgorithmIdentifier
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * DigestAlgorithmIdentifier  ::=  AlgorithmIdentifier
 * ```
 */
export type DigestAlgorithmIdentifier = AlgorithmIdentifier; // DefinedType

/**
 * @summary Decodes an ASN.1 element into a(n) DigestAlgorithmIdentifier
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {DigestAlgorithmIdentifier} The decoded data structure.
 */
export const _decode_DigestAlgorithmIdentifier: $.ASN1Decoder<DigestAlgorithmIdentifier> = _decode_AlgorithmIdentifier;

/**
 * @summary Encodes a(n) DigestAlgorithmIdentifier into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The DigestAlgorithmIdentifier, encoded as an ASN.1 Element.
 */
export const _encode_DigestAlgorithmIdentifier: $.ASN1Encoder<DigestAlgorithmIdentifier> = _encode_AlgorithmIdentifier;


/* eslint-enable */
