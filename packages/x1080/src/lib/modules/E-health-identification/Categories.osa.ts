/* eslint-disable */
import {
    itu_t,
    itu_r,
    ccitt,
    iso,
    joint_iso_itu_t,
    joint_iso_ccitt,
    OPTIONAL,
    BOOLEAN,
    INTEGER,
    BIT_STRING,
    OCTET_STRING,
    NULL,
    OBJECT_IDENTIFIER,
    ObjectDescriptor,
    EXTERNAL,
    REAL,
    INSTANCE_OF,
    ENUMERATED,
    EMBEDDED_PDV,
    UTF8String,
    RELATIVE_OID,
    SEQUENCE,
    SEQUENCE_OF,
    SET,
    SET_OF,
    GraphicString,
    NumericString,
    VisibleString,
    PrintableString,
    ISO646String,
    TeletexString,
    GeneralString,
    T61String,
    UniversalString,
    VideotexString,
    BMPString,
    IA5String,
    CharacterString,
    UTCTime,
    GeneralizedTime,
    TIME,
    DATE,
    TIME_OF_DAY,
    DATE_TIME,
    DURATION,
    OID_IRI,
    RELATIVE_OID_IRI,
    TRUE,
    FALSE,
    TRUE_BIT,
    FALSE_BIT,
    PLUS_INFINITY,
    MINUS_INFINITY,
    NOT_A_NUMBER,
    TYPE_IDENTIFIER,
    ABSTRACT_SYNTAX,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1Construction as _Construction,
    ASN1UniversalType as _UniversalType,
    ObjectIdentifier as _OID,
    External as _External,
    EmbeddedPDV as _PDV,
    ASN1ConstructionError as _ConstructionError,
} from 'asn1-ts';
import * as $ from 'asn1-ts/dist/functional.mjs';
import { IDENTIFICATION } from '../E-health-identification/IDENTIFICATION.oca.js';
export { IDENTIFICATION } from '../E-health-identification/IDENTIFICATION.oca.js';
import { patientIdentification } from '../E-health-identification/patientIdentification.oa.js';
export { patientIdentification } from '../E-health-identification/patientIdentification.oa.js';
import { medicalStaffIdentification } from '../E-health-identification/medicalStaffIdentification.oa.js';
export { medicalStaffIdentification } from '../E-health-identification/medicalStaffIdentification.oa.js';
import { observerIdentification } from '../E-health-identification/observerIdentification.oa.js';
export { observerIdentification } from '../E-health-identification/observerIdentification.oa.js';
import { pharmaceuticalStaffIdentification } from '../E-health-identification/pharmaceuticalStaffIdentification.oa.js';
export { pharmaceuticalStaffIdentification } from '../E-health-identification/pharmaceuticalStaffIdentification.oa.js';
import { laboratoryIdentification } from '../E-health-identification/laboratoryIdentification.oa.js';
export { laboratoryIdentification } from '../E-health-identification/laboratoryIdentification.oa.js';
import { manufacturerIdentification } from '../E-health-identification/manufacturerIdentification.oa.js';
export { manufacturerIdentification } from '../E-health-identification/manufacturerIdentification.oa.js';
import { deviceIdentification } from '../E-health-identification/deviceIdentification.oa.js';
export { deviceIdentification } from '../E-health-identification/deviceIdentification.oa.js';
import { softwareIdentification } from '../E-health-identification/softwareIdentification.oa.js';
export { softwareIdentification } from '../E-health-identification/softwareIdentification.oa.js';
import { insuranceIdentification } from '../E-health-identification/insuranceIdentification.oa.js';
export { insuranceIdentification } from '../E-health-identification/insuranceIdentification.oa.js';
import { medicalRecordIdentification } from '../E-health-identification/medicalRecordIdentification.oa.js';
export { medicalRecordIdentification } from '../E-health-identification/medicalRecordIdentification.oa.js';

/* START_OF_SYMBOL_DEFINITION Categories */
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
/* END_OF_SYMBOL_DEFINITION Categories */

/* eslint-enable */
