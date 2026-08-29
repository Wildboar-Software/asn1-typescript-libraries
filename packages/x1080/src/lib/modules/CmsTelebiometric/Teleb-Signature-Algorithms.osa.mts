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
 * @summary Teleb_Signature_Algorithms
 * @description
 *
 * Open set of signature algorithms for `SignerInfo`. Extensible
 * `{...}`; this profile does not mandate an algorithm.
 * ITU-T Rec. X.1080.0 (2017) Cor.1 Annex B.2.
 * https://www.itu.int/rec/T-REC-X.1080.0-201703-I!Cor1
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * Teleb-Signature-Algorithms ALGORITHM ::= {...}
 * ```
 *
 * @constant
 * @type {ALGORITHM[]}
 *
 */
export const Teleb_Signature_Algorithms: ALGORITHM[] = [];

/* eslint-enable */
