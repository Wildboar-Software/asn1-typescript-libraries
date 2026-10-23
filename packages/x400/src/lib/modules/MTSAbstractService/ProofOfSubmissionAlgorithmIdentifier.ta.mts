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
    _decode_AlgorithmIdentifier,
    _encode_AlgorithmIdentifier,
} from '@wildboar/x500/AuthenticationFramework';
/**
 * @summary ProofOfSubmissionAlgorithmIdentifier
 * @description
 *
 * An algorithm-identifier identifies an algorithm and any algorithm-parameters required by
 * the algorithm. It shall also define the ASN.1 encoding rules used. See ITU-T X.411
 * (1999), §8.5.10.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ProofOfSubmissionAlgorithmIdentifier  ::=  AlgorithmIdentifier
 * ```
 */
export type ProofOfSubmissionAlgorithmIdentifier = AlgorithmIdentifier; // DefinedType

/**
 * @summary Decodes an ASN.1 element into a(n) ProofOfSubmissionAlgorithmIdentifier
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ProofOfSubmissionAlgorithmIdentifier} The decoded data structure.
 */
export const _decode_ProofOfSubmissionAlgorithmIdentifier: $.ASN1Decoder<ProofOfSubmissionAlgorithmIdentifier> = _decode_AlgorithmIdentifier;

/**
 * @summary Encodes a(n) ProofOfSubmissionAlgorithmIdentifier into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ProofOfSubmissionAlgorithmIdentifier, encoded as an ASN.1 Element.
 */
export const _encode_ProofOfSubmissionAlgorithmIdentifier: $.ASN1Encoder<ProofOfSubmissionAlgorithmIdentifier> = _encode_AlgorithmIdentifier;


/* eslint-enable */
