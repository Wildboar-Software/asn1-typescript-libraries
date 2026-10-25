/* eslint-disable */
import { ASN1Element as _Element } from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { AlgorithmIdentifier, _decode_AlgorithmIdentifier, _encode_AlgorithmIdentifier } from "@wildboar/x500/AuthenticationFramework";

/**
 * @summary PBKDF2_SaltSourcesAlgorithmIdentifier
 * @description
 *
 * AlgorithmIdentifier constrained to PBKDF2 salt-source algorithms
 * ([RFC 5911](https://datatracker.ietf.org/doc/html/rfc5911)).
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * PBKDF2-SaltSourcesAlgorithmIdentifier  ::=
 * AlgorithmIdentifier {ALGORITHM, {PBKDF2-SaltSources}}
 * ```
 */
export type PBKDF2_SaltSourcesAlgorithmIdentifier = AlgorithmIdentifier; // DefinedType

/**
 * @summary Decodes an ASN.1 element into a(n) PBKDF2_SaltSourcesAlgorithmIdentifier
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {PBKDF2_SaltSourcesAlgorithmIdentifier} The decoded data structure.
 */
export const _decode_PBKDF2_SaltSourcesAlgorithmIdentifier: $.ASN1Decoder<PBKDF2_SaltSourcesAlgorithmIdentifier> = _decode_AlgorithmIdentifier;

/**
 * @summary Encodes a(n) PBKDF2_SaltSourcesAlgorithmIdentifier into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The PBKDF2_SaltSourcesAlgorithmIdentifier, encoded as an ASN.1 Element.
 */
export const _encode_PBKDF2_SaltSourcesAlgorithmIdentifier: $.ASN1Encoder<PBKDF2_SaltSourcesAlgorithmIdentifier> = _encode_AlgorithmIdentifier;


/* eslint-enable */
