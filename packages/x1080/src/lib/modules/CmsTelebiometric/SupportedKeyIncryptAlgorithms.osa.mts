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
import { type ALGORITHM } from '@wildboar/x500/AuthenticationFramework';

/**
 * @summary SupportedKeyIncryptAlgorithms
 * @description
 *
 * Open set of key-wrapping (key-encryption) algorithms.
 * Extensible `{...}`; AES Key Wrap (RFC 3394) is mentioned, not
 * mandated.
 * ITU-T Rec. X.1080.0 (2017) Cor.1 Annex B.3.3.
 * https://www.itu.int/rec/T-REC-X.1080.0-201703-I!Cor1
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * SupportedKeyIncryptAlgorithms ALGORITHM ::= {...}
 * ```
 *
 * @constant
 * @type {ALGORITHM[]}
 *
 */
export const SupportedKeyIncryptAlgorithms: ALGORITHM[] = [];

/* eslint-enable */
