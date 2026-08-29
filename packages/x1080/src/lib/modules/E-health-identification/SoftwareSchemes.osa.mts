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
import { type SOFTWARE_SCHEME } from '../E-health-identification/SOFTWARE-SCHEME.oca.mjs';

/**
 * @summary SoftwareSchemes
 * @description
 *
 * Extensible object set `{...}` of `SOFTWARE-SCHEME`s. Filled by
 * referencing specs / implementers' agreements. Scheme establishment
 * is out of scope of X.1080.1. ITU-T X.1080.1 (05/2018) §8.10.
 * https://www.itu.int/rec/T-REC-X.1080.1-201805-I
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * SoftwareSchemes    SOFTWARE-SCHEME ::= {...}
 * ```
 *
 * @constant
 * @type {SOFTWARE_SCHEME[]}
 *
 */
export const SoftwareSchemes: SOFTWARE_SCHEME[] = [];

/* eslint-enable */
