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
import { id_med_staff } from '../E-health-identification/id-med-staff.va.mjs';
import {
    MedicalStaffIdentification,
    _decode_MedicalStaffIdentification,
    _encode_MedicalStaffIdentification,
} from '../E-health-identification/MedicalStaffIdentification.ta.mjs';
import { IDENTIFICATION } from '../E-health-identification/IDENTIFICATION.oca.mjs';

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

/* eslint-enable */
