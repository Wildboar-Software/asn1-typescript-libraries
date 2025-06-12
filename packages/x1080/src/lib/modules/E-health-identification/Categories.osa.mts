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
import { IDENTIFICATION } from '../E-health-identification/IDENTIFICATION.oca.mjs';
export { IDENTIFICATION } from '../E-health-identification/IDENTIFICATION.oca.mjs';
import { patientIdentification } from '../E-health-identification/patientIdentification.oa.mjs';
export { patientIdentification } from '../E-health-identification/patientIdentification.oa.mjs';
import { medicalStaffIdentification } from '../E-health-identification/medicalStaffIdentification.oa.mjs';
export { medicalStaffIdentification } from '../E-health-identification/medicalStaffIdentification.oa.mjs';
import { observerIdentification } from '../E-health-identification/observerIdentification.oa.mjs';
export { observerIdentification } from '../E-health-identification/observerIdentification.oa.mjs';
import { pharmaceuticalStaffIdentification } from '../E-health-identification/pharmaceuticalStaffIdentification.oa.mjs';
export { pharmaceuticalStaffIdentification } from '../E-health-identification/pharmaceuticalStaffIdentification.oa.mjs';
import { laboratoryIdentification } from '../E-health-identification/laboratoryIdentification.oa.mjs';
export { laboratoryIdentification } from '../E-health-identification/laboratoryIdentification.oa.mjs';
import { manufacturerIdentification } from '../E-health-identification/manufacturerIdentification.oa.mjs';
export { manufacturerIdentification } from '../E-health-identification/manufacturerIdentification.oa.mjs';
import { deviceIdentification } from '../E-health-identification/deviceIdentification.oa.mjs';
export { deviceIdentification } from '../E-health-identification/deviceIdentification.oa.mjs';
import { softwareIdentification } from '../E-health-identification/softwareIdentification.oa.mjs';
export { softwareIdentification } from '../E-health-identification/softwareIdentification.oa.mjs';
import { insuranceIdentification } from '../E-health-identification/insuranceIdentification.oa.mjs';
export { insuranceIdentification } from '../E-health-identification/insuranceIdentification.oa.mjs';
import { medicalRecordIdentification } from '../E-health-identification/medicalRecordIdentification.oa.mjs';
export { medicalRecordIdentification } from '../E-health-identification/medicalRecordIdentification.oa.mjs';

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
