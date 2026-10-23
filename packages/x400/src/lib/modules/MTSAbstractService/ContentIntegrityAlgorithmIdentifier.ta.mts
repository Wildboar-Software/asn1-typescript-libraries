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
 * @summary ContentIntegrityAlgorithmIdentifier
 * @description
 *
 * An algorithm-identifier identifies an algorithm and any algorithm-parameters required by
 * the algorithm. It shall also define the ASN.1 encoding rules used. See ITU-T X.411
 * (1999), §8.5.10.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ContentIntegrityAlgorithmIdentifier  ::=  AlgorithmIdentifier
 * ```
 */
export type ContentIntegrityAlgorithmIdentifier = AlgorithmIdentifier; // DefinedType

/**
 * @summary Decodes an ASN.1 element into a(n) ContentIntegrityAlgorithmIdentifier
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ContentIntegrityAlgorithmIdentifier} The decoded data structure.
 */
export const _decode_ContentIntegrityAlgorithmIdentifier: $.ASN1Decoder<ContentIntegrityAlgorithmIdentifier> = _decode_AlgorithmIdentifier;

/**
 * @summary Encodes a(n) ContentIntegrityAlgorithmIdentifier into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ContentIntegrityAlgorithmIdentifier, encoded as an ASN.1 Element.
 */
export const _encode_ContentIntegrityAlgorithmIdentifier: $.ASN1Encoder<ContentIntegrityAlgorithmIdentifier> = _encode_AlgorithmIdentifier;


/* eslint-enable */
