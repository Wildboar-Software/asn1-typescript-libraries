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
import { type MEDICAL_STAFF_SCHEME } from '../E-health-identification/MEDICAL-STAFF-SCHEME.oca.mjs';

/**
 * @summary MedicalStaffSchemes
 * @description
 *
 * Extensible object set `{...}` of `MEDICAL-STAFF-SCHEME`s. Also
 * used for observers and pharmaceutical staff. Filled by referencing
 * specs / implementers' agreements. Scheme establishment is out of
 * scope of X.1080.1. ITU-T X.1080.1 (05/2018) §8.4.
 * https://www.itu.int/rec/T-REC-X.1080.1-201805-I
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * MedicalStaffSchemes MEDICAL-STAFF-SCHEME ::= {...}
 * ```
 *
 * @constant
 * @type {MEDICAL_STAFF_SCHEME[]}
 *
 */
export const MedicalStaffSchemes: MEDICAL_STAFF_SCHEME[] = [];

/* eslint-enable */
