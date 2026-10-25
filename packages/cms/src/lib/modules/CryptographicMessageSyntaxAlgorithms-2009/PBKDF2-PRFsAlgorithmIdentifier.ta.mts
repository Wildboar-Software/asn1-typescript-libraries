/* eslint-disable */
import { ASN1Element as _Element } from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { AlgorithmIdentifier, _decode_AlgorithmIdentifier, _encode_AlgorithmIdentifier } from "@wildboar/x500/AuthenticationFramework";

/**
 * @summary PBKDF2_PRFsAlgorithmIdentifier
 * @description
 *
 * AlgorithmIdentifier constrained to PBKDF2 PRF algorithms
 * ([RFC 5911](https://datatracker.ietf.org/doc/html/rfc5911) CMS algorithms module).
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * PBKDF2-PRFsAlgorithmIdentifier  ::=  AlgorithmIdentifier{ ALGORITHM,{PBKDF2-PRFs} }
 * ```
 */
export type PBKDF2_PRFsAlgorithmIdentifier = AlgorithmIdentifier; // DefinedType

/**
 * @summary Decodes an ASN.1 element into a(n) PBKDF2_PRFsAlgorithmIdentifier
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {PBKDF2_PRFsAlgorithmIdentifier} The decoded data structure.
 */
export const _decode_PBKDF2_PRFsAlgorithmIdentifier: $.ASN1Decoder<PBKDF2_PRFsAlgorithmIdentifier> = _decode_AlgorithmIdentifier;

/**
 * @summary Encodes a(n) PBKDF2_PRFsAlgorithmIdentifier into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The PBKDF2_PRFsAlgorithmIdentifier, encoded as an ASN.1 Element.
 */
export const _encode_PBKDF2_PRFsAlgorithmIdentifier: $.ASN1Encoder<PBKDF2_PRFsAlgorithmIdentifier> = _encode_AlgorithmIdentifier;


/* eslint-enable */
