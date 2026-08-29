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
 * @summary SymmetricEncryptionAlgorithms
 * @description
 *
 * Open set of symmetric content-encryption algorithms.
 * Extensible `{...}`; filled by referencing specs or
 * implementers' agreements. Session traffic after setup uses
 * AES-GCM (RFC 5084).
 * ITU-T Rec. X.1080.0 (2017) Cor.1 Annex B.3.5, B.4.1.
 * https://www.itu.int/rec/T-REC-X.1080.0-201703-I!Cor1
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * SymmetricEncryptionAlgorithms ALGORITHM ::= {...}
 * ```
 *
 * @constant
 * @type {ALGORITHM[]}
 *
 */
export const SymmetricEncryptionAlgorithms: ALGORITHM[] = [];

/* eslint-enable */
