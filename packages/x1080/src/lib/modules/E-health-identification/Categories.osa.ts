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
import * as $ from 'asn1-ts/dist/node/functional';
import { IDENTIFICATION } from '../E-health-identification/IDENTIFICATION.oca';
export { IDENTIFICATION } from '../E-health-identification/IDENTIFICATION.oca';
import { patientIdentification } from '../E-health-identification/patientIdentification.oa';
export { patientIdentification } from '../E-health-identification/patientIdentification.oa';
import { medicalStaffIdentification } from '../E-health-identification/medicalStaffIdentification.oa';
export { medicalStaffIdentification } from '../E-health-identification/medicalStaffIdentification.oa';
import { observerIdentification } from '../E-health-identification/observerIdentification.oa';
export { observerIdentification } from '../E-health-identification/observerIdentification.oa';
import { pharmaceuticalStaffIdentification } from '../E-health-identification/pharmaceuticalStaffIdentification.oa';
export { pharmaceuticalStaffIdentification } from '../E-health-identification/pharmaceuticalStaffIdentification.oa';
import { laboratoryIdentification } from '../E-health-identification/laboratoryIdentification.oa';
export { laboratoryIdentification } from '../E-health-identification/laboratoryIdentification.oa';
import { manufacturerIdentification } from '../E-health-identification/manufacturerIdentification.oa';
export { manufacturerIdentification } from '../E-health-identification/manufacturerIdentification.oa';
import { deviceIdentification } from '../E-health-identification/deviceIdentification.oa';
export { deviceIdentification } from '../E-health-identification/deviceIdentification.oa';
import { softwareIdentification } from '../E-health-identification/softwareIdentification.oa';
export { softwareIdentification } from '../E-health-identification/softwareIdentification.oa';
import { insuranceIdentification } from '../E-health-identification/insuranceIdentification.oa';
export { insuranceIdentification } from '../E-health-identification/insuranceIdentification.oa';
import { medicalRecordIdentification } from '../E-health-identification/medicalRecordIdentification.oa';
export { medicalRecordIdentification } from '../E-health-identification/medicalRecordIdentification.oa';

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
