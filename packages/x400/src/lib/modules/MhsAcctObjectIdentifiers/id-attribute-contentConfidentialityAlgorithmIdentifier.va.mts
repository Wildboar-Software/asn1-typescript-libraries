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
import { ID, _decode_ID, _encode_ID } from '../MhsAcctObjectIdentifiers/ID.ta.mjs';
import { id_attribute } from '../MhsAcctObjectIdentifiers/id-attribute.va.mjs';
/**
 * @summary id_attribute_contentConfidentialityAlgorithmIdentifier
 * @description
 *
 * This argument contains an algorithm-identifier, which identifies the algorithm used by
 * the originator of the message to encrypt the message content (to provide the Content
 * Confidentiality element-of-service as defined in 18 The algorithm may be used by the
 * recipient(s) of the message to decrypt the message content. The content-confidentiality
 * algorithm may be either a symmetric- or an asymmetric-encryption-algorithm. See ITU-T
 * X.411 (1999), §8.2.1.1.1.27.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-attribute-contentConfidentialityAlgorithmIdentifier ID ::= {id-attribute  19}
 * ```
 *
 * @constant
 */
export const id_attribute_contentConfidentialityAlgorithmIdentifier: ID = _OID.fromParts(
    [19],
    id_attribute
);

/* eslint-enable */
