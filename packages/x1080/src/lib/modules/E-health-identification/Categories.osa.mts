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
import { type IDENTIFICATION } from '../E-health-identification/IDENTIFICATION.oca.mjs';
import { patientIdentification } from '../E-health-identification/patientIdentification.oa.mjs';
import { medicalStaffIdentification } from '../E-health-identification/medicalStaffIdentification.oa.mjs';
import { observerIdentification } from '../E-health-identification/observerIdentification.oa.mjs';
import { pharmaceuticalStaffIdentification } from '../E-health-identification/pharmaceuticalStaffIdentification.oa.mjs';
import { laboratoryIdentification } from '../E-health-identification/laboratoryIdentification.oa.mjs';
import { manufacturerIdentification } from '../E-health-identification/manufacturerIdentification.oa.mjs';
import { deviceIdentification } from '../E-health-identification/deviceIdentification.oa.mjs';
import { softwareIdentification } from '../E-health-identification/softwareIdentification.oa.mjs';
import { insuranceIdentification } from '../E-health-identification/insuranceIdentification.oa.mjs';
import { medicalRecordIdentification } from '../E-health-identification/medicalRecordIdentification.oa.mjs';

/**
 * @summary Categories
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * Categories IDENTIFICATION ::= {
 *   patientIdentification |
 *   medicalStaffIdentification |
 *   observerIdentification |
 *   pharmaceuticalStaffIdentification |
 *   laboratoryIdentification |
 *   manufacturerIdentification |
 *   deviceIdentification |
 *   softwareIdentification |
 *   insuranceIdentification |
 *   medicalRecordIdentification,
 *   ... }
 * ```
 *
 * @constant
 * @type {IDENTIFICATION[]}
 *
 */
export const Categories: IDENTIFICATION[] = [
    patientIdentification,
    medicalStaffIdentification,
    observerIdentification,
    pharmaceuticalStaffIdentification,
    laboratoryIdentification,
    manufacturerIdentification,
    deviceIdentification,
    softwareIdentification,
    insuranceIdentification,
    medicalRecordIdentification,
];

/* eslint-enable */
