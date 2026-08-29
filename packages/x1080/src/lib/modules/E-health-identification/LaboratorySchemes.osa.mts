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
import { type LABORATORY_SCHEME } from '../E-health-identification/LABORATORY-SCHEME.oca.mjs';

/**
 * @summary LaboratorySchemes
 * @description
 *
 * Extensible object set `{...}` of `LABORATORY-SCHEME`s. Filled by
 * referencing specs / implementers' agreements. Scheme establishment
 * is out of scope of X.1080.1. ITU-T X.1080.1 (05/2018) §8.7.
 * https://www.itu.int/rec/T-REC-X.1080.1-201805-I
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * LaboratorySchemes LABORATORY-SCHEME ::= {...}
 * ```
 *
 * @constant
 * @type {LABORATORY_SCHEME[]}
 *
 */
export const LaboratorySchemes: LABORATORY_SCHEME[] = [];

/* eslint-enable */
