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
import { id_med_rec } from '../E-health-identification/id-med-rec.va.js';
export { id_med_rec } from '../E-health-identification/id-med-rec.va.js';
import {
    MedicalRecordIdentification,
    _decode_MedicalRecordIdentification,
    _encode_MedicalRecordIdentification,
} from '../E-health-identification/MedicalRecordIdentification.ta.js';
export {
    MedicalRecordIdentification,
    _decode_MedicalRecordIdentification,
    _encode_MedicalRecordIdentification,
} from '../E-health-identification/MedicalRecordIdentification.ta.js';
import { IDENTIFICATION } from '../E-health-identification/IDENTIFICATION.oca.js';
export { IDENTIFICATION } from '../E-health-identification/IDENTIFICATION.oca.js';

/* START_OF_SYMBOL_DEFINITION medicalRecordIdentification */
/**
 * @summary medicalRecordIdentification
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * medicalRecordIdentification IDENTIFICATION ::= {
 *   CATEGORY        id-med-rec
 *   IDENTIFIED WITH MedicalRecordIdentification }
 * ```
 *
 * @constant
 * @type {IDENTIFICATION<MedicalRecordIdentification>}
 * @implements {IDENTIFICATION<MedicalRecordIdentification>}
 */
export const medicalRecordIdentification: IDENTIFICATION<MedicalRecordIdentification> = {
    class: 'IDENTIFICATION',
    decoderFor: {
        '&Identification': _decode_MedicalRecordIdentification,
    },
    encoderFor: {
        '&Identification': _encode_MedicalRecordIdentification,
    },
    '&category': id_med_rec /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    '&Identification': 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};
/* END_OF_SYMBOL_DEFINITION medicalRecordIdentification */

/* eslint-enable */
