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
 * @summary KeyEncryptionAlgorithmIdentifier
 * @description
 *
 * Key-wrapping algorithm for the CEK. AES Key Wrap (RFC 3394)
 * is mentioned; not mandated. Same wrapping algorithm is
 * recommended for a whole `ct-authEnvelopedData` session.
 * ITU-T Rec. X.1080.0 (2017) Cor.1 Annex B.3.3, B.4.2.
 * https://www.itu.int/rec/T-REC-X.1080.0-201703-I!Cor1
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * KeyEncryptionAlgorithmIdentifier  ::=
 *    AlgorithmIdentifier{{SupportedKeyIncryptAlgorithms}}
 * ```
 */
export type KeyEncryptionAlgorithmIdentifier = AlgorithmIdentifier; // DefinedType

/**
 * @summary Decodes an ASN.1 element into a(n) KeyEncryptionAlgorithmIdentifier
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {KeyEncryptionAlgorithmIdentifier} The decoded data structure.
 */
export const _decode_KeyEncryptionAlgorithmIdentifier: $.ASN1Decoder<KeyEncryptionAlgorithmIdentifier> = _decode_AlgorithmIdentifier;

/**
 * @summary Encodes a(n) KeyEncryptionAlgorithmIdentifier into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The KeyEncryptionAlgorithmIdentifier, encoded as an ASN.1 Element.
 */
export const _encode_KeyEncryptionAlgorithmIdentifier: $.ASN1Encoder<KeyEncryptionAlgorithmIdentifier> = _encode_AlgorithmIdentifier;


/* eslint-enable */
