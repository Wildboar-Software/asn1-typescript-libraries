/* eslint-disable */
import {
  ASN1Element as _Element,
  ASN1TagClass as _TagClass,
  ASN1Construction as _Construction,
  ASN1UniversalType as _UniversalType,
  ObjectIdentifier as _OID,
  External as _External,
  EmbeddedPDV as _PDV,
  ASN1ConstructionError as _ConstructionError,
} from '@wildboar/asn1';
import * as $ from '@wildboar/asn1/functional';
import {
    AlgorithmIdentifier,
    _encode_AlgorithmIdentifier,
    _decode_AlgorithmIdentifier,
} from '@wildboar/x500/AuthenticationFramework';

/**
 * @summary HashAlgorithm
 * @description
 *
 * `AlgorithmIdentifier` constrained to digest algorithms
 * (including `mda-sha1`) used in SCVP hashes ([RFC 5912 §11](https://datatracker.ietf.org/doc/html/rfc5912#section-11)).
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * HashAlgorithm  ::=  AlgorithmIdentifier{DIGEST-ALGORITHM,
 *                     {mda-sha1, ...}}
 * ```
 */
export type HashAlgorithm = AlgorithmIdentifier; // DefinedType

/**
 * @summary Decodes an ASN.1 element into a(n) HashAlgorithm
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {HashAlgorithm} The decoded data structure.
 */
export const _decode_HashAlgorithm: $.ASN1Decoder<HashAlgorithm> = _decode_AlgorithmIdentifier;

/**
 * @summary Encodes a(n) HashAlgorithm into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The HashAlgorithm, encoded as an ASN.1 Element.
 */
export const _encode_HashAlgorithm: $.ASN1Encoder<HashAlgorithm> = _encode_AlgorithmIdentifier;


/* eslint-enable */
