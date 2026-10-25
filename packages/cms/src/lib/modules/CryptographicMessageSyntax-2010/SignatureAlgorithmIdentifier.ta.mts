/* eslint-disable */
import { ASN1Element as _Element } from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { AlgorithmIdentifier, _decode_AlgorithmIdentifier, _encode_AlgorithmIdentifier } from "@wildboar/x500/AuthenticationFramework";

/**
 * @summary SignatureAlgorithmIdentifier
 * @description
 *
 * AlgorithmIdentifier for a signature algorithm
 * ([RFC 5652 §10.1.2](https://datatracker.ietf.org/doc/html/rfc5652#section-10.1.2)).
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * SignatureAlgorithmIdentifier  ::=  AlgorithmIdentifier
 * {SIGNATURE-ALGORITHM, {SignatureAlgorithmSet}}
 * ```
 */
export type SignatureAlgorithmIdentifier = AlgorithmIdentifier; // DefinedType

/**
 * @summary Decodes an ASN.1 element into a(n) SignatureAlgorithmIdentifier
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {SignatureAlgorithmIdentifier} The decoded data structure.
 */
export const _decode_SignatureAlgorithmIdentifier: $.ASN1Decoder<SignatureAlgorithmIdentifier> = _decode_AlgorithmIdentifier;

/**
 * @summary Encodes a(n) SignatureAlgorithmIdentifier into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SignatureAlgorithmIdentifier, encoded as an ASN.1 Element.
 */
export const _encode_SignatureAlgorithmIdentifier: $.ASN1Encoder<SignatureAlgorithmIdentifier> = _encode_AlgorithmIdentifier;


/* eslint-enable */
