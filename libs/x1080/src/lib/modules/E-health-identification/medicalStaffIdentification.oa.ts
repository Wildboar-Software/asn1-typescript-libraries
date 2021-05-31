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
import { id_med_staff } from '../E-health-identification/id-med-staff.va';
export { id_med_staff } from '../E-health-identification/id-med-staff.va';
import {
    MedicalStaffIdentification,
    _decode_MedicalStaffIdentification,
    _encode_MedicalStaffIdentification,
} from '../E-health-identification/MedicalStaffIdentification.ta';
export {
    MedicalStaffIdentification,
    _decode_MedicalStaffIdentification,
    _encode_MedicalStaffIdentification,
} from '../E-health-identification/MedicalStaffIdentification.ta';
import { IDENTIFICATION } from '../E-health-identification/IDENTIFICATION.oca';
export { IDENTIFICATION } from '../E-health-identification/IDENTIFICATION.oca';

/* START_OF_SYMBOL_DEFINITION medicalStaffIdentification */
/**
 * @summary medicalStaffIdentification
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * medicalStaffIdentification IDENTIFICATION ::= {
 *   CATEGORY         id-med-staff
 *   IDENTIFIED WITH  MedicalStaffIdentification }
 * ```
 *
 * @constant
 * @type {IDENTIFICATION<MedicalStaffIdentification>}
 * @implements {IDENTIFICATION<MedicalStaffIdentification>}
 */
export const medicalStaffIdentification: IDENTIFICATION<MedicalStaffIdentification> = {
    class: 'IDENTIFICATION',
    decoderFor: {
        '&Identification': _decode_MedicalStaffIdentification,
    },
    encoderFor: {
        '&Identification': _encode_MedicalStaffIdentification,
    },
    '&category': id_med_staff /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    '&Identification': 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};
/* END_OF_SYMBOL_DEFINITION medicalStaffIdentification */

/* eslint-enable */
