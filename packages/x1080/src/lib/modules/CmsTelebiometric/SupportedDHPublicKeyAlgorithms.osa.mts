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
 * @summary SupportedDHPublicKeyAlgorithms
 * @description
 *
 * Open set of DH public-key algorithms for
 * `OriginatorPublicKey`. Extensible `{...}`; this profile does
 * not mandate an algorithm.
 * ITU-T Rec. X.1080.0 (2017) Cor.1 Annex B.3.3.
 * https://www.itu.int/rec/T-REC-X.1080.0-201703-I!Cor1
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * SupportedDHPublicKeyAlgorithms ALGORITHM ::= {...}
 * ```
 *
 * @constant
 * @type {ALGORITHM[]}
 *
 */
export const SupportedDHPublicKeyAlgorithms: ALGORITHM[] = [];

/* eslint-enable */
